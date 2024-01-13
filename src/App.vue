<template>
  <Header />
  <Carousel />
  <BookingAvailability />

  <h1>OUR ROOMS</h1>
  <div class="room-section">
    <div v-for="room in rooms" :key="room.id">
      <RoomCard :data="room" />
    </div>
  </div>
  <a href="#" class="btn-outline-dark-square">More Rooms >>></a>

  <h1>OUR FACILITIES</h1>
  <div class="facilities-section">
    <div v-for="facility in facilities" :key="facility.id">
      <FacilityCard :data="facility" />
    </div>
  </div>
  <a href="#" class="btn-outline-dark-square">More Facilities >>></a>

  <h1>TESTIMONIALS</h1>
  <div>
    <Testimonials />
  </div>
  <a href="#" class="btn-outline-dark-square">Know More >>></a>

  <h1>REACH US</h1>
  <ReachUs />
  <Footer />

  <p class="copyright">Designed & Developed by Mohd Farhan Ansari</p>
</template>

<script>
import { roomData, facilityData } from "@/websiteData.js";

import Header from "@/components/Header.vue";
import Carousel from "@/components/Carousel.vue";
import BookingAvailability from "@/components/BookingAvailability.vue";
import RoomCard from "@/components/RoomCard.vue";
import FacilityCard from "@/components/Facility.vue";
import Testimonials from "@/components/Testimonial.vue";
import ReachUs from "@/components/ReachUs.vue";
import Footer from "@/components/Footer.vue";


export default {
  name: 'App',
  components:{
    Header,
    Carousel,
    BookingAvailability,
    RoomCard,
    FacilityCard,
    Testimonials,
    ReachUs,
    Footer
  },
  data(){
    return{
      rooms : roomData,
      facilities :facilityData 
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

a{
  display: block;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 60px;
}

.room-section, .facilities-section{  
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.copyright{
  background-color: black;
  color: white;
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
}

@media (max-width : 962px){
  .room-section, .facilities-section{
    justify-content: center;
  }
}
</style>