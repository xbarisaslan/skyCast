<template>
  <div
    class="text-center rounded-3xl text-[#323e48] bg-gray-100 py-3 w-[90%] lg:w-[40%]"
  >
    <h2 class="text-[1.5rem] lg:text-[2.5rem]">
      {{ weatherData.name }}, {{ weatherData.sys?.country }}
    </h2>

    <img :src="weatherIcon" class="w-12 mx-auto" />

    <p class="lg:text-[1.2rem] capitalize font-medium">
      {{ weatherData?.weather[0].description }}
    </p>
    <h6 class="text-[2.5rem] lg:text-[3rem]">
      {{ Math.round(weatherData.main?.temp) }}°C
    </h6>
    <p class="font-medium">
      Min:
      <span class="font-bold">
        {{ Math.round(weatherData.main?.temp_min) }}°C
      </span>
      , Max:
      <span class="font-bold">
        {{ Math.round(weatherData.main?.temp_max) }} °C
      </span>
    </p>
    <p class="font-medium pt-1">
      Feels like: {{ Math.round(weatherData.main?.feels_like) }}°C
    </p>

    <AtmosphericConditions :weatherData="weatherData" />
    <h6 class="text-[3rem]"></h6>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});

const weatherIcon = computed(() => {
  switch (props.weatherData.weather[0].main) {
    case "Clear":
      return "/icons/sunny.png";
    case "Clouds":
      return "/icons/cloudy.png";
    case "Rain":
      return "/icons/rainy.png";
    case "Snow":
      return "/icons/snowy.png";
    default:
      return "";
  }
});
</script>
