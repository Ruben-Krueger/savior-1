<template lang="html">
  <section class="dashboard">
    <div class="row">
      <h1 style="width: 100%; text-align: center">Intelligent and personalized recommendations</h1>

      <template v-if="!loaded" class="text-center" id="loader">
        <br>
        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </template>


      <template v-else>
          <AppCoupon v-for="(coupon, index, key) in coupons" :key="coupon.id" :link="coupon.url" :title="coupon.title" :img="coupon.image" :discount="coupon.discountP"></AppCoupon>
      </template>
    </div>

  </section>
</template>

<script lang="js">
import AppCoupon from '@/components/partials/AppCoupon'
import axios from 'axios'

export default {
  name: 'dashboard',

  mounted () {
    const self = this;
    self.firebase.auth().onAuthStateChanged((user) => {
      if(user) {


        self.firebase.auth().currentUser.getIdToken().then(token => {
          console.log(token);

          axios.get(`https://saviorc1.herokuapp.com/purchases?idToken=${token}&accountType=Checking`).
          then(function(response) {
              console.log(response);

              for (let category in response.data) {
                for (let coupon_raw of response.data[category])
                {
                  for (let coupon of coupon_raw) {
                    self.coupons.push(coupon);
                  }

                  /*console.log(coupon_raw);
                  let coupon = {};
                  coupon.title = coupon_raw['title'];
                  coupon.link = coupon_raw['link'];
                  coupon.img = coupon_raw['img'];
                  coupon.price = coupon_raw['price'];
                  coupon.old_price = coupon_raw['old_price'];
                  self.coupons.push(coupon);*/

                }

              }

              self.loaded = true;

            }
        );
        });

      }
    });


  },
  data: function () {
    return {
      coupons: [],
      firebase: require('firebase'),
    }
  },
  props: {
    userData: Object,
    loaded: Boolean
  },
  components: {
    AppCoupon
  }
}
</script>

<style scoped lang="scss">
  .lds-grid {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-grid div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000000;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 26px;
    left: 6px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 26px;
    left: 26px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 26px;
    left: 45px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 45px;
    left: 6px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 45px;
    left: 26px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 45px;
    left: 45px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  #loader {
    text-align: center;
    margin: 0 auto;
  }

</style>
