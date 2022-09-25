import os
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get("SECRET_KEY","DDDDDDDDDDDDdfS")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = int(os.environ.get("DEBUG", default=1))

ALLOWED_HOSTS = os.environ.get("ALLOWED_HOSTS","localhost 127.0.0.1 [::1]").split(" ")
LOGOUT_REDIRECT_URL='/'
LOGIN_REDIRECT_URL='/'
LOGIN_URL='/login/'
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'djoser',
    'accounts',
    'chatapp',
    'chat',
    'channels',
    'userprofile',
    'payment'
    
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
AUTH_USER_MODEL = 'accounts.User'
ROOT_URLCONF = 'config.urls'

SECURE_CROSS_ORIGIN_OPENER_POLICY=None
CORS_ALLOW_ALL_ORIGINS = True


CSRF_TRUSTED_ORIGINS = os.environ.get("TRUSTED","http://localhost http://127.0.0.1").split(" ")
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'
ASGI_APPLICATION = 'config.asgi.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('127.0.0.1', 6379)],
        },
    },
}


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {

        'default':{
     
                "ENGINE": os.environ.get("DB_ENGINE"),
                "NAME": os.environ.get("DB_DATABASE"),
                "USER": os.environ.get("DB_USER"),
                "PASSWORD": os.environ.get("DB_PASSWORD"),
                "HOST": os.environ.get("DB_HOST"),
                "PORT": os.environ.get("DB_PORT"),
                }
    
    #env.db(),
    

}


CACHES1 = {
 #   'default': env.cache(),

  #  'redis': env.cache_url('REDIS_URL')
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Asia/Kolkata'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = 'static/'

STATIC_ROOT = BASE_DIR / "static"
STATICFILESDIR = []
MEDIA_URL = "media/"
MEDIA_ROOT = BASE_DIR / "media"


# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
 
    ),
}


EMAIL_BACKEND=os.environ.get('EMAIL_BACKEND')
EMAIL_HOST=os.environ.get('EMAIL_HOST')
EMAIL_USE_TLS=int(os.environ.get('EMAIL_USE_TLS'))
EMAIL_PORT=int(os.environ.get('EMAIL_PORT'))
EMAIL_HOST_USER=os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD=os.environ.get('EMAIL_HOST_PASSWORD')
DEFAULT_FROM_EMAIL=os.environ.get('DEFAULT_FROM_EMAIL')
DOMAIN=os.environ.get('DOMAIN')
SITE_NAME=os.environ.get('SITE_NAME')


SIMPLE_JWT = {
   'AUTH_HEADER_TYPES': ('JWT',),
}

DJOSER = {
    'LOGIN_FIELD': 'email',
    "USER_CREATE_PASSWORD_RETYPE":True,
    "USERNAME_CHANGED_EMAIL_CONFIRMATION":True,
    "PASSWORD_CHANGED_EMAIL_CONFIRMATION":True,
    "SEND_CONFIRMATION_EMAIL":True,
    "PASSWORD_RESET_CONFIRM_URL":"password/reset/confirm/{uid}/{token}",
    "SET_PASSWORD_RETYPE":True,
    "PASSWORD_RESET_CONFIRM_RETYPE":True,
    "USERNAME_RESET_CONFIRM_URL":"email/reset/confirm/{uid}/{token}",
    "ACTIVATION_URL":"activate/{uid}/{token}",
    "SEND_ACTIVATION_EMAIL":True,
    'SERIALIZERS': {},
    'USER_ID_FIELD':'id'
}

RAZOR_PAY_KEY = 'rzp_test_4bK7FpX13eDa7p'
RAZOR_PAY_SECRET_KEY = 'WFePGSyWhM2WEmkwIGOvBITt'