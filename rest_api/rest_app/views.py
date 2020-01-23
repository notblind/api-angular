from django.shortcuts import render
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Code
from .serializers import CodeSerializer


# Create your views here.

class ApiView(APIView):

    def get(self, request, *args, **kwargs):
        code = Code.objects.all()
        serializer = CodeSerializer(code, many=True)
        return Response({'code': serializer.data})

    def post(self, request):
        code = request.data.get('code')
        serializer = CodeSerializer(data=code)
        if serializer.is_valid(raise_exception=True):
            code_save = serializer.save()
        return Response({'success': 'Code {} create'.format(code_save.title)})

    def put(self, request, pk):
        field = get_object_or_404(Code.objects.all(), pk=pk)
        data = request.data.get('code')
        serializer = CodeSerializer(instance=field, data=data, partial=True)

        if serializer.is_valid(raise_exception=True):
            code_save = serializer.save()

        return Response({'success': 'Code {} update'.format(code_save.title)})

    def delete(self, request, pk):
        field = get_object_or_404(Code.objects.all(), pk=pk)
        field.delete()
        return Response({'success': 'Code with id {} delete'.format(pk)})