<template>
  <div v-if="isLoggedIn">
    <Button @click="handleSignOut" class="bg-red-500">Sign out</Button>
    <h1 class="text-2xl font-bold">Welcome to the app</h1>
    <div class="text-md">
      {{ user }}
    </div>
  </div>
  <div v-else>
    <h2>还没有登陆，请您登陆</h2>
    <Button @click="navigateTo('/login')">登陆</Button>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();
const { clearUser } = userStore;
const { isLoggedIn, user } = storeToRefs(userStore);

const { signOut } = useAuth();

function handleSignOut() {
  signOut();
  clearUser();
}
</script>

<style scoped></style>
