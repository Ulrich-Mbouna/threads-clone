

<template>
<div class="fixed grid place-items-center h-screen z-50 bottom-0 bg-black bg-opacity-50 backdrop-blur-md w-full" is="Modal">
  <div class="bg-black w-full max-w-[300px] rounded-lg text-white border border-gray-600 p-2">
    <button
    @click="userStore.isLogoutOverlay = false"
    class="flex items-center justify-between bg-black w-full p-3">
      <div>Close Modal</div>
      <Icon name="mdi:close" size="25" />
    </button>
    <div class="border-b border-b-gray-700 my-1"></div>
    <button class="flex items-center justify-between bg-black w-full p-3">
      <div>Log Out</div>
      <Icon name="ph:sign-out" size="25" />
    </button>
  </div>
</div>
</template>
<script setup lang="ts">

const userStore = useUserStore()
// const client= useSupabaseClient()
</script>
<style scoped>

</style>
