<template>
  <Header />
    <div v-for="(room, index) in roomData" :key="room.id">
      <div class="room-details-wrapper" v-if="room.id == $route.params.id">
        <h1>{{ room.name }}</h1>
        <div class="links">
          <router-link to="/">HOME</router-link> > <router-link to="/Rooms">ROOMS</router-link> 
        </div>
        <div class="room-card">
          <img :src="require('@/assets/rooms/'+room.thumbnail)">
          <div class="room-content">
            <h3 class="room-price">{{ room.price }}</h3>
            <div class="rating">
              <span class="rating-icon" v-for="star in room.ratings" :key="star">
                <i class="bi bi-star-fill"></i>
              </span>
            </div>
            <h4>Features</h4>
            <div class="features">
              <span v-for="feature in room.features" :key="feature" >{{ feature }}</span> 
            </div>
            <h4>Facilities</h4>
            <div class="facilities">
              <span v-for="facility in room.facilities" :key="facility" >{{ facility }}</span> 
            </div>
            <h4>Guests</h4>
            <div class="guests">
              <span>{{ room.guests.adults }} Adults</span> 
              <span>{{ room.guests.childrens }} Childrens</span> 
            </div>
            <div class="btns">
              <button class="teal-btn">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer />
</template>

<script>
import { roomData } from "@/websiteData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components:{
    Header,
    Footer
  },
  data(){
    return{
      roomData : roomData,
    }
  }
}
</script>

<style scoped>
.room-details-wrapper{
  width: 80%;
  margin: 30px auto;
  padding: 20px;

  .links{
    margin-top: 5px;
    margin-bottom: 40px;
    color: gray;
  }

  .room-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    img{
      width: 55%;
      border-radius: 5px;
    }

    .room-content{
      background-color: #fff;
      width: 40%;
      padding: 15px 20px;
      border-radius: 5px;

      h3,h4{
        margin-bottom: 10px;
      }
      .features, .facilities, .guests{
        margin-bottom: 20px;

        span{
          background-color: #f0f0f0;
          color: #000;
          border-radius: 4px;
          padding: 2px 5px;
          margin-right: 5px;
          font-size: 12px;
          font-weight: bold;
        }
      }

      .rating{
        margin-bottom: 12px;

        .rating-icon{
          margin-right: 4px;
          color: gold;
        }
      }

      .btns{
        button{
          display: block;
          width: 100%;
          padding: 3px 0;
          font-weight: 600;
          text-align: center;
        }
      }
    }
  }
}
</style>