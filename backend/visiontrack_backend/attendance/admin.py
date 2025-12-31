from django.contrib import admin
from .models import Attendance
from django.contrib import admin
from .models import Person, Attendance

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ("user", "role")


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = (
        'person', 'date', 'status',
        'check_in', 'check_out'
    )
    list_filter = ('status', 'date')
