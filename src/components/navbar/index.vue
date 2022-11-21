<template>
  <van-nav-bar
    :title="title"
    :left-text="props.leftText"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    leftText?: string
  }>(),
  {
    leftText: '返回',
  }
)

const title = ref(useTitle().value!)
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped></style>
