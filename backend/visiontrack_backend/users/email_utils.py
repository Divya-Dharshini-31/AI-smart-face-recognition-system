from django.core.mail import send_mail
from django.conf import settings

def send_otp_email(email, otp):
    subject = "VisionTrack OTP Verification"
    message = f"""
Hello,

Your OTP for password reset is: {otp}

This OTP is valid for 5 minutes.
Do not share it with anyone.

– VisionTrack Team
"""
    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [email],
        fail_silently=False,
    )
