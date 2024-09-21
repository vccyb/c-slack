import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const isLoggedIn = computed(() => !!user.value);

  function setUser(session: any) {
    user.value = session;
    localStorage.setItem("user", JSON.stringify(user.value));
  }

  function clearUser() {
    user.value = null;
    localStorage.removeItem("user");
  }

  function loadUserFromStorage() {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  return {
    user,
    isLoggedIn,
    setUser,
    clearUser,
    loadUserFromStorage,
  };
});
