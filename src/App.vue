<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerPage from '@/components/header.vue'
import footerPage from '@/components/footer.vue'
</script>

<template>
  <headerPage />
  <RouterView />
  <footerPage />
</template>

<style scoped>
</style>