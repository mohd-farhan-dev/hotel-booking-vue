<template>
  <Header />
  <div class="heading">
    <h1>Rooms</h1>
    <span></span>
  </div>

  <div class="rooms-container">
    <div class="filter-section">
      <h2 class="filter-toggle">
        FILTERS
        <i @click="toggleFilter" class="bi bi-list"></i>
      </h2>
      <div class="form-container" :class="{block:showToggleFilter}">
        <form>
          <h3>CHECK AVAILABILITY</h3>
          <div class="checkin-checkout-box">
            <label>Check-in</label>
            <input type="date">
            <label>Check-out</label>
            <input type="date">
          </div>
          <h3>FACILITIES</h3>
          <div class="facilities-checkbox">
            <div>
              <input type="checkbox" id="one">
              <label for="one">Facilities one</label>
            </div>
            <div>
              <input type="checkbox" id="two">
              <label for="two">Facilities two</label>
            </div>
            <div>
              <input type="checkbox" id="three">
              <label for="three">Facilities three</label>
            </div>
          </div>
          <h3>GUESTS</h3>
          <div class="guest-box">
            <div>
              <label for="">Adults</label>
              <input type="number">
            </div>
            <div>
              <label for="">Childrens</label>
              <input type="number">
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="rooms-section">
      <HorizontalRoomCard v-for="room in roomData" :key="room.id" :data="room"/>
    </div>
  </div>
  <Footer />
</template>

<script>
import { roomData } from "@/websiteData";
import Header from "@/components/Header";
import HorizontalRoomCard from "@/components/HorizontalRoomCard";
import Footer from "@/components/Footer";

export default {
  components:{
    Header,
    HorizontalRoomCard,
    Footer
  },
  data(){
    return{
      roomData : roomData,
      showToggleFilter : false
    }
  },
  methods:{
    toggleFilter(){
      this.showToggleFilter = !this.showToggleFilter
    }
  }
}
</script>

<style scoped>
.heading{
  text-align: center;
  margin:40px 0;

  h1{
    font-family: 'Merienda', cursive;
    margin-bottom: 5px;
  }
  span{
    display: block;
    margin: 0 auto;
    height: 3px;
    width: 120px;
    background-color: black;
  }
}

.rooms-container{
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  .filter-section{
    width: 25%;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 5px;

    h2{
      margin-bottom: 10px;
      i{
        display: none;
      }
    }

    .form-container{
      padding: 10px;

      h3{
        margin-bottom: 15px;
      }
      .checkin-checkout-box, .facilities-checkbox, .guest-box{
        margin-bottom: 35px;
      }

      .checkin-checkout-box{
        label,input{
          display: block;
          width: 100%;
          margin-bottom: 8px;
        }
        label{
          font-weight: 500;
        }
        input{
          padding: 6px;
          border: 1px solid gray;
          border-radius: 4px;
          outline: none;
        }
      }

      .facilities-checkbox{
        div{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 15px;

          input{
            margin-right: 10px;
          }
          label{
            font-weight: 500;
          }
        }
      }

      .guest-box{
        display: flex;
        justify-content: space-between;
        align-items: center;

        div{
          &:first-child{
            margin-right: 5px;
          }
          label{
            display: block;
            font-weight: 500;
            margin-bottom: 8px;
          }
  
          input{
            width: 100%;
            border-radius: 4px;
            outline: none;
            border: 1px solid gray;
            padding: 6px;
          }
        }
      }
    }
  }

  .rooms-section{
    width: 75%;
  }

}


@media (max-width : 992px){
  .rooms-container{
    padding: 5px 15px;
    flex-direction: column;
    width: 100%;

    .filter-section{
      width: 100%;
      margin-bottom: 30px;
      box-shadow: 2px 10px 40px #f0f0f0;

      .filter-toggle{
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        i{
          display: flex;
          font-weight: 600;
          font-size: 30px;
          cursor: pointer;
        }
      }

      .form-container{
        padding-top: 15px;  
        display: none;
        .guest-box{
          justify-content: flex-start;
        }
      }
      .form-container.block {
        display: block;
      }

    }

    .rooms-section{
      width: 100%;
    }
    

  }


}

</style>