from django.urls import re_path
from django.contrib import admin
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings




# urlpatterns = [
#     re_path(r'^patient/$',views.getPatients),
#     re_path(r'^patient/([0-9]+)$',views.getPatient),
#     # re_path(r'^appointment/$',views.Appointment),
#     # re_path(r'^appointment/([0-9]+)$',views.Appointment),
# ] 


urlpatterns = [
    path('', views.getPatients, name = "patients"),
    path('create/', views.postPatient, name = "patient-create"),
    path('<str:pk>/', views.getPatient, name="patient"),
    path('update/<str:pk>/', views.postPatient, name="patient-update"),
    path('delete/<str:pk>/', views.deletePatient, name="patient-delete"),
    # path('appointment/',views.Appointment),
    # path('appointment/<str:pk>/',views.Appointment),
] 
