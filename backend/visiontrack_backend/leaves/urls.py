from django.urls import path
from .views import (
    get_all_leaves,
    get_single_leave,
    update_leave_status,
    create_leave
)

urlpatterns = [
    path('admin/leaves/', get_all_leaves),
    path('admin/leaves/<str:leave_id>/', get_single_leave),
    path('admin/leaves/<str:leave_id>/status/', update_leave_status),
    path('leaves/create/', create_leave),   
]
