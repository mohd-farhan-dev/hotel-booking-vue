<template>
  <header>
    <h1>HB Website</h1>
    <nav>
      <a href="#" class="active">Home</a>
      <a href="#">Rooms</a>
      <a href="#">Facilities</a>
      <a href="#">Contact us</a>
      <a href="#">About</a>
    </nav>
    <div class="btns">
      <ButtonComp class="btn-outline-dark" text="Login" />
      <ButtonComp class="btn-outline-dark" text="Register" />
    </div>
  </header>
</template>

<script>
import ButtonComp from "./Button.vue";
export default {
  name: "HeaderComp",
  components: {
    ButtonComp
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

header {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px 20px;
  box-shadow: 2px 5px 5px #f0f0f0;

  h1 {
    margin-right: 30px;
    font-family: 'Merienda', cursive;
  }

  nav {
    a {
      display: inline-block;
      color: gray;
      margin-left: 20px;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;

    button {
      &:first-child {
        margin-right: 10px;
      }

      &:hover {
        background-color: black;
        color: #fff;
      }
    }
  }
}
</style>