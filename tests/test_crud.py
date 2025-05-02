import pytest
from app import crud, models, schemas


def test_flag_and_check(db_session):
    # create a dummy user
    user = models.User(email="bot@example.com")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    assert crud.is_user_flagged(db_session, user.id) is False

    # flag them
    flag = crud.flag_user(db_session, 
         schemas.FlagCreate(user_id=user.id, reason="honeypot"))
    assert flag.user_id == user.id
    assert crud.is_user_flagged(db_session, user.id) is True

def test_delete_user_and_flags(db_session):
    # 1. create user
    user = models.User(email="todelete@example.com")
    db_session.add(user)
    db_session.commit()
    db_session.refresh(user)

    # 2. flag them once
    crud.flag_user(db_session, schemas.FlagCreate(user_id=user.id, reason="test"))
    assert crud.is_user_flagged(db_session, user.id)

    # 3. delete user
    deleted = crud.delete_user(db_session, user.id)
    assert deleted is True

    # 4. ensure user and flags are gone
    assert db_session.get(models.User, user.id) is None
    assert not crud.is_user_flagged(db_session, user.id)

    # 5. deleting again returns False
    assert crud.delete_user(db_session, user.id) is False
