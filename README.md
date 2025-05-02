# Honeypot bot simulation and user flagging

## Honeypot Back‑End Service

A lightweight service to detect and flag automated bot behavior (honeypot hits), store flags for users, and disable monetization for flagged accounts.

---

## Tech Stack

* **FastAPI**: HTTP API with automatic OpenAPI docs
* **SQLAlchemy + Pydantic**: ORM models & data validation
* **PostgreSQL**: Durable storage of users & flagged events
* **Redis**: In-memory counters & rate‑limiting (optional)
* **Alembic**: Schema migrations (optional)
* **pytest**: Unit testing for CRUD logic and fixtures
* **Jinja2**: Admin UI template for live user/flag dashboard
* **Selenium / Scripts**: Automated event simulation for testing
* **Docker Compose**: Containerized local development (Postgres + Redis)

---

## Repository Structure

```
BigCo/
├── app/                     # FastAPI application
│   ├── main.py              # Entrypoint; mounts routers & templates
│   ├── config.py            # Environment configuration (DATABASE_URL, REDIS_URL)
│   ├── db.py                # SQLAlchemy engine, session, Base
│   ├── models.py            # User & FlaggedUser ORM models
│   ├── crud.py              # CRUD helpers
│   ├── schemas.py           # Pydantic request/response models
│   ├── routers/             # API & admin routes
│   │   ├── users.py         # User creation & user‑status endpoint
│   │   ├── flags.py         # Flag creation, list, and delete by user_id
│   │   └── admin.py         # HTML dashboard at `/admin/users`
│   └── templates/           # Jinja2 templates (users.html)
│       └── users.html       # Live table of users & flags
├── scripts/                 # Helper scripts and simulations
│   ├── simulated_clicks.py  # Terminal event output every N seconds
│   └── watch_video.py       # (Example) Selenium-based testing script
├── tests/                   # pytest test modules
│   ├── conftest.py          # Fixtures for in-memory SQLite tests
│   └── test_crud.py         # Tests for user/flag CRUD functions
├── .env                     # Environment variables
├── docker-compose.yml       # Local Postgres + Redis services
├── requirements.txt         # Python dependencies
└── README.md                # Project overview & setup instructions
```

---

## Setup & Run (Local Development)

1. **Clone** the repo:

   ```bash
   git clone <repo-url>
   cd BigCo
   ```

2. **Create & activate** a virtual environment:

   ```bash
   python -m venv .venv
   source .venv/bin/activate
   ```

3. **Install** dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure** environment variables in `.env`:

   ```dotenv
   DATABASE_URL=postgresql://user:pass@localhost:5432/honeypot
   REDIS_URL=redis://localhost:6379
   ```

5. **Start** Postgres & Redis via Docker Compose:

   ```bash
   docker-compose up -d
   ```

6. **Run** the FastAPI app:

   ```bash
   uvicorn app.main:app --reload --port 5400
   ```

7. **Browse**:

   * **API docs**: `http://localhost:5400/docs`
   * **Admin UI**: `http://localhost:5400/admin/users`

---

## API Endpoints

* **POST** `/api/users`  → Create user
* **DELETE** `/api/users/{user_id}` → Delete user & flags
* **POST** `/api/flags`  → Flag a user (`user_id`, `reason`)
* **GET** `/api/flags/{user_id}` → List all flags for a user
* **DELETE** `/api/flags/{user_id}` → Remove all flags for a user
* **GET** `/api/user-status` → List users with `bot_status` & `view_monetization`

---

## Testing

* **Unit tests**: `pytest tests/`
* Uses in-memory SQLite for isolation

---

## Admin Dashboard

* Renders a live HTML table of users, their flags, and monetization status
* Accessible at `/admin/users` (not included in `/docs`)

---

## Simulations & Scripts

* **simulated\_clicks.py**: prints click-events to terminal at a defined interval
* **watch\_video.py**: example Selenium script (optional)

---

## Reset Database

* **SQL**:

  ```sql
  TRUNCATE TABLE flagged_users, users RESTART IDENTITY CASCADE;
  ```
* **Python**:

  ```python
  from app.db import engine, Base
  Base.metadata.drop_all(bind=engine)
  Base.metadata.create_all(bind=engine)
  ```
* **Docker**: `docker-compose down -v && docker-compose up -d`

## Honeypot Front-end service
