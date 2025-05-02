from typing       import List
from fastapi      import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from psycopg2.errors import UniqueViolation


from app import crud, schemas, models
from app.db      import SessionLocal

router = APIRouter(tags=["flags"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post(
    "/flags",
    response_model=schemas.Flag,
    status_code=status.HTTP_201_CREATED,
    summary="Flag a user as a bot",
)
def create_flag(flag_in: schemas.FlagCreate, db: Session = Depends(get_db)):
    user = db.get(models.User, flag_in.user_id)
    if not user:
        raise HTTPException(404, f"User {flag_in.user_id} not found")
    try:
        return crud.flag_user(db, flag_in)
    except UniqueViolation:
        raise HTTPException(
            status_code=409,
            detail=f"User {flag_in.user_id} already has reason '{flag_in.reason}'"
        )

@router.get(
    "/flags/{user_id}",
    response_model=List[schemas.Flag],
    summary="List all flags for a given user",
)
def read_flags(user_id: int, db: Session = Depends(get_db)):
    flags = db.query(models.FlaggedUser).filter_by(user_id=user_id).all()
    if not flags:
        raise HTTPException(status_code=404, detail="No flags for that user")
    return flags

@router.delete(
    "/flags/{user_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Remove all flags for a given user",
)
def delete_flags_for_user(user_id: int, db: Session = Depends(get_db)):
    flags = db.query(models.FlaggedUser).filter_by(user_id=user_id).all()
    if not flags:
        raise HTTPException(status_code=404, detail="No flags to delete for that user")
    for flag in flags:
        db.delete(flag)
    db.commit()
