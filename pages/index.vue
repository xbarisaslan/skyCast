<template>
  <div class="bg-blue-300 h-screen text-white">
    <Header />
    <div class="flex flex-col items-center justify-center h-[92%]">
      <input
        v-model="query"
        type="search"
        class="bg-[#eaeced] text-black text-sm py-2.5 px-5 rounded-3xl w-[30%] my-2 hover:bg-white focus:outline-none border border-[#eaeced] focus:border-[#ff4713] transition ease-in"
        placeholder="Enter city name..."
        @keypress.enter="getWeather"
        @input="weatherData = {}"
      />

      <h3 class="font-medium text-lg pt-2">{{ date }}</h3>

      <div class="text-center" v-if="weatherData?.weather?.length > 0">
        <h2 class="text-[2.5rem] font-medium">
          {{ weatherData.name }}, {{ weatherData.sys?.country }}
        </h2>

        <p class="text-[1.2rem] capitalize font-medium">
          {{ weatherData?.weather[0].description }}
        </p>
        <h6 class="text-[3rem]">{{ Math.round(weatherData.main?.temp) }}°C</h6>

        <p class="font-medium">
          Feels like: {{ Math.round(weatherData.main?.feels_like) }}°C
        </p>
        <div class="flex items-center justify-center gap-16 pt-6">
          <div class="flex flex-col items-center font-medium">
            <img src="../assets/icons/humidity.png" class="w-[1.6rem]" />
            Humidity
            <p>{{ Math.round(weatherData.main?.humidity) }} %</p>
          </div>
          <div class="flex flex-col items-center font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="28"
              height="38"
            >
              <path
                fill="#FFFFFF"
                d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
              />
            </svg>
            Wind
            <p>{{ Math.round(weatherData.wind?.speed) }} km/h</p>
          </div>
        </div>

        <h6 class="text-[3rem]"></h6>
      </div>
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

const date = new Date().toLocaleString("en-GB");

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
