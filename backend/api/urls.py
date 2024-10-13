from django.urls import path
from . import views
from .views import create_resume

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('resume/create/', create_resume, name='create_resume'),
    path('resume/finished/store/', views.store_finished_resume, name='store_finished_resume'),
    path('resume/finished/', views.get_finished_resumes, name='get_finished_resumes'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]

'''Below for CSRF
from django.urls import path
from . import views
from .views import create_resume, CSRFTokenView

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('login/', views.LoginFunction.as_view(), name='login'),
    path('logout/', views.LogoutFunction.as_view(), name='logout'),
    path('csrf-token/', CSRFTokenView.as_view(), name='csrf_token'),
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('resume/create/', create_resume, name='create_resume'),
    path('resume/finished/store/', views.store_finished_resume, name='store_finished_resume'),
    path('resume/finished/', views.get_finished_resumes, name='get_finished_resumes'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]
'''



'''Did this at beginning
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
]'''



'''from django.urls import path
from . import views

urlpatterns = [
    # Authentication-related endpoints
    path('login/', views.LoginFunction.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    
    # Resume-related endpoints
    path('resume/create/', views.create_resume, name='create_resume'),
    path('resume/finished/store/', views.store_finished_resume, name='store_finished_resume'),
    path('resume/finished/', views.get_finished_resumes, name='get_finished_resumes'),

    # Testing and other endpoints
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes, name='get_routes'),
]'''



