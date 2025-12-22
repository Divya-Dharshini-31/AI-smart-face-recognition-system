from django.urls import path
from .views import SignUpView
from .views import SignInView,SendOTPView,VerifyOTPView,ResetPasswordView,UserProfileView

urlpatterns = [
    path('signup/', SignUpView.as_view()),
    path("signin/", SignInView.as_view(), name="signin"),
    path('send-otp/', SendOTPView.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset-password'),
    path("profile/", UserProfileView.as_view(), name="profile"),

]
