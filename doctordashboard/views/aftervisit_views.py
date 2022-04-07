from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from doctordashboard.models import AfterVisitSummary
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from doctordashboard.serializers import AfterVisitSerializer
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.contrib import messages
from django.core.files.storage import default_storage
from rest_framework.permissions import IsAdminUser





@api_view(['GET'])
def getAfterVisits(request):
    visits = AfterVisitSummary.objects.all()
    visit_serializer = AfterVisitSerializer(visits, many=True)
    return Response(visit_serializer.data)


@api_view(['GET'])
def getAfterVisit(request, pk):
    visits  = AfterVisitSummary.objects.get(_id=pk)
    serializer = AfterVisitSerializer(visits, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def postAfterVisit(request):
    # permission_classes = [IsAdminUser]
    visit = JSONParser().parse(request)
    visit_serializer = AfterVisitSummary(data=visit)
    if visit_serializer.is_valid():
        visit_serializer.save()
        return JsonResponse("Added Successfully!!", safe=False)
    return JsonResponse("Failed to Add.", safe=False)

@api_view(['PUT'])
def putAfterVisit(request, pk):
    # permission_classes = [IsAdminUser]
    visit = JSONParser().parse(request)
    visit_data = App.objects.get(_id=pk)
    visit_serializer = AfterVisitSummary(visit_data, data=visit)
    if visit_serializer.is_valid():
        visit_serializer.save()
        return JsonResponse("Updated Successfully!!", safe=False)
    return JsonResponse("Failed to Update.", safe=False)
   
@api_view(['DELETE'])
def deleteAfterVisit(request, pk):
    # permission_classes = [IsAdminUser]
    visit = AfterVisitSummary.objects.get(_id=pk)
    AfterVisitSummary.delete()
    return Response('"Deleted Succeffully!!", safe=False') 

@api_view(['POST'])
def uploadImage(request):
    data = request.data
    visit_id = data['visit_id']
    visit = AfterVisitSummary.objects.get(_id=visit_id)
    visit.image = request.FILES.get('image')
    visit.save()
    
    return Response('Image was uploaded')