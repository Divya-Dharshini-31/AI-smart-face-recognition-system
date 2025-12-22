from mongoengine import (
    Document,
    StringField,
    DateField,
    DateTimeField,
    FileField
)
from datetime import datetime


class LeaveRequest(Document):
    user_id = StringField(required=True)     # student / teacher id
    name = StringField(required=True)
    role = StringField(required=True)        # student / teacher

    leave_type = StringField(
        choices=['MEDICAL', 'PERSONAL', 'TRAINING'],
        required=True
    )

    from_date = DateField(required=True)
    to_date = DateField(required=True)
    reason = StringField()

    document = FileField(required=False)

    status = StringField(
        choices=['PENDING', 'APPROVED', 'REJECTED'],
        default='PENDING'
    )

    applied_at = DateTimeField(default=datetime.utcnow)

    meta = {
        "collection": "leave_requests",
        "ordering": ["-applied_at"]
    }
