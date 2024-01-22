<template>
  <div class="room-card">
    <img :src="require('@/assets/rooms/'+data.thumbnail)">
    <div class="room-content">
      <h3>{{ data.name }}</h3>
      <h4 class="room-price">{{ data.price }}</h4>
      <h4>Features</h4>
      <div class="features">
        <span v-for="feature in data.features" :key="feature" >{{ feature }}</span> 
      </div>
      <h4>Facilities</h4>
      <div class="facilities">
        <span v-for="facility in data.facilities" :key="facility" >{{ facility }}</span> 
      </div>
      <h4>Guests</h4>
      <div class="guests">
        <span>{{ data.guests.adults }} Adults</span> 
        <span>{{ data.guests.childrens }} Childrens</span> 
      </div>
      <h4>Rating</h4>
      <div class="rating">
        <span class="rating-icon" v-for="star in data.ratings" :key="star">
          <i class="bi bi-star-fill"></i>
        </span>
      </div>
      <div class="btns">
        <button class="teal-btn">Book Now</button>
        <button class="btn-outline-dark">More details</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props:{
    data : Object
  }
}
</script>

<style scoped>
  .room-card{
    width: 350px;
    margin-bottom: 50px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 5px 10px 20px #f0f0f0, -5px -10px 20px #f0f0f0;

    img{
      width: 100%;
    }

    .room-content{
      padding: 15px;

      h3,h4{
        margin-bottom: 8px;
      }

      .room-price{
        margin-bottom: 15px;
      }

      .features, .facilities, .guests{
        margin-bottom: 12px;

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
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 10px;

        button{
          padding: 6px 10px;
          font-weight: 600;
        }
      }
    }
  }
</style>
