<template>
  <div class="login-modal-wrapper-root">
    <div class="login-modal">
      <div class="modal-header">
        <h2>
          <i class="bi bi-person-circle"></i>
          User Login
        </h2>
        <i @click="closeModal" class="bi bi-x-lg close-icon"></i>
      </div>
      <div class="modal-body">
        <label>Email Address</label><br>
        <input type="email"><br>
        <label>Password</label><br>
        <input type="password">
      </div>
      <div class="modal-footer">
        <button class="btn-dark">LOGIN</button>
        <a href="#">Forgot Password?</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data(){
    return{
      active : false
    }
  },
  methods:{
    closeModal(){
      this.$emit('close-modal');
    }
  }
}
</script>

<style lang="scss">


.login-modal-wrapper-root{
  position: absolute;
  background-color: rgba($color: #000, $alpha: 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .login-modal{
    background-color: #fff;
    width: 500px;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    transition: all 0.5s;
    
    .modal-header, .modal-footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
    }
  
    .modal-header{
      border-bottom: 1px solid #eee;
    }
  
    .modal-footer{
      border-top: 1px solid #eee;
  
      a{
        color: grey;
      }
    }
  
    .modal-body{
      padding: 15px 20px;
      label{
        display: inline-block;
        margin-bottom: 5px;
      }
      input{
        border: 1px solid lightblue;
        outline: none;
        padding: 5px 10px;
        border-radius: 6px;
        width: 100%;
        margin-bottom: 10px;
      }
    }
  
    .close-icon{
      cursor: pointer;
      font-size: 20px;
    }
  }
}

@media screen and (max-width: 576px) {
  .login-modal-wrapper-root{
    .login-modal{
      width: 400px;
    }
  }
}


</style>