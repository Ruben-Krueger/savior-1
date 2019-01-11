<template lang="html">
  <section class="dashboard">
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-cube text-danger icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Total spending</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">${{ totalSpending }}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> {{ totalSpending > 1000 ? "Greater than your target of $1000" : "Way to go!"}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-receipt text-warning icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Purchases this month</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{ purchases.length }}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> {{ purchases.length > 35 ? "More than your average of 35" : ""}}
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-poll-box text-teal icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Top spending category</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">{{ topCategory }}</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> As expected!
            </p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
        <div class="card card-statistics">
          <div class="card-body">
            <div class="clearfix">
              <div class="float-left">
                <i class="mdi mdi-account-location text-info icon-lg"></i>
              </div>
              <div class="float-right">
                <p class="card-text text-right">Most expensive purchase</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">$246</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Lower than last month's
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Purchases</h5>
            <div class="table-responsive">
              <table class="table center-aligned-table">
                <thead>
                  <tr>
                    <th class="border-bottom-0">Amount</th>
                    <th class="border-bottom-0">Date</th>
                    <th class="border-bottom-0">Type</th>
                    <th class="border-bottom-0">Merchant</th>
                    <th class="border-bottom-0">Status</th>
                  </tr>
                </thead>
                <tbody>
                    <!--
                  <tr>
                    <td>034</td>
                    <td>Iphone 7</td>
                    <td>12 May 2017</td>
                    <td>Dispatched</td>
                    <td><label class="badge badge-teal">Approved</label></td>
                    <td><a href="#" class="btn btn-outline-success btn-sm">View Order</a></td>
                    <td><a href="#" class="btn btn-outline-danger btn-sm">Cancel</a></td>
                  </tr>-->
                  <AppPurchase v-for="(purchase, index) in recent_purchases" :key="index" :price=purchase.amountSpent :date=purchase.date :merchant=purchase.name :type=purchase.category>
                      
                  </AppPurchase>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title mb-4">Suggestions</h5>
            <div class="fluid-container">
            
            
              <div class="row ticket-card mt-3 pb-2">
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Suggestion:</p>
                    <p class="font-weight-bold mb-0 ellipsis">You spent a lot of money on {{ topCategory }} this month.</p>
                  </div>
                  <p class="text-small text-gray">Keep in mind your overall goals when spending, and don't forget what you've already spent.</p>
                </div>
              </div>

              <div class="row ticket-card mt-3 pb-2">
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Suggestion:</p>
                    <p class="font-weight-bold mb-0 ellipsis">Check your credit score</p>
                  </div>
                  <p class="text-small text-gray">You can check your credit score up to four times a year for free. Make sure to check for fraudulent credit lines.</p>
                </div>
              </div>
              
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
export default {
  name: 'dashboard'
}
</script>

<style scoped lang="scss">
</style>

<script>
import AppPurchase from '@/components/partials/AppPurchase'
export default {
    name: 'tracking',
    props: {userData: Object},
    data() {
        return {
            purchases: [],
            recent_purchases: [],
            firebase: require('firebase'),
            totalSpending: 0,
            topCategory: 'None',
            spendingC: {}
        }
    },
    components: {AppPurchase},
    mounted () {
        const self = this
        const axios = require('axios')
        self.firebase.auth().onAuthStateChanged(user => {

            if(user) {
                self.firebase.auth().currentUser.getIdToken().then(token => {
                    axios.get(`https://saviorc1.herokuapp.com/transactions?idToken=${token}&accountType=Checking`).then(response => {
                        var category_counts = {}
                        var max_count = 0
                        var top_category = ""
                        for (let p of response.data) {
                            this.purchases.push(p)
                            this.totalSpending += p.amountSpent

                            if (p.category in category_counts)
                                category_counts[p.category] += 1
                            else
                                category_counts[p.category] = 1

                            if (category_counts[p.category] > max_count) {
                                max_count = category_counts[p.category]
                                top_category = p.category
                            }

                        }
                        for (let key of Object.keys(category_counts)) {
                            self.spendingC[key] = category_counts[key]
                        }
                        console.log(self.spendingC)
                        self.topCategory = top_category
                        self.purchases.sort(function(a, b){
                                    var aa = a.date.split('/').reverse().join(),
                                        bb = b.date.split('/').reverse().join();
                                    return aa < bb ? -1 : (aa > bb ? 1 : 0);
                        });
                        

                        var i = self.purchases.length - 1
                        for (var j = 0; j < 10; j++) {
                            self.recent_purchases.push(self.purchases[i--]);
                        }
                    })
                })
            }

        })
    }
}
</script>

<style lang="sass" scoped>

</style>
