<template lang="html">
  <section class="dashboard">
    <div class="row"></div>

    <AppCoupon v-for="(coupon, index, key) in coupons" :key="coupon.id" :link="coupon.url" :title="coupon.title" :img="coupon.image" :discount="coupon.discountP"></AppCoupon>
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
      if(user)
      {
        self.firebase.auth().currentUser.getIdToken().then(token => {
          console.log(token);

          //console.log('token: ' + token);

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

              console.log(self.coupons)
            }
          );
        });

      }
    });


  },
  data: function () {
    return {
      coupons: [],
      firebase: require('firebase')
    }
  },
  props: {
    userData: Object
  },
  components: {
    AppCoupon
  }
}
</script>

<style scoped lang="scss">

</style>
