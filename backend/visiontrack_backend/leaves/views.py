# leaves/views.py
from django.http import JsonResponse
from .models import Leave
from django.views.decorators.csrf import csrf_exempt
import json
from bson import ObjectId
from datetime import datetime

@csrf_exempt
def create_leave(request):
    if request.method == "POST":
        data = json.loads(request.body)
        leave = Leave(
            name = data.get('name'),
            role = data.get('role'),
            from_date = datetime.strptime(data.get('from_date'), '%Y-%m-%d').date(),
            to_date = datetime.strptime(data.get('to_date'), '%Y-%m-%d').date(),
            reason = data.get('reason'),
            document = data.get('document', None)
        )
        leave.save()
        return JsonResponse({"message": "Leave request submitted", "id": str(leave.id)}, status=201)
    return JsonResponse({"error": "Invalid request method"}, status=400)


def get_leaves(request):
    leaves = Leave.objects()
    leave_list = []
    for l in leaves:
        leave_list.append({
            "id": str(l.id),
            "name": l.name,
            "role": l.role,
            "from_date": l.from_date.strftime('%Y-%m-%d'),
            "to_date": l.to_date.strftime('%Y-%m-%d'),
            "reason": l.reason,
            "status": l.status
        })
    return JsonResponse(leave_list, safe=False)


def get_leave(request, leave_id):
    try:
        l = Leave.objects.get(id=leave_id)
        return JsonResponse({
            "id": str(l.id),
            "name": l.name,
            "role": l.role,
            "from_date": l.from_date.strftime('%Y-%m-%d'),
            "to_date": l.to_date.strftime('%Y-%m-%d'),
            "reason": l.reason,
            "status": l.status
        })
    except Leave.DoesNotExist:
        return JsonResponse({"error": "Leave not found"}, status=404)


@csrf_exempt
def approve_leave(request, leave_id):
    if request.method == "PUT":
        try:
            l = Leave.objects.get(id=leave_id)
            l.status = "APPROVED"
            l.save()
            return JsonResponse({"message": "Leave approved"})
        except Leave.DoesNotExist:
            return JsonResponse({"error": "Leave not found"}, status=404)
    return JsonResponse({"error": "Invalid request method"}, status=400)


@csrf_exempt
def reject_leave(request, leave_id):
    if request.method == "PUT":
        try:
            l = Leave.objects.get(id=leave_id)
            l.status = "REJECTED"
            l.save()
            return JsonResponse({"message": "Leave rejected"})
        except Leave.DoesNotExist:
            return JsonResponse({"error": "Leave not found"}, status=404)
    return JsonResponse({"error": "Invalid request method"}, status=400)
