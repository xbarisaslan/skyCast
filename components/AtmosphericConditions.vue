<template>
  <div>
    <div class="flex items-center justify-center gap-16 pt-6">
      <div class="flex flex-col items-center font-medium">
        <img src="/icons/humidity.png" class="w-[1.6rem]" />
        Humidity
        <p>{{ Math.round(weatherData.main?.humidity) }} %</p>
      </div>
      <div class="flex flex-col items-center font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="28"
          height="40"
        >
          <path
            fill="#323E48"
            d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
          />
        </svg>
        Wind
        <p>{{ Math.round(weatherData.wind?.speed) }} km/h</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weatherData: {
    type: Object,
  },
});
</script>
