<template>
  <header>
    <h1>HB WEBSITE</h1>
    <div class="navbar-wrapper" :class="{block:showNavBar}">
      <nav>
        <a href="#">Home</a>
        <a href="#">Rooms</a>
        <a href="#">Facilities</a>
        <a href="#">Contact us</a>
        <a href="#">About</a>
      </nav>
      <div class="btns">
        <button class="btn-outline-dark" @click="toggleLoginModal" >Login</button>
        <button class="btn-outline-dark" @click="toggleRegisterModal">Register</button>
      </div>
    </div>
    <button @click="toggleNavbar" class="hamburger-icon"><i class="bi bi-list"></i></button>
  </header>
  <LoginModal  @close-modal="toggleLoginModal" v-if="showLoginModal" />
  <RegisterModal @close-modal="toggleRegisterModal" v-if="showRegisterModal" />
</template>

<script>
import LoginModal from "@components/LoginModal.vue";
import RegisterModal from "@components/RegisterModal.vue";

export default {
  name: "HeaderComp",
  data(){
    return{
      showLoginModal : false,
      showRegisterModal : false,
      showNavBar : false
    }
  },
  components: {
    LoginModal,
    RegisterModal
  },
  methods : {
    toggleLoginModal(){
      this.showLoginModal = !this.showLoginModal
    },
    toggleRegisterModal(){
      this.showRegisterModal = !this.showRegisterModal
    },
    toggleNavbar(){
      this.showNavBar = !this.showNavBar;
    }
  }
}
</script>

<style lang="scss">

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 2px 5px 5px #f0f0f0;

  h1 {
    font-family: 'Merienda', cursive;
  }
  .navbar-wrapper{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      a{
        display: inline-block;
        color: gray;
        margin-right: 25px;
      }
    }
  
    .btns {
      display: flex;
      justify-content: flex-start;
      align-items: center;
  
      button {
        &:first-child {
          margin-right: 15px;
        }
  
        &:hover {
          background-color: black;
          color: #fff;
        }
      }
    }
  }
}


@media screen and (max-width: 1200px) {
  header {
    .navbar-wrapper{
      width: 70%;
    }
  }
}

@media screen and (max-width: 992px) {
  header {
    padding: 5px 15px;

    h1 {
      font-size: 26px;
    }
    
    .navbar-wrapper{
      flex-direction: column;
      justify-content: start;
      align-items: start;
      position: absolute;
      top: 58px;
      left: 0;
      width: 100%;
      padding: 10px 15px;
      display: none;

      nav {
        a {
          display: block;
          margin-bottom: 10px;
          margin-left: 0;
        }
      }
  
      .btns {
        button {
          padding: 6px 12px;
        }
      }
    }

    .hamburger-icon{
      display: inline-block;
      cursor: pointer;
    }
  }

  .navbar-wrapper.block{
    display: flex;
  }
}

</style>