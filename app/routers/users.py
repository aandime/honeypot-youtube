from fastapi import APIRouter, Depends, status, HTTPException
from sqlalchemy.orm import Session

from app import crud
from app import models, schemas
from app.db import SessionLocal
from typing import List

router = APIRouter(tags=["users"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post(
    "/users",
    response_model=schemas.User,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new user",
)
def create_user(user_in: schemas.UserCreate, db: Session = Depends(get_db)):
    existing = db.query(models.User).filter_by(email=user_in.email).first()
    if existing:
        raise HTTPException(400, "Email already registered")
    user = models.User(**user_in.dict())
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.get(
    "/user-status",
    response_model=List[schemas.UserStatus],
    summary="List all users with bot status and monetization flag",
)
def list_user_status(db: Session = Depends(get_db)):
    return crud.get_user_status_list(db)

@router.delete(
    "/users/{user_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a user (and their flags)",
)
def remove_user(user_id: int, db: Session = Depends(get_db)):
    success = crud.delete_user(db, user_id)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User {user_id} not found"
        )
    # 204 No Content → no response body
