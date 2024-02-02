<template>
  <div>
    <div class="flex flex-col items-center justify-center h-screen">
      <input
        v-model="query"
        type="search"
        class="bg-[#eaeced] text-sm py-2.5 px-5 rounded-3xl w-[30%] my-2 focus:outline-none border border-[#eaeced] focus:border-[#ff4713] transition ease-in"
        placeholder="Enter city name..."
        @keypress.enter="getWeather"
        @input="weatherData = {}"
      />

      {{ date }}
      <div class="text-center" v-if="weatherData?.weather?.length > 0">
        <h2 class="text-[2.5rem] font-medium">
          {{ weatherData.name }}, {{ weatherData.sys?.country }}
        </h2>
        <h6 class="text-[3rem]">{{ Math.round(weatherData.main?.temp) }}°C</h6>
        <p class="text-[1.2rem] capitalize">
          {{ weatherData?.weather[0].description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const apiUrl = "https://api.openweathermap.org/data/2.5/";
const apiKey = "ddd37312d21544e7300b23a69a2fff48";

const date = new Date().toDateString();

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
</script>
