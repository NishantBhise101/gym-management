from django.urls import path 
from . import views

urlpatterns = [
    path("register/trainer", views.reg_trainer, name="reg_trainer"),
    path("register/member/", views.reg_member, name="reg_member"),
    path("member/information", views.member_info, name="member_info"),
    path("attendance/", views.attendance, name="attendance"),
    path("dashboard/", views.dashboard, name="dashboard"),
    path("", views.home, name="home")
]