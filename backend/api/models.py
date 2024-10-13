from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    verified = models.BooleanField(default=False)

'''class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=255)
    email = models.EmailField()
    profile = models.TextField()
    skills = models.JSONField(default=list)
    education = models.JSONField(default=list)
    work_experience = models.JSONField(default=list)
    certifications = models.JSONField(default=list)
    projects = models.JSONField(default=list)

    def __str__(self):
        return f"Resume for {self.user.username}"'''
class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=255)
    email = models.EmailField()
    profile = models.TextField()
    skills = models.JSONField(default=list)
    education = models.JSONField(default=list)
    work_experience = models.JSONField(default=list)
    certifications = models.JSONField(default=list)
    projects = models.JSONField(default=list)
    linkedin = models.URLField(blank=True, null=True)  
    github = models.URLField(blank=True, null=True)    
    nationality = models.CharField(max_length=255, blank=True, null=True)
    gender = models.CharField(max_length=50, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    portfolio_link = models.URLField(blank=True, null=True)
    additional_info=models.JSONField(default=list)
    class Meta:
        db_table = 'resume'

class FinishedResume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    resume_blob = models.BinaryField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'finished_resumes'

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)





'''from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


    def profile(self):
        profile = Profile.objects.get(user=self)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=1000)
    bio = models.CharField(max_length=100)
    verified = models.BooleanField(default=False)


def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)'''