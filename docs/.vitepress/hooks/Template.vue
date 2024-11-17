<script lang="ts" setup>
defineProps<{ title: string; description?: string }>()
</script>

<template>
  <span tw="w-full h-full flex-col bg-[#111111]">
    <svg tw="absolute right-0 top-0" width="629" height="593" viewBox="0 0 629 593" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_199_94966)">
        <path
          d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z"
          fill="#58D5BA" />
      </g>
      <defs>
        <filter id="filter0_f_199_94966" x="0.873535" y="-659" width="1255.25" height="1251.52"
          filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
        </filter>
      </defs>
    </svg>

    <span tw="p-10 w-full min-h-0 grow flex flex-col items-center justify-between">
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
        <span v-if="description" tw="mt-2 text-gray-200 text-4xl" v-html="description" />
      </span>
    </span>
  </span>
</template>
