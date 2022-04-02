from rest_framework import serializers

from doctordashboard.models import Patient, Appointment, Operation, Room

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'
        
        
    # def create(self, validated_data):
    #     return Patient.objects.create(validated_data)
    

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('email', 'username', 'password', 'is_doctor', 'is_patient', 'is_nurse', 'is_secretary')

# class CustomRegisterSerializer(RegisterSerializer):
#     is_patient = serializers.BooleanField()
#     is_doctor = serializers.BooleanField()
#     is_nurse = serializers.BooleanField()
#     is_secretary = serializers.BooleanField()


    # class Meta:
    #     model = User
    #     fields = ('email', 'username', 'password', 'is_doctor', 'is_patient', 'is_nurse', 'is_secretary')

    # def get_cleaned_data(self):
    #     return {
    #         'username': self.validated_data.get('username', ''),
    #         'password1': self.validated_data.get('password1', ''),
    #         'password2': self.validated_data.get('password2', ''),
    #         'email': self.validated_data.get('email', ''),
    #         'is_doctor': self.validated_data.get('is_doctor', ''),
    #         'is_patient': self.validated_data.get('is_patient', ''),
    #         'is_nurse': self.validated_data.get('is_nurse', ''),
    #         'is_secretary': self.validated_data.get('is_secretary', '')
    #     }

    # def save(self, request):
    #     adapter = get_adapter()
    #     user = adapter.new_user(request)
    #     self.cleaned_data = self.get_cleaned_data()
    #     user.is_patient = self.cleaned_data.get('is_patient')
    #     user.is_doctor = self.cleaned_data.get('is_doctor')
    #     user.is_nurse= self.cleaned_data.get('is_nurse')
    #     user.is_secretary = self.cleaned_data.get('is_secretary')

    #     user.save()
    #     adapter.save_user(request, user, self)
    #     return user


# class TokenSerializer(serializers.ModelSerializer):
#     user_type = serializers.SerializerMethodField()

#     class Meta:
#         model = Token
#         fields = ('key', 'user', 'user_type')

#     def get_user_type(self, obj):
#         serializer_data = UserSerializer(
#             obj.user
#         ).data
#         is_student = serializer_data.get('is_student')
#         is_teacher = serializer_data.get('is_teacher')
#         return {
#             'is_student': is_student,
#             'is_teacher': is_teacher
#         }
      
        
        
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
        
        
        
        
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
        
class OperationSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Operation
        fields = '__all__'
        
        

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Room
        fields = '__all__'
        
