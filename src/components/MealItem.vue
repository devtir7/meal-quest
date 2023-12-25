<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="rounded-t-xl w-full h-48 object-cover" />

    <div class="px-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>

      <router-link
        :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
        class="flex items-center justify-between rounded mb-1">
        <Button>Expand</Button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue"

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>
