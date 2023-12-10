<template>
  <div class="container">
    <form>
      <div class="input-container">
        <input type="text" class="input" placeholder="First Name" required>
      <input type="text" class="input" placeholder="Last Name" required>
      <input type="tel" class="input" placeholder="Number Phone" required>
      <input type="email" class="input" placeholder="E-Mail" required>
      </div>
      <button type="submit" class="submit">Submit</button>
    </form>
  </div>
</template>
<style scoped>
input,button {
  border-radius: .3rem;
  border-width: 1px;
  border-style: solid;
  outline: none;
}
input:invalid {
  border-color: #d00;
}
input:valid {
  border-color: #0d0;
}
.container {
  margin: 3rem;
}
.input-container {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 1rem;
  margin-bottom: 2rem;
}
.input {
  text-align: center;
  padding: .6rem 1rem;
  background-color: rgb(164, 243, 164);
}
.submit {
  border: 1px solid #999;
  display: block;
  width: 50%;
  padding: .6rem 1rem;
  margin: 0 auto;
  background-color: #0d0;
  color: white;
  cursor: pointer;
}
</style>