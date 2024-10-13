from django.shortcuts import render
from django.http import JsonResponse
from api.models import User
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from .models import Resume
from .serializer import ResumeSerializer
from .models import FinishedResume
from .serializer import FinishedResumeSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

'''class ResumeCreateAPIView(generics.CreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)'''

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_resume(request):
    try:
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = ResumeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(f"Error creating resume: {e}")
        return Response({'error': 'An error occurred while creating the resume'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def store_finished_resume(request):
    try:
        user = request.user
        resume_blob = request.data.get('resume_blob')  # Adjust based on how you receive the blob
        finished_resume = FinishedResume(user=user, resume_blob=resume_blob)
        finished_resume.save()
        
        return Response({'message': 'Finished resume stored successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_finished_resumes(request):
    try:
        user = request.user
        finished_resumes = FinishedResume.objects.filter(user=user)
        serializer = FinishedResumeSerializer(finished_resumes, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


'''Below block is for CSRF method
from django.shortcuts import render
from django.middleware.csrf import get_token
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from api.models import User
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer, UserLoginSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import BasicAuthentication
from .models import Resume, FinishedResume
from .serializer import ResumeSerializer, FinishedResumeSerializer

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class CSRFTokenView(APIView):
    def get(self, request):
        return Response({'csrfToken': get_token(request)})

class LoginFunction(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                logged_user = User.objects.get(email=email)
                return Response({
                    'result': True,
                    'user_name': logged_user.username,
                    'user_id': logged_user.id,
                }, status=status.HTTP_200_OK)
            else:
                return Response({'result': False, 'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutFunction(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            logout(request)
            return Response({'result': True, 'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'result': False, 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_resume(request):
    try:
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = ResumeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(f"Error creating resume: {e}")
        return Response({'error': 'An error occurred while creating the resume'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def store_finished_resume(request):
    try:
        user = request.user
        resume_blob = request.data.get('resume_blob')  # Adjust based on how you receive the blob
        finished_resume = FinishedResume(user=user, resume_blob=resume_blob)
        finished_resume.save()
        
        return Response({'message': 'Finished resume stored successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_finished_resumes(request):
    try:
        user = request.user
        finished_resumes = FinishedResume.objects.filter(user=user)
        serializer = FinishedResumeSerializer(finished_resumes, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)'''









''' Implemented this block at first at the beginning
from django.shortcuts import render
from django.http import JsonResponse
from api.models import User
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer



@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)'''




'''from django.shortcuts import render
from rest_framework import generics
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from api.models import User
from api.serializer import RegisterSerializer
from .models import Resume, FinishedResume
from .serializer import ResumeSerializer, FinishedResumeSerializer
from rest_framework.exceptions import APIException
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authentication import BasicAuthentication
from api.serializer import UserLoginSerializer
from django.contrib.auth import authenticate, login
import logging

logger = logging.getLogger(__name__)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class LoginFunction(ObtainAuthToken):
    authentication_classes = [BasicAuthentication]
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            print(email, password)

            user = authenticate(request, email=email, password=password)
            print(user)
            if user is not None:
                login(request, user)
                logged_user = User.objects.get(email=email)
                logger.info("User '%s -%s' has logged in", logged_user.user_name, logged_user.id)
                return Response({
                    'result': True,
                    'user_name': logged_user.user_name,
                    'user_id': logged_user.id
                }, status=status.HTTP_200_OK)
            else:
                logger.error("Unknown user - %s", request.data['email'])
                return Response({'result': False, 'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        logger.error("Invalid credentials for %s", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
@csrf_exempt
def logout_view(request):
    try:
        logout(request)
        return Response({'result': True, 'message': 'Logged out successfully'}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'result': False, 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class ResumeCreateAPIView(generics.CreateAPIView):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_resume(request):
    try:
        data = request.data.copy()
        data['user'] = request.user.id
        serializer = ResumeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        print(f"Error creating resume: {e}")
        return Response({'error': 'An error occurred while creating the resume'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def store_finished_resume(request):
    try:
        user = request.user
        resume_blob = request.data.get('resume_blob')  # Adjust based on how you receive the blob
        finished_resume = FinishedResume(user=user, resume_blob=resume_blob)
        finished_resume.save()
        
        return Response({'message': 'Finished resume stored successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_finished_resumes(request):
    try:
        user = request.user
        finished_resumes = FinishedResume.objects.filter(user=user)
        serializer = FinishedResumeSerializer(finished_resumes, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/login/',
        '/api/register/',
        '/api/logout/',
        '/api/resume/create/',
        '/api/resume/finished/store/',
        '/api/resume/finished/',
    ]
    return Response(routes)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulations {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulations your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)'''
