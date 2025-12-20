from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# visiontrack_backend/urls.py
from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Backend is running!"})

urlpatterns = [
    path("", home),  # <- homepage
    path("api/", include("leaves.urls")),
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
