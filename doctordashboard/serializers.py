from rest_framework import serializers

from .models import Patient, Appointment, Visit, PaymentJournal, Room, Role, User, Clinic, VisitOperation

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
        
    def create(self, validated_data):
        return Patient.objects.create(validated_data)
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = '__all__'
        
class PaymentJournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentJournal
        fields = '__all__'
        
class VisitOperationSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitOperation
        fields = '__all__'
        
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Role
        fields = '__all__'
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model =  User
        fields = '__all__'
        
class ClinicSerialize(serializers.ModelSerializer):
    class Meta:
        model =  Clinic
        fields = '__all__'
        
