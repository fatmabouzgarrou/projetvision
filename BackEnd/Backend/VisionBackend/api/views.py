from rest_framework import generics
from .models import AIModel
from .serializers import AIModelSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser
import os
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
from django.conf import settings

class AIModelListView(generics.ListAPIView):
    queryset = AIModel.objects.all()
    serializer_class = AIModelSerializer


class PredictImageView(APIView):
    parser_classes = [MultiPartParser]

    def post(self, request, format=None):
        model_id = request.data.get('model_id')
        image_file = request.FILES.get('image')
        
        try:
            ai_model = AIModel.objects.get(pk=model_id)
           
            model_name = ai_model.model_file.path[ai_model.model_file.path.find("models\\")+7:]
            print('-------------------------------------------------',os.getcwd()+f'\media\models\{model_name}')
            model = tf.keras.models.load_model(os.getcwd()+f'\media\models\{model_name}', compile=False)
            print(model.summary())
        except Exception as e:
                    return Response({'error': e.__str__()}, status=status.HTTP_404_NOT_FOUND)
        
        image_path = os.path.join(settings.MEDIA_ROOT, 'temp_image.jpg')
        with open(image_path, 'wb+') as destination:
            for chunk in image_file.chunks():
                destination.write(chunk)
        if int(model_id) ==2:
            img = image.load_img(image_path, target_size=(28, 28), color_mode = "grayscale")
        else :
             img = image.load_img(image_path, target_size=(32, 32), color_mode="rgb")
        img_array = image.img_to_array(img)
        img_array /= 255.0  
        img_array = np.expand_dims(img_array, axis=0)
        

        prediction = model.predict(img_array)
        predicted_label = np.argmax(prediction)
        confidence = np.max(prediction)
        predicted_class=predicted_label
        
        categories = {
            0: "Avion",
            1: "Automobile",
            2: "Oiseau",
            3: "Chat",
            4: "Cerf",
            5: "Chien",
            6: "Grenouille",
            7: "Cheval",
            8: "Navire",
            9: "Camion"
        }
        predicted_class=categories[predicted_label]

        
        return Response( {"predicted_class": predicted_class,"confidence": confidence},status=status.HTTP_200_OK)
    