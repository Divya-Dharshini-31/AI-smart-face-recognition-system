from rest_framework.decorators import api_view
from rest_framework.response import Response
from datetime import date

from .models import Attendance
from .serializers import AttendanceHistorySerializer


# ===================== REPORT HELPERS =====================

def monthly_report(month, year):
    qs = Attendance.objects.filter(date__month=month, date__year=year)

    total_days = qs.count()
    present = qs.filter(status__in=["present", "late"]).count()
    absent = qs.filter(status__in=["absent", "leave"]).count()

    return {
        "total_days": total_days,
        "present": present,
        "absent": absent
    }


def weekly_report(month, year):
    qs = Attendance.objects.filter(date__month=month, date__year=year)

    weeks = {}

    for record in qs:
        week = (record.date.day - 1) // 7 + 1

        if week not in weeks:
            weeks[week] = {"Present": 0, "Absent": 0}

        if record.status in ["present", "late"]:
            weeks[week]["Present"] += 1
        else:
            weeks[week]["Absent"] += 1

    return [
        {"name": f"Week {w}", **counts}
        for w, counts in weeks.items()
    ]


def role_wise_pie(role, month, year):
    qs = Attendance.objects.filter(
        person__role=role,
        date__month=month,
        date__year=year
    )

    present = qs.filter(status__in=["present", "late"]).count()
    absent = qs.filter(status__in=["absent", "leave"]).count()

    return [
        {"name": "Present", "value": present},
        {"name": "Absent", "value": absent},
    ]


# ===================== API VIEWS =====================

@api_view(["GET"])
def admin_report(request):
    month = int(request.GET.get("month", date.today().month))
    year = int(request.GET.get("year", date.today().year))

    return Response({
        "summary": monthly_report(month, year),
        "weekly": weekly_report(month, year),
        "studentPie": role_wise_pie("student", month, year),
        "teacherPie": role_wise_pie("teacher", month, year),
    })


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Attendance
from .serializers import AttendanceHistorySerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def my_attendance_history(request):
    """
    Returns the attendance history of the logged-in user
    for the given month/year.
    Handles anonymous users safely.
    """
    # Ensure the user has a Person object
    try:
        user_person = request.user.person
    except AttributeError:
        # Anonymous or user without Person object
        return Response({
            "attendance": [],
            "percentage": 0
        })

    # Get month and year from query params
    month = int(request.GET.get("month", 1))
    year = int(request.GET.get("year", 2025))

    # Filter attendance only for this user
    attendance_qs = Attendance.objects.filter(
        person=user_person,
        date__month=month,
        date__year=year
    ).order_by("-date")

    # Serialize data
    serializer = AttendanceHistorySerializer(attendance_qs, many=True)

    # Calculate attendance percentage
    total_days = attendance_qs.count()
    present_days = attendance_qs.filter(status__in=["present", "late"]).count()
    percentage = round((present_days / total_days) * 100) if total_days > 0 else 0

    return Response({
        "attendance": serializer.data,
        "percentage": percentage
    })
