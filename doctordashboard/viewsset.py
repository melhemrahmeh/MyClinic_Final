from rest_framework import viewsets
from . import models
from . import serializers


class PatientViewSet(viewsets.ModelViewSet):
    queryset =  models.Patient.objects.all()
    serializer_class = serializers.PatientSerializer
    

class  AppointmentViewSet(viewsets.ModelViewSet):
    queryset =  models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
    

# class DentistViewSet(viewsets.ModelViewSet):
#     queryset =  models.Dentist.objects.all()
#     serializer_class = serializers.DentistSerializer
    

# class SecretaryViewSet(viewsets.ModelViewSet):
#     queryset =  models.Secretary.objects.all()
#     serializer_class = serializers.SecretarySerializer
     

# class AdministartorViewSet(viewsets.ModelViewSet):
#     queryset =  models.Administrator.objects.all()
#     serializer_class = serializers.AdministratorSerializer
    
