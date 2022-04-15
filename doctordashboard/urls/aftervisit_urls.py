from django.contrib import admin
from django.urls import path
from doctordashboard.views import visit_views as views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',views.getVisits, name= "appointments"),
    path('create/', views.postVisit, name = "appointment-create"),
    path('<str:pk>/',views.getVisit, name = "appointment"),
    path('update/<str:pk>/', views.postVisit, name="appointment-update"),
    path('delete/<str:pk>/', views.deleteVisit, name="appointment-delete"),
]
