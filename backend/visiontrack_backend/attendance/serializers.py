from rest_framework import serializers
from .models import Attendance

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = "__all__"

from rest_framework import serializers
from .models import Attendance

class AttendanceHistorySerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%Y-%m-%d")
    check_in = serializers.TimeField(format="%H:%M", allow_null=True)
    check_out = serializers.TimeField(format="%H:%M", allow_null=True)

    class Meta:
        model = Attendance
        fields = [
            "date",
            "check_in",
            "check_out",
            "status",
            "note",
        ]
