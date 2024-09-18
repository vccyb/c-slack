<template>
  <div class="h-full flex items-center justify-center bg-[#5c3b58]">
    <div class="md:h-auto md:w-[420px]">
      <AuthSignInCard
        v-if="signInFlow === 'signIn'"
        @changeLoginState="changeLoginState"
      />
      <AuthSignUpCard
        v-else-if="signInFlow === 'signUp'"
        @changeLoginState="changeLoginState"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SignInFlow } from "./types";

const { signInFlow, changeLoginState } = useLogin();
</script>

<style lang="scss" scoped></style>
