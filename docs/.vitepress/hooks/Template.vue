<script lang="ts" setup>
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <div
    style="background-image: url(https://files.catbox.moe/fvg5nw.png)"
    tw="w-full h-full bg-black flex flex-col"
  >
    <div
      tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between"
    >
      <div tw="w-full flex justify-between items-center text-5xl font-medium">
        <div tw="flex items-center">
          <div tw="text-zinc-100 ml-2 mt-1 font-semibold">
            the privateersclub wiki
          </div>
        </div>
      </div>
      <div tw="w-full pr-56 flex flex-col items-start justify-end">
        <div style="color: #eeeeee" tw="text-6xl font-bold" v-html="title" />
        <div
          v-if="description"
          tw="mt-2 text-gray-200 text-4xl"
          v-html="description"
        />
      </div>
    </div>
    <div style="background-color: #adf0dd" tw="shrink-0 h-4 w-full flex" />
  </div>
</template>
