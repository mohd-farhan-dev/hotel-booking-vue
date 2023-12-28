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
      <button class="btn-outline-dark" @click="openModal" >Login</button>
      <button class="btn-outline-dark" @click="openRegisterModal">Register</button>
    </div>
  </header>
  <LoginModal  @close-modal="closeModalHandler" v-if="showModal" />
  <RegisterModal @close-register-modal="closeRegisterModalHandler" v-if="showRegisterModal" />
</template>

<script>
import LoginModal from "./LoginModal.vue";
import RegisterModal from "./RegisterModal.vue";

export default {
  name: "HeaderComp",
  data(){
    return{
      showModal : false,
      showRegisterModal : false
    }
  },
  components: {
    LoginModal,
    RegisterModal
  },
  methods : {
    openModal(){
      this.showModal = true;
    },
    closeModalHandler(){
      this.showModal = false;
    },
    openRegisterModal(){
      this.showRegisterModal = true;
    },
    closeRegisterModalHandler(){
      this.showRegisterModal = false;
    }
  }
}
</script>

<style lang="scss">
@import '@/styles.scss';

header {
  display: flex;
  justify-content: start;
  align-items: center;
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
    justify-content: start;
    align-items: center;
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