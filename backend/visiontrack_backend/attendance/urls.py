from django.urls import path
from .views import admin_report,my_attendance_history,mark_attendance

urlpatterns = [
    path("admin-report/", admin_report),
    path("attendance-history/", my_attendance_history),
    path("mark-attendance/", mark_attendance), 
]

