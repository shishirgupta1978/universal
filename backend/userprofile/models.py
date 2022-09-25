from django.db import models
from config.settings import AUTH_USER_MODEL

# Create your models here.
class Profile(models.Model):
    user= models.OneToOneField(AUTH_USER_MODEL, on_delete=models.CASCADE)
    nickname=models.CharField(max_length=100)
    pic=models.ImageField(upload_to='img',blank=True,null=True)
    friends=models.ManyToManyField('Friend',related_name="my_friends")
    def __str__(self):
        return self.nickname

class Friend(models.Model):
    profile=models.OneToOneField(Profile, on_delete=models.CASCADE)
    def __str__(self):
        return self.profile.nickname