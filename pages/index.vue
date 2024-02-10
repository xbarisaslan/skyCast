<template>
  <div class="flex flex-col h-screen bg-blue-300 text-white">
    <Header />

    <div class="flex flex-col gap-4 grow justify-center items-center">
      <h1 class="text-[2rem] font-semibold">Current Weather</h1>
      <input
        v-model="query"
        type="search"
        class="bg-[#eaeced] text-black text-sm py-2.5 px-5 w-[60%] lg:w-[25%] rounded-3xl hover:bg-white focus:outline-none border border-[#eaeced] focus:border-[#ff4713] transition ease-in"
        placeholder="Enter city name..."
        @keypress.enter="getWeather"
      />

      <Date />

      <WeatherInfo
        v-if="weatherData?.weather?.length > 0"
        :weatherData="weatherData"
      />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: () => "skyCast",
  ogTitle: () => "skyCast",
});

const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "ddd37312d21544e7300b23a69a2fff48";

const query = ref("");
const weatherData = ref({});

const getWeather = (e) => {
  if (e.key == "Enter") {
    fetch(`${apiUrl}weather?q=${query.value}&units=metric&APPID=${apiKey}`)
      .then((res) => {
        return res.json();
      })
      .then(setResult);
  }
};

const setResult = (result) => {
  weatherData.value = result;
};

watch(
  () => query.value,
  (val) => {
    if (!val) {
      weatherData.value = {};
    }
  }
);
</script>
