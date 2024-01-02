<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <NuxtLink
    :to="to"
    class="flex items-baseline space-x-8 p-4 group hover:bg-blue-500 transition"
  >
    <div class="text-2xl text-gray-400 group-hover:bg-blue-500 transition">
      <slot name="icon" />
    </div>

    <div
      class="text-lg text-gray-100 group-hover:text-black group-hover:transition"
    >
      <slot />
    </div>
  </NuxtLink>
</template>
