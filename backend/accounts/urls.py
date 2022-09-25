
from django.urls import path,include

from . import views

urlpatterns = [
 
    path('api/', include('djoser.urls')),
    path('api/', include('djoser.urls.jwt')),
    path('activate/<uid>/<token>/', views.UserActivationView.as_view(), name="activate")
]
