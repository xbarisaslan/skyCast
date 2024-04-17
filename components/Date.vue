<template>
  <div>
    <h3 class="font-medium text-md lg:text-xl">{{ currentDate }}</h3>
  </div>
</template>

<script setup>
const currentDate = ref(new Date().toLocaleString("en-GB"));

onMounted(() => {
  setInterval(() => {
    currentDate.value = new Date().toLocaleString("en-GB");
  }, 1000);
});
</script>
