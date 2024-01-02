<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="text-lg text-gray-600 hover:text-gray-100 hover: transition"
    active-class="font-semibold text-stone-50"
  >
    <slot />
  </NuxtLink>
</template>
