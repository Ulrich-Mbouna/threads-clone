<template>
  <pre>{{user}}</pre>
  <MainLayout>
    <div class="w-full overflow-auto" id="IndexPage">
      <div class="mx-auto max-w-[500px] overflow-hidden text-white">
        <div id="Posts" class="px-4 max-w-[600px] mx-auto">
          <div class="" v-if="isPosts" v-for="post in posts" :key="post.id">
            <Post v-for="n in 5" :post @isDeleted="posts = []" />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '~/layouts/MainLayout.vue';

const userStore = useUserStore()
const user = useSupabaseUser()

watchEffect(() => {
  if(!user.value) {
    console.log("no user value")
    return navigateTo("/auth")
  }
})


const posts = ref()
const isPosts = ref(true)
const isLoading = ref(false)

onBeforeMount(() => {
  posts.value = [
    {
      id: 1,
      name: 'Ulrich Mbouna Dev',
      image: 'https://placeholder.co/100',
      text: 'This is the Title',
      picture: "https://placeholder.co/500"
    }
  ]
})

</script>

<style></style>
