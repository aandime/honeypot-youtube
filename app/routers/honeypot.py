from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, schemas
from app.db import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/hp/{trap_id}")
def honeypot_hit(trap_id: str, db: Session = Depends(get_db)):
    fake_user_id = 0
    crud.flag_user(db, schemas.FlagCreate(user_id=fake_user_id,
                                          reason=f"trap {trap_id} hit"))
    return {"status": "ok"}
