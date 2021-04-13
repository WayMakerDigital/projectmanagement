"""cards URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from api.views import apiOverview, taskList, taskUpdate, taskCreate, taskDelete

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', apiOverview, name="api-overview"),
    path('task-list/', taskList, name="task-list"),
    path('task-create/', taskCreate, name="task-create"),
    path('task-update/<str:pk>/', taskUpdate, name="task-update"),
    path('task-delete/<str:pk>/', taskDelete, name="task-delete"),
]
