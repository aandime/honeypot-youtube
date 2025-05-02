from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

class UserBase(BaseModel):
    email: EmailStr

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class UserStatus(BaseModel):
    user_id: int
    email: EmailStr
    bot_status: bool
    flag_reasons: List[str]
    view_monetization: bool

    class Config:
        orm_mode = True



class FlagBase(BaseModel):
    user_id: int
    reason: str

class FlagCreate(FlagBase):
    pass

class Flag(FlagBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
