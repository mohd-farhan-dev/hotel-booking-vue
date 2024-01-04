<template>
  <div class="carousel">
    <CarouselSlide  v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="visibleSlide">
      <img :src="getImagePath(slide)">
    </CarouselSlide>
  </div>
</template>

<script>
import CarouselSlide from '@/components/CarouselSlide.vue';
export default {
  name : 'CarouselComp',
  data(){
    return{
      slides:[
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png'
      ],
      visibleSlide : 0
    }
  },
  computed:{
    getSlideLength(){
      return this.slides.length
    }
  },
  methods:{
    getImagePath(image) {
      return require(`@/assets/carousel/${image}`);
    },
    slideTransition(){
      if(this.visibleSlide >= this.getSlideLength - 1){
        this.visibleSlide = 0;
      }
      else{
        this.visibleSlide++;
      }
    }
  },
  components:{
    CarouselSlide
  },
  mounted(){
    setInterval(this.slideTransition, 6000);
  }
}
</script>


<style>
.carousel{
  padding: 10px 30px;
  position: relative;
  width: 100%;

  img{
    width: 100%;
  }
}
</style>