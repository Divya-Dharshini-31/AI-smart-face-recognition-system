from django.urls import path
from .views import *

urlpatterns = [
    path('admin/leaves/', get_all_leaves),
    path('admin/leaves/<str:leave_id>/', get_single_leave),
    path('admin/leaves/<str:leave_id>/status/', update_leave_status),
]
