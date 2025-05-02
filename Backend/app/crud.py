from sqlalchemy import select, case
from sqlalchemy.orm import Session, joinedload
from app import models, schemas
from app.models import User, FlaggedUser

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()

def flag_user(db: Session, flag_in: schemas.FlagCreate):
    flag = models.FlaggedUser(**flag_in.dict())
    db.add(flag)
    db.commit()
    db.refresh(flag)
    return flag

def is_user_flagged(db: Session, user_id: int) -> bool:
    return db.query(models.FlaggedUser).filter(models.FlaggedUser.user_id == user_id).count() > 0

def get_user_status_list(db: Session):
    users = (
        db.query(User)
          .options(joinedload(User.flags))
          .all()
    )

    result = []
    for u in users:
        reasons = [f.reason for f in u.flags]
        is_bot  = len(reasons) > 0
        result.append({
            "user_id":           u.id,
            "email":             u.email,
            "bot_status":        is_bot,
            "flag_reasons":      reasons,
            "view_monetization": not is_bot,
        })
    return result


def delete_user(db: Session, user_id: int) -> bool:
    user = db.get(models.User, user_id)
    if not user:
        return False

    db.delete(user)
    db.commit()
    return True
