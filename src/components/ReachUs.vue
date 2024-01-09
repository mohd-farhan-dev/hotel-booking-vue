<template>
<div class="reach-us-section">
  <div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28826.463140727923!2d81.8151424!3d25.427968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1704710332995!5m2!1sen!2sin" width="700" height="330" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div class="social-container">
    <div class="contact">
      <h3>Call Us</h3>
      <span><i class="bi bi-telephone-fill"></i>+919876543214</span><br>
      <span><i class="bi bi-telephone-fill"></i>+919876543214</span>
    </div>
    <div class="social-links">
      <h3>Follow Us</h3>
      <span><i class="bi bi-twitter"></i>Twitter</span><br>
      <span><i class="bi bi-facebook"></i>Facebook</span><br>
      <span><i class="bi bi-instagram"></i>Instagram</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:'ReachUs'
}
</script>


<style>
.reach-us-section{
  width: 80%;
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: start;

  .map{
    width: 60%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    margin: 20px;

    iframe{
      width: 100%;
    }
  }

  .social-container{
    width: 40%;
    
    .contact{
      margin: 20px;
      padding: 20px;
      border-radius: 5px;
      background-color: #fff;

      h3{
        margin-bottom: 10px;
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

    .social-links{
      margin: 20px;
      padding: 20px;
      border-radius: 5px;
      background-color: #fff;
      
      h3{
        margin-bottom: 10px;
      }

      span{
        background-color: #f0f0f0;
        display: inline-block;
        margin-bottom: 10px;
        border-radius: 5px;
        padding: 3px 10px;
        font-weight: 600;

        i{
          margin-right: 8px;
        }
      }
    }
  }
}


@media (max-width:962px){
  .reach-us-section{
    flex-direction: column;
    width: 100%;

    .map{
      margin: 0;
      width: 100%;
      margin-bottom: 20px;
    }

    .social-container{
      width: 100%;
      
      .contact{
        margin: 0px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 5px;
        background-color: #fff;

        h3{
          margin-bottom: 10px;
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

      .social-links{
        margin: 0px;
        margin-bottom: 20px;
        padding: 20px;
        border-radius: 5px;
        background-color: #fff;
        
        h3{
          margin-bottom: 10px;
        }

        span{
          background-color: #f0f0f0;
          display: inline-block;
          margin-bottom: 10px;
          border-radius: 5px;
          padding: 3px 10px;
          font-weight: 600;

          i{
            margin-right: 8px;
          }
        }
      }
    }
  }
}
</style>