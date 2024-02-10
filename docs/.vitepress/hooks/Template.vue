<script setup lang="ts">
defineProps<{ title: string; description?: string }>();
</script>

<template>
  <div tw="w-full h-full bg-black flex flex-col" style="
      background-image: linear-gradient(
        45deg,
        rgb(14, 14, 25) 0%,
        rgb(29, 33, 43) 19%,
        rgb(47, 53, 63) 27%,
        rgb(71, 84, 97) 34%,
        rgb(101, 122, 133) 41%,
        rgb(136, 163, 170) 47%,
        rgb(167, 188, 185) 53%,
        rgb(192, 203, 191) 59%,
        rgb(216, 214, 199) 66%,
        rgb(236, 223, 202) 73%,
        rgb(248, 231, 203) 81%,
        rgb(255, 238, 204) 100%
      );
    ">
    <div tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
      <div tw="w-full flex justify-between items-center text-5xl font-medium">
        <div tw="flex items-center">
          <div tw="text-zinc-100 ml-2 mt-1 font-semibold">
            the privateersclub wiki
          </div>
        </div>
      </div>
      <div tw="w-full pr-56 flex flex-col items-start justify-end">
        <div style="color: #eeeeee" tw="text-6xl font-bold" v-html="title" />
        <div style="color: #adf0dd; text-decoration-style: dotted" tw="mt-2 text-4xl underline" v-html="description" />
      </div>
    </div>
    <div tw="shrink-0 h-4 w-full flex" style="background-color: #adf0dd" />
  </div>
</template>
