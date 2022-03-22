from rest_framework import serializers

from .models import Patient

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
        
    # def create(self, validated_data):
    #     return Patient.objects.create(validated_data)
    

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'password']

#         extra_kwargs = {'password':{
#             'write_only':True,
#             'required':True
#         }}

#     def create(self, validated_data):
#         user = User.objects.create_user(**validated_data)
#         Token.objects.create(user=user)
#         return user
        
        
# class AppointmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Appointment
#         fields = '__all__'
        
# class VisitSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Visit
#         fields = '__all__'
        
# class PaymentJournalSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = PaymentJournal
#         fields = '__all__'
        
# class VisitOperationSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = VisitOperation
#         fields = '__all__'
        
# class RoleSerializer(serializers.ModelSerializer):
#     class Meta:
#         model =  Role
#         fields = '__all__'
        
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model =  User
#         fields = '__all__'
        
# class ClinicSerialize(serializers.ModelSerializer):
#     class Meta:
#         model =  Clinic
#         fields = '__all__'
        
