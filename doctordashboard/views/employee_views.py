from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from doctordashboard.models import Employee
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from doctordashboard.serializers import EmployeeSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.contrib import messages
from django.core.files.storage import default_storage
from rest_framework.permissions import IsAdminUser




@api_view(['GET'])
def getemployees(request):
    employees = Employee.objects.all()
    employee_serializer = EmployeeSerializer(employees, many=True)
    return Response(employee_serializer.data)


@api_view(['GET'])
def getemployee(request, pk):
    employees = Employee.objects.get(_id=pk)
    employee_serializer = EmployeeSerializer(employees, many=False)
    return Response(employee_serializer.data)

@api_view(['POST'])
def postemployee(request):
    employee = JSONParser().parse(request)
    employee_serializer = EmployeeSerializer(data=employee)
    if employee_serializer.is_valid():
        employee_serializer.save()
        return JsonResponse("Added Successfully!!", safe=False)
    return JsonResponse("Failed to Add.", safe=False)

@api_view(['PUT'])
def putemployee(request, pk):
    employee = JSONParser().parse(request)
    employee_data = Employee.objects.get(_id=pk)
    employee_serializer = EmployeeSerializer(employee_data, data=employee)
    if employee_serializer.is_valid():
        employee_serializer.save()
        return JsonResponse("Updated Successfully!!", safe=False)
    return JsonResponse("Failed to Update.", safe=False)
   
@api_view(['DELETE'])
def deleteemployee(request, pk):
    employee = Employee.objects.get(_id=pk)
    employee.delete()
    return JsonResponse("Deleted Succeffully!!", safe=False) 