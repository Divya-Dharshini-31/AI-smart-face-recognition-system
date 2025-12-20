from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import LeaveRequest
from .serializers import LeaveRequestSerializer


# 1️⃣ Admin: Get all leave requests
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_leaves(request):
    leaves = LeaveRequest.objects.all().order_by('-applied_at')
    serializer = LeaveRequestSerializer(leaves, many=True)
    return Response(serializer.data)


# 2️⃣ Admin: Get single leave request
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_single_leave(request, leave_id):
    try:
        leave = LeaveRequest.objects.get(id=leave_id)
    except LeaveRequest.DoesNotExist:
        return Response({'error': 'Leave not found'}, status=404)

    serializer = LeaveRequestSerializer(leave)
    return Response(serializer.data)


# 3️⃣ Admin: Approve or Reject leave
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_leave_status(request, leave_id):
    try:
        leave = LeaveRequest.objects.get(id=leave_id)
    except LeaveRequest.DoesNotExist:
        return Response({'error': 'Leave not found'}, status=404)

    new_status = request.data.get('status')

    if new_status not in ['APPROVED', 'REJECTED']:
        return Response({'error': 'Invalid status'}, status=400)

    leave.status = new_status
    leave.save()

    return Response({'message': f'Leave {new_status.lower()} successfully'})
