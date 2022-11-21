<template>
  <van-nav-bar
    :title="title"
    :left-text="props.leftText"
    left-arrow
    @click-left="onClickLeft"
    class="navbar" />
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    leftText?: string
  }>(),
  {
    leftText: '返回',
  },
)

const title = ref(useTitle().value!)
const onClickLeft = () => {
  history.back()
}
</script>

<style scoped lang="scss">
.navbar {
  --van-nav-bar-background-color: #f5d89a;
  --van-nav-bar-text-color: #576574;
  --van-nav-bar-icon-color: #576574;
  --van-nav-bar-title-text-color: #576574;
}
</style>
