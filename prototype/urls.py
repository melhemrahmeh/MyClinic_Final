"""prototype URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView




urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/patients/', include('doctordashboard.urls.patient_urls')),
    path('api/appointments/', include("doctordashboard.urls.appointment_urls")),
    path('api/operations/', include("doctordashboard.urls.operation_urls")),
    path('api/rooms/', include("doctordashboard.urls.room_urls")),
    path('api/users/', include('doctordashboard.urls.users_urls')),
    path('api/visits/', include('doctordashboard.urls.aftervisit_urls')),
    path('api/forms/', include('doctordashboard.urls.form_urls')),
    path('api/employees/', include('doctordashboard.urls.employee_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)