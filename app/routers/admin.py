from fastapi import APIRouter, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session

from app.crud import get_user_status_list
from app.db import SessionLocal

router = APIRouter()

templates = Jinja2Templates(directory="app/templates")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/admin/users", response_class=HTMLResponse, include_in_schema=False)
def admin_users(request: Request, db: Session = Depends(get_db)):
    users = get_user_status_list(db)
    return templates.TemplateResponse(
        "users.html",
        {"request": request, "users": users}
    )
