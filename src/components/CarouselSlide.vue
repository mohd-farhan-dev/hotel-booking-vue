<template>
  <div v-show="visibleSlide === index" class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name : 'CarouselSlide',
  props:{
    visibleSlide : Number,
    index : Number
  }
}
</script>