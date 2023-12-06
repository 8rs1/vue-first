<script setup>
import mainFooter from '@/components/main-footer.vue';
import landscapeImage from '@/components/landscape-image.vue'
</script>
<template>
<div class="grid-container">
  <div class="grid-child">
    <img src="@/assets/image1.jpg" alt="image" class="img-head">
  </div>
  <div class="grid-child">
    <img src="@/assets/image2.jpg" alt="image" class="img-head">
  </div>
</div>
<div class="main-txt">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse aliquam necessitatibus corporis impedit sequi expedita temporibus quia eos aperiam sunt explicabo, amet asperiores ea ad, iure aut doloribus illum et!
  Iusto, earum? Ratione neque consequuntur repellat porro? Rerum ex sunt tempora nulla aperiam eos quasi illo expedita ipsum iusto, mollitia dolorum temporibus, facere excepturi explicabo veniam. Hic laborum commodi rem.
  Dolorum consequuntur molestias tenetur nulla sed repudiandae pariatur! Earum accusamus quod eos, obcaecati saepe nihil amet non, quia assumenda qui, optio laudantium! Nemo ut iusto quibusdam facere magnam nesciunt itaque!
  Reprehenderit aperiam unde similique dolorum, vero earum voluptas ipsum ea. Omnis necessitatibus hic ipsum culpa, voluptatum labore voluptatem! Excepturi accusantium ratione deserunt eveniet provident, aut repellat cum ullam beatae non.
  Est sequi at dolores. Accusantium sunt placeat, natus unde facere deleniti consectetur impedit neque possimus rerum dolorum fugiat praesentium pariatur quos nam voluptate provident animi ipsam assumenda earum. Cumque, minus.
  Incidunt nobis possimus voluptates, ducimus neque vero ut dignissimos hic provident, rerum harum blanditiis sequi eum libero saepe quam similique id! Voluptas distinctio quidem nemo doloremque quos! Facere, explicabo eius!
  Sunt quo velit officiis dicta nobis laborum incidunt expedita maxime minima iusto quaerat neque inventore at voluptas, recusandae iste! Omnis quod eius itaque expedita consectetur explicabo ea optio veniam ratione.
  Delectus explicabo consequatur in officiis ipsa excepturi earum veritatis, alias mollitia placeat minus aut libero odio, facere obcaecati nulla veniam quos quaerat fuga. Ad assumenda in consequuntur reprehenderit explicabo numquam.
  Eos eum soluta labore quam delectus quo. Odio necessitatibus sit placeat corporis atque porro animi nihil cum natus soluta maxime adipisci eius quia sed iusto eligendi, expedita autem quam et.
</div>
<landscapeImage />
<mainFooter />
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.img-head {
  width: 100%;
}
.main-txt {
  font-style: 1.5rem;
}
</style>