<template>
  <div class="container">
    <h3>Check Booking Availability</h3>
    <div class="fields-container">
      <div class="input-field">
        <label>Check-in</label><br>
        <input type="date">
      </div>
      <div class="input-field">
        <label>Check-out</label><br>
        <input type="date">
      </div>
      <div class="input-field">
        <label>Adult</label><br>
        <select>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>
      <div class="input-field">
        <label>Children</label><br>
        <select>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>
      <button class="teal-btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookingAvailability'
}
</script>


<style>
.container{
  background-color: #fff;
  width: 85%;
  margin: 0 auto;
  margin-top: -60px;
  position: relative;
  z-index: 1000;
  padding: 20px 20px;
  border-radius: 5px;
  box-shadow: 2px 5px 5px #f0f0f0;

  h3{
    margin-bottom: 20px;
  }
  .fields-container{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;

    .input-field{
      width: 20%;
      label{
        font-weight: 500;
        display: inline-block;
        margin-bottom: 5px;
      }
      input{
        padding: 6px 8px;
        width: 100%;
        outline: none;
      }
      select{
        width: 100%;
        outline: none;
        padding: 7px 8px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  .container{

    .fields-container{
      flex-direction: column;
      align-items: flex-start;

      .input-field{
        width: 100%;
        margin-bottom: 10px;

        input{
          width: 100%;
        }
        select{
          width: 100%;
        }
      }
      button{
        margin-top: 10px;
      }
    }

  } 
}
</style>
