from django.contrib import admin
from django.urls import path
from doctordashboard.views import aftervisit_views as views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('',views.getAfterVisits, name= "appointments"),
    path('create/', views.postAfterVisit, name = "appointment-create"),
    path('<str:pk>/',views.getAfterVisit, name = "appointment"),
    path('update/<str:pk>/', views.postAfterVisit, name="appointment-update"),
    path('delete/<str:pk>/', views.deleteAfterVisit, name="appointment-delete"),
]
