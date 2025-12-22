
# Create your models here.
from mongoengine import Document, StringField, EmailField,DateTimeField
from datetime import datetime, timedelta
class User(Document):
    email = EmailField(required=True, unique=True)
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    role = StringField(required=True)
    mobile = StringField(required=True)
    password = StringField(required=True)

    meta = {"collection": "users"}

#OTP
class OTP(Document):
    email = EmailField(required=True)
    code = StringField(required=True)
    expires_at = DateTimeField(required=True, default=lambda: datetime.utcnow() + timedelta(minutes=5))

    meta = {"collection": "otp_codes"}




