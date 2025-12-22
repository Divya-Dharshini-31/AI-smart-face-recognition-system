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
from .serializers import UserSerializer,ForgotEmailSerializer,OTPVerifySerializer,ResetPasswordSerializer
from .db import connect  # ensures MongoDB connects
from django.contrib.auth.hashers import check_password
import jwt
from django.conf import settings
import random
from datetime import datetime,timedelta
from .email_utils import send_otp_email

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
    
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import make_password
from .models import User, OTP
from .serializers import ForgotEmailSerializer, OTPVerifySerializer, ResetPasswordSerializer

import random
from datetime import datetime


class SendOTPView(APIView):
    def post(self, request):
        serializer = ForgotEmailSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data["email"]

        if not User.objects(email=email).first():
            return Response(
                {"success": False, "message": "User not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # delete old OTPs
        OTP.objects(email=email).delete()

        # generate exactly 4-digit OTP (string)
        otp_code = str(random.randint(1000, 9999))

        OTP(
            email=email,
            code=otp_code
        ).save()

        print(f"🔐 OTP for {email}: {otp_code}")  # console
        send_otp_email(email, otp_code)  

        return Response(
            {"success": True, "message": "OTP sent successfully"},
            status=status.HTTP_200_OK
        )



class VerifyOTPView(APIView):
    def post(self, request):
        serializer = OTPVerifySerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        email = serializer.validated_data["email"]
        entered_code = str(serializer.validated_data["code"])  # ✅ FORCE STRING

        # enforce 4-digit OTP
        if len(entered_code) != 4:
            return Response(
                {"success": False, "message": "OTP must be 4 digits"},
                status=status.HTTP_400_BAD_REQUEST
            )

        otp_obj = OTP.objects(email=email).first()

        if not otp_obj:
            return Response(
                {"success": False, "message": "OTP not found or expired"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # check expiry if exists
        if hasattr(otp_obj, "expires_at") and otp_obj.expires_at:
            if otp_obj.expires_at < datetime.utcnow():
                otp_obj.delete()
                return Response(
                    {"success": False, "message": "OTP expired"},
                    status=status.HTTP_400_BAD_REQUEST
                )

        if otp_obj.code != entered_code:
            return Response(
                {"success": False, "message": "Invalid OTP"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # ✅ SUCCESS: delete OTP
        otp_obj.delete()

        return Response(
            {"success": True, "message": "OTP verified successfully"},
            status=status.HTTP_200_OK
        )


class ResetPasswordView(APIView):
    def post(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]

            user = User.objects(email=email).first()
            if not user:
                return Response({"success": False, "message": "User not found"}, status=404)

            user.password = make_password(password)
            user.save()

            OTP.objects(email=email).delete()

            return Response({"success": True, "message": "Password reset successful"})

        return Response(serializer.errors, status=400)
