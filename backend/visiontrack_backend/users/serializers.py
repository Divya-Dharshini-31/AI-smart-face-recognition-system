from rest_framework import serializers
from .models import User

class UserSerializer(serializers.Serializer):
    email = serializers.EmailField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    role = serializers.CharField()
    mobile = serializers.CharField()
    password = serializers.CharField(write_only=True)
