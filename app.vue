<template>
  <div>
    <Toaster />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useToast } from "@/components/ui/toast/use-toast";
import Toaster from "@/components/ui/toast/Toaster.vue";
const supabase = useSupabase();

const { setUser } = useUserStore();

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  if (session) {
    setUser(session?.user);
  }
});
</script>
