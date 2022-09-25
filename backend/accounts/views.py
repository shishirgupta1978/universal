
import requests
from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

# Create your views here.
class UserActivationView(GenericAPIView):
    def get(self,request,uid,token,format=None):
        url="http://localhost:8000/api/users/activation/"
        response=requests.post(url,data={'uid':uid,'token':token})
        if response.status_code==204:
            return Response({},response.status_code)
        else:
            return Response(response.json())