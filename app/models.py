from django.db import models
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms
import datetime


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Brand(models.Model):
    name = models.CharField(max_length=200, primary_key=True)

    def __str__(self):
        return self.name


class Size(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Color(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name



class Product(models.Model):
    Availability = (("In Stock", "In Stock"), ("Out of Stock", "Out of Stock"))
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, null=False, default="", 
    )
    subcategory = models.ForeignKey(
        SubCategory, on_delete=models.CASCADE, null=False, default=""
    )
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=300)
    description = models.TextField(max_length=1000 ,  null=False , default="")
    price = models.IntegerField()
    Availability = models.CharField(
        choices=Availability, null=True, max_length=100)
    image = models.ImageField(upload_to="ecommerce/ping")
    image1 = models.ImageField(upload_to="ecommerce/ping", null=True, blank=True)
    image2 = models.ImageField(upload_to="ecommerce/ping", null=True, blank=True)
    image3 = models.ImageField(upload_to="ecommerce/ping", null=True, blank=True)
    date = models.DateField(auto_now_add=True)
    discount = models.BooleanField(
        default=False,
    )
    discount_amt = models.IntegerField(
        default=0, null=True, blank=True
    )
    discount_percentage = models.IntegerField(
        default=0, null=True, blank=True
    )

    new_or_not = models.BooleanField(
        default=True,
    )


    size = models.ManyToManyField(Size, default="NO SIZE")
    color = models.ManyToManyField(Color, default="NO COLOR")
    def __str__(self):
        return self.name


class UserCreateForm(UserCreationForm):
    email = forms.EmailField(
        required=True, label="Email", error_messages={"exists": "This Already Exists"}
    )
    first_name = forms.CharField(required=True)
    last_name = forms.CharField(required=True)

    class Meta:
        model = User
        fields = (
            "username",
            "first_name",
            "last_name",
            "email",
            "password1",
            "password2",
        )

    def __init__(self, *args, **kwargs):
        super(UserCreateForm, self).__init__(*args, **kwargs)

        self.fields["username"].widget.attrs["placeholder"] = "User Name"
        self.fields["email"].widget.attrs["placeholder"] = "Email"
        self.fields["first_name"].widget.attrs["placeholder"] = "First Name"
        self.fields["last_name"].widget.attrs["placeholder"] = "Last Name"
        self.fields["password1"].widget.attrs["placeholder"] = "Password"
        self.fields["password2"].widget.attrs["placeholder"] = "Confirm Password"

    def save(self, commit=True):
        user = super(UserCreateForm, self).save(commit=False)
        user.first_name = self.cleaned_data["first_name"]
        user.last_name = self.cleaned_data["last_name"]
        user.email = self.cleaned_data["email"]
        if commit:
            user.save()
        return user

    def clean_email(self):
        if User.objects.filter(email=self.cleaned_data["email"]).exists():
            raise forms.ValidationError(
                self.fields["email"].error_message["exists"])
        return self.cleaned_data["email"]


class contact_us(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.TextField()

    def __str__(self):
        return self.name


class Order(models.Model):
    image = models.ImageField(upload_to="ecommerce/order/image")
    product = models.CharField(max_length=1000, default="")
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.IntegerField()
    quantity = models.CharField(max_length=5)
    total = models.CharField(max_length=1000, default="")
    address = models.TextField()
    phone = models.CharField(max_length=10)
    pincode = models.CharField(max_length=6)
    date = models.DateField(default=datetime.datetime.today)

    def __str__(self):
        return self.product


class Blog(models.Model):
    title = models.CharField(max_length=25)
    image = models.ImageField(upload_to="ecommerce/blog/image")
    description = models.TextField(default="")
    short_description = models.TextField(default="", max_length=100)
    blog_id = models.IntegerField(primary_key=True, default=0)

    def __str__(self):
        return self.title




class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    id = models.IntegerField(primary_key=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.CharField(max_length=5)
    price = models.IntegerField(null=False, default=0)
    total = models.IntegerField(null=False, default=0)
    date = models.DateField(default=datetime.datetime.today)

    def __str__(self):
        return f"{self.user.username} - ({self.product.name})"
