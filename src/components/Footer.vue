<template>
  <div class="footer-container">
    <div class="website-about">
      <h1>HB WEBSITE</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis commodi minima natus vel libero earum!</p>
    </div>
    <div class="links">
      <h2>Links</h2>
      <a href="#">Home</a>
      <a href="#">Rooms</a>
      <a href="#">Facilities</a>
      <a href="#">Contact Us</a>
      <a href="#">About</a>
    </div>
    <div class="social-links">
      <h2>Follow Us</h2>
      <span><i class="bi bi-twitter"></i>Twitter</span><br>
      <span><i class="bi bi-facebook"></i>Facebook</span><br>
      <span><i class="bi bi-instagram"></i>Instagram</span>
    </div>
  </div>
</template>
  
<script>
export default {
  name:'FooterComp'
}
</script>
  
  
<style>
  .footer-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;

    .website-about{
      width: 30%;
      h1{
        font-family: 'Merienda', cursive;
        margin-bottom: 15px;
      }
    }

    .links{
      width: 30%;

      h2{
        margin-bottom: 15px;
      }

      a{
        display: block;
        color: gray;
        margin-bottom: 10px;
      }
    }

    .social-links{
      width: 30%;

      h2{
        margin-bottom: 15px;
      }

      span{
          background-color: #f0f0f0;
          display: inline-block;
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 3px 10px;

          i{
            margin-right: 5px;
          }
      } 
    }
  }

@media (max-width:962px){
  .footer-container{
    flex-direction: column;
    padding: 15px;

    .website-about{
      width: 100%;
      margin-bottom: 20px;
    }

    .links{
      width: 100%;
      margin-bottom: 20px;
    }

    .social-links{
      width: 100%;
      margin-bottom: 20px;
    }
  }
}
</style>