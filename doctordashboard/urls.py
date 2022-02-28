from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.HomePage),
    path('dentistDashboard/', views.dentistDashboard, name = 'home'),
    path('addpatient/', views.addpatient),
    path('patientlist/', views.patientlist),    
    path('addappointment/', views.addappointment),
    path('appointmentslist/', views.appointmentslist), 
    path('showform/', views.showform),
    path('register/', views.registerPage, name='register'),
    path('loginpage/', views.loginPage, name='loginpage'),
    # path('api-auth/', include('rest_framework.urls')),
    # path('register/dentist', views.registerPage, name='dentistregister'),
    # path('register/patient', views.registerPage, name='patientregister'),
    # path('register/nurse', views.registerPage, name='nurseregister'),
    # path('register/secretery', views.registerPage, name='secreteryregister'),
    # path('register/administrator', views.registerPage, name='adnregister'),
    path('logout/', views.logOut, name='logout'),
    path("createpatient/", views.createpatient, name="createpatient"),
    
    #visitsummary
]
