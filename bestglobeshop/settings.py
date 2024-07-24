"""
Django settings for bestglobeshop project.

Generated by 'django-admin startproject' using Django 3.2.12.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from djongo.base import DatabaseWrapper
from djongo.operations import DatabaseOperations
from pathlib import Path
import os



# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-l10%=h+#zj!5*_iik6wvs7a_wfps3l#us+19-@-2+wfwzbvguh'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['117.242.151.204','103.93.102.200','127.0.0.1', 'bestglobeshop.com', 'localhost', 'www.bestglobeshop.com', '192.168.2.204', '192.168.2.105', '192.168.75.128', '113.21.72.5']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'app.apps.AppConfig',
    'cart',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
CART_SESSION_ID = 'cart'
ROOT_URLCONF = 'bestglobeshop.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'cart.context_processor.cart_total_amount',
            ],
        },
    },
]

WSGI_APPLICATION = 'bestglobeshop.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': BASE_DIR / 'db.sqlite3',
#     }
# }



# MongoDB connection string 

# DATABASES = {
#         'default': {
#             'ENGINE': 'djongo',
#             'NAME': 'bestglobeshop',
#             'CLIENT': {
#                 'host': 'mongodb+srv://bestglobeshop:best9531707495@cluster0.1mhmjks.mongodb.net/?retryWrites=true&w=majority',
#                 'username': 'bestglobeshop',
#                 'password': 'best9531707495',
#             }  
#         }
# }

# DATABASES = {
#     'default': {
#         'ENGINE': 'djongo',
#         'NAME': 'bestglobeshop',
#         'CLIENT': {
#             'host': 'mongodb://root:ShuvoDip@192.168.2.105:27017/?authMechanism=DEFAULT',
#             'username': 'root',
#             'password': 'ShuvoDip',
#         }
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'bestglobeshop',
        'USER': 'postgres',
        'PASSWORD': 'ShuvoDipDuoples8918945997',
        'HOST': '192.168.2.105',     # Or your PostgreSQL database's host IP address
        'PORT': '5432',  # Leave empty for default PostgreSQL port (5432)
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

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
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, './static/')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, './media/')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, './assets/'),
    './env/lib/python3.10/site-packages/django/contrib/admin/static/',
]

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# SMTP Server settings 
EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'bestglobeshop@gmail.com'
EMAIL_HOST_PASSWORD = 'sspmbifspuohzhth'


class PatchedDatabaseOperations(DatabaseOperations):

    def conditional_expression_supported_in_where_clause(self, expression):
        return False


DatabaseWrapper.ops_class = PatchedDatabaseOperations

LOGIN_REDIRECT_URL = 'index'
LOGOUT_REDIRECT_URL ='index'