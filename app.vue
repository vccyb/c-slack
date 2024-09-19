<!-- <template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template> -->

<script setup>
const supabase = useSupabase();
const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  countries.value = data;
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>
