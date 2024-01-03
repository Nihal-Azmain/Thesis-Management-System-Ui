<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'))
</script>

<template>
  <Navbar />
  <router-view />
</template>
