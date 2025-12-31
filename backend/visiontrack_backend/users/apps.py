from django.apps import AppConfig
from mongoengine import connect

class UsersConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "users"

    def ready(self):
        connect(
            db="VisionTrack",
            host="mongodb+srv://VisionAdmin:vision-23-ADMIN@visiontrack.jh77ask.mongodb.net/VisionTrack"
        )
