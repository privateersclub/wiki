<script lang="ts" setup>
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <span
    style="
      background-image: radial-gradient(
        100% 100% at 50% 100%,
        #1fd8a4 0%,
        rgba(58, 221, 198, 0.75) 25%,
        rgba(78, 227, 226, 0.5) 50%,
        rgba(190, 227, 248, 0) 100%
      );
    "
    tw="w-full h-full bg-black flex-col"
  >
    <span
      tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between"
    >
      <span tw="w-full flex justify-between items-center text-5xl font-medium">
        <span tw="flex items-center">
          <img tw="h-22 w-22" src="https://megathread.pages.dev/logo.png" />

          <span tw="text-gray-200 ml-2 mt-1 font-semibold">
            the privateersclub wiki
          </span>
        </span>
      </span>
      <span tw="w-full pr-56 flex flex-col items-start justify-end">
        <span tw="text-6xl text-gray-200 font-bold" v-html="title" />
        <span
          v-if="description"
          tw="mt-2 text-gray-200 text-4xl"
          v-html="description"
        />
      </span>
    </span>
  </span>
</template>
