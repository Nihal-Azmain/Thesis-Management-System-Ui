<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const Header = defineAsyncComponent(() => import('../components/Header.vue'))
const Navbar = defineAsyncComponent(() => import('../components/Navbar.vue'))
</script>

<template>
  <Header />
  <Navbar />
  <router-view />
</template>
