from django.urls import re_path
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    re_path(r'^patient/$',views.patient),
    re_path(r'^patient/([0-9]+)$',views.patient),
    re_path(r'^appointment/$',views.Appointment),
    re_path(r'^appointment/([0-9]+)$',views.Appointment),
] 
