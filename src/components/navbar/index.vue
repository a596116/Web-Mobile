<template>
  <van-nav-bar
    :title="props.title"
    :left-text="props.leftText"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import { store } from '@/utils'

const props = withDefaults(
  defineProps<{
    title: string
    leftText?: string
  }>(),
  {
    leftText: '返回',
  }
)
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped></style>
