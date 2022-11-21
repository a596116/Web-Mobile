<template>
  <div>
    <div class="relative overflow-y-auto">
      <router-view #default="{ Component, route }">
        <Transition appear>
          <component :is="Component" />
        </Transition>
      </router-view>
    </div>
    <Tabbar />
  </div>
</template>
