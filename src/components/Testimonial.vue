<template>
  <swiper
    :modules="modules"
    :effect="'coverflow'"
    :centered-slides="true"
    :grabCursor="true"
    :slides-per-view="3"
    :loop="true"
    :pagination="true"
    :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :breakpoints="{
      320:{
        slidesPerView: 1,
      },
      640:{
        slidesPerView: 1,
      },
      768:{
        slidesPerView: 2,
      },
      1024:{
        slidesPerView: 3,
      }
    }"
    class="swiper-container"
  >
    <swiper-slide class="swiper-slide" v-for="testimonial in testimonials" :key="testimonial.id">
      <div class="profile">
        <img :src="require('@/assets/facilities/'+testimonial.profile)">
        <h4>{{ testimonial.name }}</h4>
      </div>
      <p>{{ testimonial.description }}</p>
      <span v-for="star in testimonial.rating" :key="star">
        <i :class="star"></i>
      </span>
    </swiper-slide>
  </swiper>
</template>

<script>
  import { testimonialData } from '@/websiteData.js'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, EffectCoverflow } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-coverflow';


  export default {
    name : 'Testimonials',
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        modules:[Pagination, EffectCoverflow],
        testimonials : testimonialData
      }
    }
  };

</script>


<style scoped>
.swiper-container{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;

  .swiper-slide{
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 2px 5px 10px #f0f0f0, -2px -5px 10px #f0f0f0;
    .profile{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 15px;
    
      img{
        width: 40px;
        margin-right: 10px;
      }
    }

    span{
      display: inline-block;
      margin-top: 5px;
      i{
        color: gold;
        margin-right: 4px;
      }
    }
  }
}
</style>