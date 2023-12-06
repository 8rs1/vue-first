<template>
  <div class="box">
      <div class="box__title">
        <h3>Title</h3>
      </div>
      <div class="box__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolore?
          Itaque possimus animi eos, inventore consectetur aspernatur ipsam
          voluptatum, ducimus iusto quis earum aperiam fugiat odit totam cum at
          reiciendis.
        </p>
      </div>
      <div class="box__button">
        <button>Button</button>
      </div>
    </div>
</template>
<style scoped>
.box {
  background-color: #f1cacb;
  border-radius: .5rem;
  box-shadow: 1px 1px .7rem #999;
}
.box__title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
}
.box__title::before {
  content: '';
  width: 2rem;
  height: 4px;
  background-color: #666;
  display: inline-block;
  border-radius: 0 1rem 1rem 0;
}
.box__button {
  display: flex;
  justify-content: center;
}
.box__button>button {
  outline: none;
  border: 1px solid #999;
  background-color: rgb(14, 165, 0);
  padding: .5rem 1rem;
  border-radius: .3rem;
  color: white;
  letter-spacing: .05rem;
}
</style>