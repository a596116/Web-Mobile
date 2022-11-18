<template>
  <van-swipe
    class="w-auto h-[250px] m-5 rounded-lg"
    :autoplay="3000"
    lazy-render
  >
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" class="w-full h-full" />
    </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
const images = [
  '/img/swipe/bg-1.jpg',
  '/img/swipe/bg-2.jpg',
  '/img/swipe/bg-3.jpg',
  '/img/swipe/bg-4.jpg',
  '/img/swipe/bg-5.jpg',
  '/img/swipe/bg-6.jpg',
]
const {
  appContext: {
    config: {
      globalProperties: { eventBus },
    },
  },
} = getCurrentInstance()!

onMounted(() => {})
</script>

<style scoped></style>
