import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const isLoggedIn = computed(() => user.value !== null);

  function setUser(session: any) {
    user.value = session;
  }

  function clearUser() {
    user.value = null;
  }

  return {
    user,
    isLoggedIn,
    setUser,
    clearUser,
  };
});
