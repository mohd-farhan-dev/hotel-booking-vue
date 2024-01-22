<template>
  <div class="room-card" :class="{horizontalroomcard : horizontal}">
    <div class="room-img" :class="{hor_room_img : horizontal}">
      <img :src="require('@/assets/rooms/'+data.thumbnail)">
    </div>
    <div class="room-content" :class="{hor_room_content : horizontal}">
      <div class="room-details">
        <h3>{{ data.name }}</h3>
        <h4 class="room-price" v-if="horizontal == false">{{ data.price }}</h4>
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
        <div v-if="horizontal == false">
          <h4>Ratings</h4>
          <div class="rating">
            <span v-for="rating in data.ratings" :key="rating" >
              <i class="bi bi-star-fill"></i>
            </span> 
          </div>
        </div>
      </div>
      <div>
        <div class="btns" :class="{hor_btns : horizontal}">
          <h4 class="room-price" v-if="horizontal">{{ data.price }}</h4>
          <button class="teal-btn" :class="{hor_button : horizontal}">Book Now</button>
          <router-link :to="'/RoomDetailsPage/'+data.id" class="btn-outline-dark router-link" :class="{hor_router_link : horizontal}">More details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalRoomCard',
  props:{
    data : Object,
    horizontal : Boolean
  }
}
</script>

<style scoped>

.room-card{
  display: block;
  background-color: #fff;
  border-radius: 5px;
  width: 350px;
  margin-bottom: 30px;

  div.room-img{
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    
    img{
      width: 100%;
    }
  }

  .room-content{
    width: 100%;
    padding: 15px;

    h3{
      margin-bottom: 12px;
    }
    h4{
      margin-bottom: 8px;
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

        i{
          margin-right: 4px;
          color: gold;
        }
    }

    .btns{
      display: flex;
      justify-content: space-around;
      align-items: center;

      .router-link{
        padding: 6px 10px;
        font-weight: 600;
      }

      button{
        border: 1px solid #2ec1ac;
        padding: 6px 10px;
        font-weight: 600;
      }
    }
  }
}

.horizontalroomcard{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 30px;
  margin-left: 20px;
  width: 100%;
}

.hor_room_img{
  width: 45%;
}
.hor_room_content{
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hor_btns{
  flex-direction: column;
}

.hor_button{
  width: 140px;
  padding: 3px 0;
  font-weight: 600;
  margin-bottom: 10px;
}

.hor_router_link{
  width: 140px;
  padding: 3px 0;
  font-weight: 600;
  text-align: center;
}



@media (max-width:992px){
  .room-card{
    /* margin: 0; */
    margin-bottom: 30px;

    div.room-img{
      img{
        width: 100%;
      }
    }

    .room-content{
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
      padding: 15px;
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

          .router-link{
            width: 100%;
            text-align: center;
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
