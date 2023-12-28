<template>
  <div class="layer">
    <div class="register-modal">
      <div class="modal-header">
        <h2>
          <i class="bi bi-person-lines-fill"></i>
          User Registration
        </h2>
        <i @click="closeModal" class="bi bi-x-lg close-icon"></i>
      </div>
      <div class="modal-body">
        <p class="note">Note : Your details must match with your ID(Adhaar card, passport, driving license, etc. ) that will be 
          required during check-in.
        </p>
        <div class="row">
          <div class="col">
            <label>Name</label><br>
            <input type="text">
          </div>
          <div class="col">
            <label>Email</label><br>
            <input type="email">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Phone Number</label><br>
            <input type="number">
          </div>
          <div class="col">
            <label>Picture</label><br>
            <input type="file">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <label>Address</label><br>
            <textarea rows="4"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Pincode</label><br>
            <input type="number">
          </div>
          <div class="col">
            <label>Date of Birth</label><br>
            <input type="date">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label>Password</label><br>
            <input type="password">
          </div>
          <div class="col">
            <label>Confirm Password</label><br>
            <input type="password">
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn-dark">REGISTER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterModal',
  data(){
    return{
      active : false
    }
  },
  methods:{
    closeModal(){
      this.$emit('close-register-modal');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles.scss';

.layer{
  position: absolute;
  background-color: rgba($color: #000, $alpha: 0.2);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .register-modal{
    background-color: #fff;
    width: 800px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    
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
      justify-content: center;

      a{
        color: grey;
      }
    }
  
    .modal-body{
      padding: 15px 20px;
      .note{
        font-size: 14px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 15px;
      }
      .row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

        .col-12{
          width: 100%;
          textarea{
            width: 100%;
            margin-top: 5px;
            border: 1px solid lightblue;
            outline: none;
            padding: 5px 10px;
            border-radius: 6px;
          }
        }
        .col{
          width: 48%;

          label{
            display: inline-block;
            margin-bottom: 5px;
          }

          input{
            width: 100%;
            border: 1px solid lightblue;
            outline: none;
            padding: 5px 10px;
            border-radius: 6px;
          }
        }
      }
    }
  
    .close-icon{
      cursor: pointer;
      font-size: 20px;
    }
  }
}

</style>