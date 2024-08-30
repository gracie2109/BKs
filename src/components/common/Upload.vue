<template>
    <div>

    </div>
</template>


<script lang="ts" setup>
import {ref} from "vue";

const fileList = ref([]);
const loading = ref<boolean>(false);
const imageUrl = ref<string>('');
const message = ref();

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}


const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.value = 'You can only upload JPG file!'
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.value = 'Image must smaller than 2MB!';
  }
  return isJpgOrPng && isLt2M;
};



</script>