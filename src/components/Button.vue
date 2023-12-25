<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white bg-orange-500 hover:bg-orange-600 hover:text-white transition-colors">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: String,
})
</script>
