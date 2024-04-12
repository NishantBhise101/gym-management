from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('gym/', include("gym.urls")),
    path('admin/', admin.site.urls),
]
