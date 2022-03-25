from pydantic import BaseModel
from datetime import date, datetime

class Event(BaseModel):
    title: str
    description: str
    start_date: date
    end_date: date
