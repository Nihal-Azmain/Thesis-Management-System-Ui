<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

onBeforeRouteUpdate((to, from, next) => {
  if (to.name === 'home')
    next(`/notice`)

  else next()
})
</script>

<template>

</template>
