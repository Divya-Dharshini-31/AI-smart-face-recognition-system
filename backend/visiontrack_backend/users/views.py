#from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import SignInSerializer
from .models import User,OTP
from .serializers import UserSerializer
from .db import connect  # ensures MongoDB connects
from django.contrib.auth.hashers import check_password
import jwt
from django.conf import settings
import random
from datetime import datetime,timedelta



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
    

class SignInView(APIView):
    def post(self, request):
        serializer = SignInSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            role = serializer.validated_data['role']

            # Find user
            user = User.objects(email=email, role=role).first()
            if not user:
                return Response({"success": False, "message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

            # Check hashed password
            if not check_password(password, user.password):
                return Response({"success": False, "message": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)

            # Create JWT token
            payload = {
                "email": user.email,
                "role": user.role
            }
            access_token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")

            return Response({
                "success": True,
                "access": access_token,
                "refresh": access_token  # simple example, can create separate refresh
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SendOTPView(APIView):
    def post(self, request):
        email = request.data.get("email")
        if not email:
            return Response({"success": False, "message": "Email is required"}, status=status.HTTP_400_BAD_REQUEST)

        # Generate OTP
        code = str(random.randint(1000, 9999))

        # Remove any previous OTPs for this email
        OTP.objects(email=email).delete()

        # Save new OTP with expiration (e.g., 5 minutes)
        expires_at = datetime.utcnow() + timedelta(minutes=5)
        OTP(email=email, code=code, expires_at=expires_at).save()

        # 🔹 Print OTP in backend console
        print(f"Generated OTP for {email}: {code}")

        return Response({"success": True, "message": "OTP sent successfully"})

class VerifyOTPView(APIView):
    def post(self, request):
        email = request.data.get("email")
        code = request.data.get("code")
        if not email or not code:
            return Response({"success": False, "message": "Email and OTP are required"}, status=status.HTTP_400_BAD_REQUEST)

        otp_obj = OTP.objects(email=email, code=code).first()
        if not otp_obj:
            return Response({"success": False, "message": "Invalid OTP"}, status=status.HTTP_400_BAD_REQUEST)

        if otp_obj.expires_at < datetime.utcnow():
            otp_obj.delete()
            return Response({"success": False, "message": "OTP expired"}, status=status.HTTP_400_BAD_REQUEST)

        otp_obj.delete()
        return Response({"success": True, "message": "OTP verified"})

class ResetPasswordView(APIView):
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return Response({"success": False, "message": "Email and password are required"}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects(email=email).first()
        if not user:
            return Response({"success": False, "message": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        # Hash the password before saving
        user.password = make_password(password)
        user.save()
        return Response({"success": True, "message": "Password reset successfully"})


