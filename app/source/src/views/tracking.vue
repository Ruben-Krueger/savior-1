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
                <p class="card-text text-right">Sales</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">5693</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-calendar mr-1" aria-hidden="true"></i> Weekly Sales
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
                <p class="card-text text-right">Employees</p>
                <div class="fluid-container">
                  <h3 class="card-title font-weight-bold text-right mb-0">246</h3>
                </div>
              </div>
            </div>
            <p class="text-muted mt-3">
              <i class="mdi mdi-reload mr-1" aria-hidden="true"></i> Product-wise sales
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
                    <th class="border-bottom-0">Payment Status</th>
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
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face1.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">James :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23047]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face2.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Stella :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23135]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi voluptates fuga quae?</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face3.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">John Doe :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23246]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2 border-bottom">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face4.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marques Brownlee :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23047]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sequi a, nostrum.</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ticket-card mt-3 pb-2">
                <div class="col-1">
                  <img class="img-sm rounded-circle" src="../assets/images/faces/face5.jpg" alt="profile image">
                </div>
                <div class="ticket-details col-9">
                  <div class="d-flex">
                    <p class="text-primary font-weight-bold mr-2 mb-0 no-wrap">Marina John :</p>
                    <p class="font-weight-medium mr-1 mb-0">[#23034]</p>
                    <p class="font-weight-bold mb-0 ellipsis">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi amet totam, dignissimos fugiat voluptates, ab magni, necessitatibus excepturi inventore, mollitia ipsa quaerat aliquam.</p>
                  </div>
                  <p class="text-small text-gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae animi omnis, a?</p>
                  <div class="row text-muted d-flex">
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Last responded :</p>
                      <p class="Last-responded mr-2 mb-0">3 hours ago</p>
                    </div>
                    <div class="col-4 d-flex">
                      <p class="mb-0 mr-2">Due in :</p>
                      <p class="Last-responded mr-2 mb-0">2 Days</p>
                    </div>
                  </div>
                </div>
                <div class="ticket-actions col-2">
                  <div class="btn-group dropdown">
                    <button type="button" class="btn btn-teal dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Manage
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="#"><i class="fa fa-reply fa-fw"></i>Quick reply</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-history fa-fw"></i>Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#"><i class="fa fa-check text-success fa-fw"></i>Resolve Issue</a>
                      <a class="dropdown-item" href="#"><i class="fa fa-times text-danger fa-fw"></i>Close Issue</a>
                    </div>
                  </div>
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
            totalSpending: 0
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
                        for (let p of response.data) {
                            this.purchases.push(p)
                            this.totalSpending += p.amountSpent
                    
                        }
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
