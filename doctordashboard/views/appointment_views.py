from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from doctordashboard.models import Appointment
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from doctordashboard.serializers import AppointmentSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.contrib import messages
from django.core.files.storage import default_storage
from rest_framework.permissions import IsAdminUser





@api_view(['GET'])
def getAppointments(request):
    appointments = Appointment.objects.all()
    appointment_serializer = AppointmentSerializer(appointments, many=True)
    return Response(appointment_serializer.data)


@api_view(['GET'])
def getAppointment(request, pk):
    apppointments = Appointment.objects.get(_id=pk)
    serializer = AppointmentSerializer(apppointments, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def postAppointment(request):
    # permission_classes = [IsAdminUser]
    appointment = JSONParser().parse(request)
    appointment_serializer = AppointmentSerializer(data=appointment)
    if appointment_serializer.is_valid():
        appointment_serializer.save()
        return JsonResponse("Added Successfully!!", safe=False)
    return JsonResponse("Failed to Add.", safe=False)

@api_view(['PUT'])
def putAppointment(request, pk):
    # permission_classes = [IsAdminUser]
    appointment = JSONParser().parse(request)
    appointment_data = App.objects.get(_id=pk)
    appointment_serializer = AppointmentSerializer(patient_data, data=patient)
    if appointment_serializer.is_valid():
        appointment_serializer.save()
        return JsonResponse("Updated Successfully!!", safe=False)
    return JsonResponse("Failed to Update.", safe=False)
   
@api_view(['DELETE'])
def deleteAppointment(request, pk):
    # permission_classes = [IsAdminUser]
    appointment = Appointment.objects.get(_id=pk)
    Appointment.delete()
    return Response('"Deleted Succeffully!!", safe=False') 
