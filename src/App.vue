<template>
  <Header />
  <Carousel />
  <BookingAvailability />

  <h1>OUR ROOMS</h1>
  <div class="room-section">
    <div v-for="room in rooms" :key="room.id">
      <RoomCard :roomData="room" />
    </div>
  </div>
</template>

<script>
import { roomData } from "@/roomdata.js";
import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import BookingAvailability from "@/components/BookingAvailability.vue";
import RoomCard from "@/components/RoomCard.vue";

export default {
  name: 'App',
  components:{
    Header,
    Carousel,
    BookingAvailability,
    RoomCard
  },
  data(){
    return{
      rooms : roomData
    }
  }
}
</script>

<style scoped>
h1{
  font-family: 'Merienda', cursive;
  text-align: center;
  margin-top:40px;
  margin-bottom:40px;
}

.room-section{  
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

@media (max-width : 962px){
  .room-section{
    justify-content: center;
  }
}
</style>