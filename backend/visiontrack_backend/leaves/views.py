from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import LeaveRequest
from datetime import datetime

# --------------------
# Get all leaves
# --------------------
@api_view(['GET'])
def get_all_leaves(request):
    leaves = LeaveRequest.objects()
    data = []
    for leave in leaves:
        data.append({
            "id": str(leave.id),
            "user_id": leave.user_id,
            "name": leave.name,
            "role": leave.role,
            "leave_type": leave.leave_type,
            "from_date": leave.from_date,
            "to_date": leave.to_date,
            "reason": leave.reason,
            "status": leave.status,
            "document": leave.document.url if leave.document else None,
            "applied_at": leave.applied_at,
        })
    return Response(data)

# --------------------
# Get single leave
# --------------------
@api_view(['GET'])
def get_single_leave(request, leave_id):
    leave = LeaveRequest.objects(id=leave_id).first()
    if not leave:
        return Response({"error": "Leave not found"}, status=status.HTTP_404_NOT_FOUND)
    data = {
        "id": str(leave.id),
        "user_id": leave.user_id,
        "name": leave.name,
        "role": leave.role,
        "leave_type": leave.leave_type,
        "from_date": leave.from_date,
        "to_date": leave.to_date,
        "reason": leave.reason,
        "status": leave.status,
        "document": leave.document.url if leave.document else None,
        "applied_at": leave.applied_at,
    }
    return Response(data)

# --------------------
# Update leave status
# --------------------
@api_view(['PUT'])
def update_leave_status(request, leave_id):
    leave = LeaveRequest.objects(id=leave_id).first()
    if not leave:
        return Response({"error": "Leave not found"}, status=status.HTTP_404_NOT_FOUND)

    new_status = request.data.get("status")
    if new_status not in ["APPROVED", "REJECTED"]:
        return Response({"error": "Invalid status"}, status=status.HTTP_400_BAD_REQUEST)

    leave.status = new_status
    leave.save()
    return Response({"message": f"Leave {new_status.lower()} successfully"})

# --------------------
# Create new leave (POST endpoint)
# --------------------
@api_view(['POST'])
def create_leave(request):
    data = request.data
    try:
        leave = LeaveRequest(
            user_id=data['user_id'],
            name=data['name'],
            role=data['role'],
            leave_type=data['leave_type'],
            from_date=datetime.strptime(data['from_date'], '%Y-%m-%d'),
            to_date=datetime.strptime(data['to_date'], '%Y-%m-%d'),
            reason=data.get('reason', ''),
            status=data.get('status', 'PENDING')
        )
        leave.save()
        return Response({"message": "Leave request created", "id": str(leave.id)}, status=status.HTTP_201_CREATED)
    except KeyError as e:
        return Response({"error": f"Missing field: {str(e)}"}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
