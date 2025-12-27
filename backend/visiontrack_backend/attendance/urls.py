from django.urls import path
from .views import admin_report,my_attendance_history

urlpatterns = [
    path("admin-report/", admin_report),
    path("attendance-history/", my_attendance_history),
]

