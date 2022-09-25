from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('friend/<str:pk>/', views.detail, name='detail'),
    path('sent_msg/<str:pk>', views.sentMessages, name = "sent_msg"),
    path('rec_msg/<str:pk>', views.receivedMessages, name = "rec_msg"),
    path('notification', views.chatNotification, name = "notification"),
    
    path('asy', views.asychat, name='asychat'),
    path('<str:room_name>/', views.room, name='room'),

]