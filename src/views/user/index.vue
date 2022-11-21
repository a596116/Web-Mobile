<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="h-1/3 p-3 w-full flex flex-col justify-end bg-[#416d90]">
      <section class="flex flex-row p-5">
        <van-image
          round
          src="/img/logo.png"
          fit="contain"
          class="w-[7rem] h-[7rem] border border-white bg-[#21425d]" />
        <div class="flex flex-col justify-end p-4 gap-2">
          <span class="text-2xl text-white font-medium">浩呆</span>
          <div class="flex gap-2">
            <van-tag color="#b8e994" size="medium">管理員</van-tag>
            <van-tag color="#f8c291" size="medium">用戶</van-tag>
          </div>
        </div>
      </section>
    </div>

    <div class="h-2/3 w-full bg-[#416d90]">
      <div class="h-full w-full bg-[#112f44] rounded-t-3xl"></div>
    </div>
  </van-pull-refresh>
</template>

<script setup lang="ts">
import { Toast } from 'vant'

const loading = ref(false)
const onRefresh = () => {
  setTimeout(() => {
    Toast('刷新成功')
    loading.value = false
  }, 1000)
}
</script>

<style lang="scss" scoped></style>
