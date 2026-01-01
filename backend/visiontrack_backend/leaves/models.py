# leaves/models.py
from mongoengine import Document, StringField, DateField, DateTimeField
from datetime import datetime
from mongoengine import connect
import os

# Connect MongoEngine to your MongoDB
MONGO_URI = os.getenv(
    "MONGO_URI",
    "mongodb+srv://VisionAdmin:vision-23-ADMIN@visiontrack.jh77ask.mongodb.net/VisionTrack"
)

connect(host=MONGO_URI)

class Leave(Document):
    name = StringField(required=True)
    role = StringField(required=True, choices=['Student', 'Teacher'])
    from_date = DateField(required=True)
    to_date = DateField(required=True)
    reason = StringField(required=True)
    document = StringField()  # optional: store file path or URL
    status = StringField(choices=['PENDING','APPROVED','REJECTED'], default='PENDING')
    created_at = DateTimeField(default=datetime.utcnow)

    meta = {
        'collection': 'leaves',
        'ordering': ['-created_at']
    }
