<template>
  <div class="room-card">
    <div class="room-img">
      <img :src="require('@/assets/rooms/'+data.thumbnail)">
    </div>
    <div class="room-content">
      <div class="room-details">
        <h3>{{ data.name }}</h3>
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
      </div>
      <div>
        <div class="btns">
          <h4 class="room-price">{{ data.price }}</h4>
          <button class="teal-btn">Book Now</button>
          <router-link :to="'/RoomDetails/'+data.id" class="btn-outline-dark router-link">More details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalRoomCard',
  props:{
    data : Object
  }
}
</script>

<style scoped>

.room-card{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  margin-left: 20px;
  padding: 20px;

  div.room-img{
    width: 45%;
    img{
      border-radius: 5px;
      width: 100%;
    }
  }

  .room-content{
    width: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    h3,h4{
      margin-bottom: 8px;
    }

    .room-details{
      margin-left: 10px;
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

    .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      .router-link{
        display: block;
        width: 140px;
        padding: 3px 0;
        font-weight: 600;
        text-align: center;
        margin-bottom: 10px;
      }

      .room-price{
        margin-bottom: 15px;
      }

      button{
        display: block;
        width: 140px;
        padding: 3px 0;
        font-weight: 600;
        margin-bottom: 10px;
      }
    }
  }
}

@media (max-width:992px){
  .room-card{
    margin: 0;
    margin-bottom: 30px;

    div.room-img{
      width: 45%;
      img{
        width: 100%;
      }
    }

    .room-content{
      width: 55%;
      padding: 15px;
    }
  }
}

@media (max-width:768px){
  .room-card{
    flex-direction: column;

    div.room-img{
      width: 100%;
      img{
        width: 100%;
      }
    }

    .room-content{
      width: 100%;
      padding: 15px 0;
      flex-direction: column;


      .room-details{
        width: 100%;
        margin-left: 0px;
      }

      div{
        width: 100%;
        .btns{
          margin-bottom: 0;
          width: 100%;
  
          .room-price{
            margin-bottom: 15px;
          }
  
          button{
            width: 100%;
          }
        }
      }

    }
  }
}

</style>
