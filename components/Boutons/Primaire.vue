
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
  <button type="button" class="font-sans text-black bg-white focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-8 py-5 text-center inline-flex items-center  dark:focus:ring-amber-800 
  hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate hover:text-white transition ease-in-out">
    

    <slot />
    
  </button>
</template>
