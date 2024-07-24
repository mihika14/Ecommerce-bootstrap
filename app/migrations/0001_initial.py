# Generated by Django 4.2.1 on 2023-05-09 17:14

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('title', models.CharField(max_length=25)),
                ('image', models.ImageField(upload_to='ecommerce/blog/image')),
                ('description', models.TextField(default='')),
                ('short_description', models.TextField(default='', max_length=100)),
                ('blog_id', models.IntegerField(default=0, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('name', models.CharField(max_length=200, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='contact_us',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='SubCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.category')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('description', models.TextField(default='', max_length=1000)),
                ('price', models.IntegerField()),
                ('Availability', models.CharField(choices=[('In Stock', 'In Stock'), ('Out of Stock', 'Out of Stock')], max_length=100, null=True)),
                ('image', models.ImageField(upload_to='ecommerce/ping')),
                ('image1', models.ImageField(blank=True, null=True, upload_to='ecommerce/ping')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='ecommerce/ping')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='ecommerce/ping')),
                ('date', models.DateField(auto_now_add=True)),
                ('discount', models.BooleanField(default=False)),
                ('discount_amt', models.IntegerField(blank=True, default=0, null=True)),
                ('discount_percentage', models.IntegerField(blank=True, default=0, null=True)),
                ('new_or_not', models.BooleanField(default=True)),
                ('brand', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='app.brand')),
                ('category', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='app.category')),
                ('color', models.ManyToManyField(default='NO COLOR', to='app.color')),
                ('size', models.ManyToManyField(default='NO SIZE', to='app.size')),
                ('subcategory', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='app.subcategory')),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='ecommerce/order/image')),
                ('product', models.CharField(default='', max_length=1000)),
                ('price', models.IntegerField()),
                ('quantity', models.CharField(max_length=5)),
                ('total', models.CharField(default='', max_length=1000)),
                ('address', models.TextField()),
                ('phone', models.CharField(max_length=10)),
                ('pincode', models.CharField(max_length=6)),
                ('date', models.DateField(default=datetime.datetime.today)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('quantity', models.CharField(max_length=5)),
                ('price', models.IntegerField(default=0)),
                ('total', models.IntegerField(default=0)),
                ('date', models.DateField(default=datetime.datetime.today)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.product')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
