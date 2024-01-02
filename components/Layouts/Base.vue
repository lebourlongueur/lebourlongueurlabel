<template>
  <div class="dark:bg-gray-800 min-h-screen text-white flex flex-col" >
    <slot name="navigation" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>
