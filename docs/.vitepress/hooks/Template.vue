<script lang="ts" setup>
defineProps<{ title: string; description?: string }>();
</script>

<template>
  <div
      style="
      background-image: linear-gradient(
        43deg,
        #c6f6d5 1%,
        #b8f4cc 7%,
        #aaf2c2 13%,
        #9ef0ba 19%,
        #9ae6b4 31%,
        #8adea7 35.8%,
        #79d59b 40.6%,
        #69cd8f 45.4%,
        #48bb78 55%,
        #43b072 58.8%,
        #3ea56c 62.6%,
        #399a66 66.4%,
        #2f855a 74%,
        #2d7b55 78.6%,
        #2b714f 83.2%,
        #286749 87.8%,
        #22543d 97%
      );
    "
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
        <div style="color: #eeeeee" tw="text-6xl font-bold" v-html="title"/>
        <div
            v-if="description"
            style="color: #adf0dd; text-decoration-style: dotted"
            tw="mt-2 text-4xl underline"
            v-html="description"
        />
      </div>
    </div>
    <div style="background-color: #adf0dd" tw="shrink-0 h-4 w-full flex"/>
  </div>
</template>
