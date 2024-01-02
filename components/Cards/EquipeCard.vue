<style>

  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>

<template>
<div class="w-full h-full px-4 pt-10 max-w-sm dark:bg-gray-900 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 group hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate hover:text-white transition ease-in-out">
    
    
    <slot name="imageequipe" />
    <div class="flex flex-col items-center pb-10">

    
      <slot />
    </div>
</div>
</template>