from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from datetime import datetime

from app.db import Base

class User(Base):
    __tablename__ = "users"
    id    = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)

    flags = relationship("FlaggedUser", back_populates="user")

class FlaggedUser(Base):
    __tablename__ = "flagged_users"
    __table_args__ = (
        UniqueConstraint("user_id", "reason", name="uq_flagged_users_user_reason"),
    )

    id         = Column(Integer, primary_key=True, index=True)
    user_id    = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), index=True)
    reason     = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    user = relationship("User", back_populates="flags")

