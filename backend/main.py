from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import delete, select
from sqlalchemy.exc import IntegrityError
from database import fetch_all_events
import model

#Creating the app
app = FastAPI(title="Kumojin Event Manager")

#Add the middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def root():
    return "Hello World!"

@app.get('/api/event')
async def list_events():
    response = await fetch_all_events()
    return response

@app.post('/api/event')
def create_event(event: model.Event):
    return 1

@app.delete('/api/event/{event_id}')
def delete_event(event_id: int):
    return 1
