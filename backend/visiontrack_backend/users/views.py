#from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password

from .models import User
from .serializers import UserSerializer
from common.mongo import connect


class SignUpView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            data = serializer.validated_data

            if User.objects(email=data['email']).first():
                return Response(
                    {"success": False, "message": "Email already exists"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            user = User(
                email=data['email'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                role=data['role'],
                mobile=data['mobile'],
                password=make_password(data['password']),
            )
            user.save()

            return Response({"success": True, "message": "Signup successful"})

        return Response(
            {"success": False, "message": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST
        )
