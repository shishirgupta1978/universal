from django.db import models

# Create your models here.
class Room(models.Model):
    name=models.CharField(max_length=100,unique=True)
    slug=models.SlugField(unique=True)
    def __str__(self) -> str:
        return self.name