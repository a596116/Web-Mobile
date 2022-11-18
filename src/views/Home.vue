<template>
  <div>
    <div class="relative overflow-y-auto">
      <router-view #default="{ Component, route }">
        <Transition
          appear
          class="animate__animated"
          :enter-active-class="
            route.meta.enterClass ?? 'animate__bounceInRight'
          "
          :leave-active-class="
            route.meta.leaveClass ?? 'animate__bounceOutLeft'
          "
        >
          <component :is="Component" class="" />
        </Transition>
      </router-view>
    </div>
    <Tabbar />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.animate__bounceInRight {
  animation-duration: 0.8s;
}

.animate__bounceOutLeft {
  animation-duration: 0.5s;
}
</style>
