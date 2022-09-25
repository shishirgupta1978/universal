from urllib import request
from django.shortcuts import render
from django.conf import settings
import razorpay

# Create your views here.
def index(request):
    razorpay_bool="0"
    DATA={}
    if request.method=="POST":
        form_data= request.POST.dict()
        client = razorpay.Client(auth=(settings.RAZOR_PAY_KEY, settings.RAZOR_PAY_SECRET_KEY))

        DATA = {
            "amount": 0,
            "payment_capture": 1,
            "currency": "INR",
            "receipt": "receipt1",
            "notes": {
                "key1": "value3",
                "key2": "value2"
            }
        }
        amount= int(form_data.get("pymt"))
        
        if amount > 0 and amount <=2000:
            DATA["amount"]=amount*100
            order=client.order.create(data=DATA)
            DATA["order_id"]=order["id"]
            DATA["key"]=settings.RAZOR_PAY_KEY
            razorpay_bool="1"
            


                
            
        
    DATA["razorpay_bool"]=razorpay_bool
    return render(request,"payment/index.html",DATA)