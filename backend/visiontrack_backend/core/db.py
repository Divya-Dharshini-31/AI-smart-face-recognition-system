from pymongo import MongoClient
import os

MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://VisionAdmin:vision-23-ADMIN@visiontrack.jh77ask.mongodb.net/VisionTrack"
)

client = MongoClient(MONGO_URI)

db = client["VisionTrack"]

users_col = db["users"]
attendance_col = db["attendance"]
notifications_col=db["notifications"]