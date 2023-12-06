<script setup>
import landscapeImage from "@/components/landscape-image.vue";
import mainFooter from "@/components/main-footer.vue";
import contactBox from '@/components/contact-box.vue';
</script>
<template>
  <landscapeImage />
  <div class="container-boxs">
    <contactBox />
    <contactBox />
    <contactBox />
    <contactBox />
  </div>
  <mainFooter />
</template>
<style scoped>
.container-boxs {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin: 1rem 0;
}
</style>
