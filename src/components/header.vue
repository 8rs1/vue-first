<template>
<div class="bgcolor">
  <div class="container">
    <div class="srch item">
      <form>
        <input type="search" id="searchcontent" placeholder="Search something">
      </form>
    </div>
    <div class="txt item">
      Amazon
    </div>
    <div class="amz item">
      <img src="@/assets/amazon.svg" alt="amazon" class="amazon">
    </div>
  </div>
</div>
</template>
<style scoped>
.bgcolor {
  background-color: #caaaaa;
}
.container {
  width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  margin: 0 auto;
}
.amazon {
  width: 4rem;
}
</style>