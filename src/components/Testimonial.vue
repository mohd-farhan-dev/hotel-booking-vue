<template>
  <swiper
    :modules="modules"
    :effect="coverflow"
    :centered-slides="true"
    :grabCursor="true"
    :slides-per-view="3"
    :space-between="20"
    :loop="true"
    :pagination="{clickable: true}"
    :autoplay="{
      delay:7000,
      disableOnIntreraction: false,
      pauseOnMouseEnter: true
    }"
    :coverflow-effect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
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
      <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
      </span>
    </swiper-slide>
  </swiper>
</template>

<script>
  import { TestimonialData } from '@/TestimonialData'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination, EffectCoverflow, Navigation } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';


  export default {
    name : 'TestimonialCard',
    components: {
      Swiper,
      SwiperSlide,
    },
    data(){
      return{
        modules:[Pagination, Autoplay, EffectCoverflow, Navigation],
        testimonials : TestimonialData
      }
    }
  };

</script>


<style>
.swiper-container{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;

  .swiper-slide{
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 5px 10px 20px #f0f0f0, -5px -10px 20px #f0f0f0;
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