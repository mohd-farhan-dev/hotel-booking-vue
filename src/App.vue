<template>
  <HeaderComp />
  <CarouselComp />
</template>

<script>
import HeaderComp from "@/components/Header.vue";
import CarouselComp from "@/components/Carousel.vue";

export default {
  name: 'App',
  components:{
    HeaderComp,
    CarouselComp
  }
}
</script>
