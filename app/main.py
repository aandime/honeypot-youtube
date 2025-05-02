from fastapi import FastAPI
from app.db import engine, Base
from app.routers import honeypot, flags, users
from app.routers.admin import router as admin_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Honeypot API")

app.include_router(honeypot.router, prefix="/api")

app.include_router(flags.router, prefix="/api")

app.include_router(users.router,  prefix="/api")

app.include_router(admin_router)  