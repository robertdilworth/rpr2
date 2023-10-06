from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add any additional fields you want
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

# Create your models here.
