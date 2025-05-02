import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.db import Base

@pytest.fixture(scope="function")
def db_session():
    # always use in-memory SQLite for tests
    engine = create_engine("sqlite:///:memory:", future=True)
    TestingSession = sessionmaker(bind=engine, autoflush=False, autocommit=False)

    # create schema
    Base.metadata.create_all(engine)
    db = TestingSession()
    yield db
    db.close()
    # drop schema
    Base.metadata.drop_all(engine)
