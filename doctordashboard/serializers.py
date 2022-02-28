from rest_framework import serializers

from .models import Patient, Appointment

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
# class DentistSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Patient
#         fields = '__all__'
        
# class SecretarySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Patient
#         fields = '__all__'
        
# class AdministratorSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Patient
#         fields = '__all__'