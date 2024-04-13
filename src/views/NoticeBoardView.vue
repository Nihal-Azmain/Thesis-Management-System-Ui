<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const OverviewCard = defineAsyncComponent(() => import('../components/OverviewCards.vue'))

</script>

<template>
  <h1>NOTICE BOARD</h1>
  <OverviewCard />
</template>
