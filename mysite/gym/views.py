from django.http import HttpResponse
from django.template import loader

def home(request):
    template = loader.get_template("gym/home.html")
    return HttpResponse(template.render())

def dashboard(request):
    template = loader.get_template("gym/dashboard.html")
    return HttpResponse(template.render())

def reg_trainer(request):
    template = loader.get_template("gym/reg_trainer.html")
    return HttpResponse(template.render())

def reg_member(request):
    template = loader.get_template("gym/reg_member.html")
    return HttpResponse(template.render())

def member_info(request):
    template = loader.get_template("gym/member_info.html")
    return HttpResponse(template.render())

def attendance(request):
    template = loader.get_template("gym/attendance.html")
    return HttpResponse(template.render())
