<template>
  <div class="carousel">
    <div v-for="(slide, index) in slides" :key="slide">
      <div v-show="activeSlide === index">
        <img :src="require('@/assets/carousel/'+slide)">
      </div>
    </div>
  </div>
</template>

<script>
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
      activeSlide : 0
    }
  },
  mounted(){
    setInterval(this.slideTransition, 6000);
  },
  methods:{
    slideTransition(){
      if(this.activeSlide >= this.slides.length - 1){
        this.activeSlide = 0;
      }
      else{
        this.activeSlide++;
      }
    }
  }
}
</script>


<style>
.carousel{
  padding: 10px 30px;
  position: relative;
  width: 100%;

  div{ 
    img{
      width: 100%;
    }
  }
    
}
</style>