from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50)  # e.g., "admin", "student", "teacher"

    def __str__(self):
        return self.name
