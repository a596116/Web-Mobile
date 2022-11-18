<template>
  <van-tabbar v-model="active" @change="changeTabBar">
    <van-tabbar-item v-for="item of bar" :name="item.name" :to="item.url">
      <span>{{ item.name }}</span>
      <template #icon="props">
        <img :src="props.active ? item.active : item.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
const props = defineProps<{
  active?: string
}>()
const emit = defineEmits<{
  (e: 'update:active', d: string): void
}>()

const active = ref('首頁')

const changeTabBar = (n: string) => {
  emit('update:active', n)
}

const bar = {
  home: {
    name: '首頁',
    url: 'home',
    active: '/img/tabBar/homefill.png',
    inactive: '/img/tabBar/home.png',
  },
  find: {
    name: '搜索',
    url: 'find',
    active: '/img/tabBar/findfill.png',
    inactive: '/img/tabBar/find.png',
  },
  topic: {
    name: '文章',
    url: 'topic',
    active: '/img/tabBar/topicfill.png',
    inactive: '/img/tabBar/topic.png',
  },
  my: {
    name: '用戶',
    url: 'user',
    active: '/img/tabBar/myfill.png',
    inactive: '/img/tabBar/my.png',
  },
}
</script>

<style scoped></style>
