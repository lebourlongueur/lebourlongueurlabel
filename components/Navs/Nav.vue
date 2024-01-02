<script setup>
const isOpen = ref(false);
</script>

<template>
  <nav class="fixed top-0 w-full bg-white border-gray-200 dark:bg-transparent z-10 px-10">
    <div class="flex items-center justify-between flex-wrap h-20 px-4">
      <div>
        <nuxt-link to="/">
          <slot name="logo"> </slot>
        </nuxt-link>
      </div>
      <div>
        <ul class="hidden md:flex items-center justify-between space-x-8">
          <slot name="links"></slot>
        </ul>
        <ul>
          <li class="flex md:hidden">
            <button @click="isOpen = !isOpen">
              <i v-if="!isOpen" class="ri-menu-line text-3xl"></i>
              <i v-else class="ri-close-line text-3xl"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
<div class="overflow-clip">
    <transition name="slide-background" >
      <ul v-show="isOpen" class="md:hidden flex flex-col space-y-2 px-4 py-8 bg-gray-200 rounded-lg">
        <slot name="links"></slot>
      </ul>
    </transition>
  </div>
  </nav>
</template>

<style scoped>
.slide-background-enter-active, .slide-background-leave-active {
  height: 100%;
  transition: all 0.3s ease-in-out;

}
.slide-background-enter, .slide-background-leave-to {
  opacity: 1;
  transform: translateY(-100%);
}
</style>
