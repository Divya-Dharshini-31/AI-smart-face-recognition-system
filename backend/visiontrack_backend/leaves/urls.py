# leaves/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_leave, name='create_leave'),
    path('', views.get_leaves, name='get_leaves'),
    path('<str:leave_id>/', views.get_leave, name='get_leave'),
    path('<str:leave_id>/approve/', views.approve_leave, name='approve_leave'),
    path('<str:leave_id>/reject/', views.reject_leave, name='reject_leave'),
]
