from rest_framework import serializers

from .models import Code

class CodeSerializer(serializers.Serializer):
    id = serializers.IntegerField(required=False)
    title = serializers.CharField(max_length=512)
    code = serializers.CharField()
    timedate = serializers.DateTimeField(required=False)

    def create(self, data):
        return Code.objects.create(**data)

    def update(self, instance, data):
        instance.title = data.get('title', instance.title )
        instance.code = data.get('code', instance.code)

        instance.save()
        return  instance