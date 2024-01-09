<template>
  <div class="facility">
    <img :src="require('@/assets/facilities/'+facilityData.thumbnail)">
    <p>{{ facilityData.name }}</p>
  </div>
</template>

<script>
export default {
  name: 'FacilityCard',
  props:{
    facilityData:Object
  }
}
</script>

<style scoped>
.facility{
  width: 200px;
  height: 150px;
  border-radius: 5px;
  box-shadow: 5px 10px 20px #f0f0f0, -5px -10px 20px #f0f0f0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  img{
    width: 60px;
    margin-bottom: 10px;
  }

  p{
    font-weight: 500;
  }
}
</style>
