<template>
  <van-tabbar v-model="active" @change="changeTabBar" class="tabbar">
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

interface BAR {
  [key: string]: {
    name: string
    url: string
    active: string
    inactive: string
  }
}
const bar: BAR = {
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
  user: {
    name: '用戶',
    url: 'user',
    active: '/img/tabBar/myfill.png',
    inactive: '/img/tabBar/my.png',
  },
}
const route = useRoute()
const active = ref(bar[route.name as string].name || '首頁')

const changeTabBar = (n: string) => {
  emit('update:active', n)
}
</script>

<style scoped lang="scss">
.tabbar {
  --van-tabbar-background-color: #f2c970;
  --van-tabbar-item-active-background-color: #f2c970;
}
</style>
