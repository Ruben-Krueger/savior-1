<template lang="html">
  <section class="register">
    <div class="wrapper d-flex align-items-center auth register-full-bg">
      <div class="row w-100">
        <div class="col-lg-6 mx-auto">
          <div class="auth-form-light text-left p-5">
            <h2>Register</h2>
            <h4 class="font-weight-light">Let's get started.</h4>
            <form class="pt-4">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
                  <i class="mdi mdi-account"></i>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  <i class="mdi mdi-eye"></i>
                </div>
                <div class="mt-5">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium" @click="register">Register</a>
                </div>
                <div class="mt-2 text-center" id="error" v-if="error">
                  There was an error in registering a new account. Please try again.
                </div>
                <div class="mt-2 text-center">
                  <a @click="login()" class="auth-link text-black">Already have an account? <span class="font-weight-medium">Sign in!</span></a>
                </div>
              </form>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'register',
  data () {
    return { 
      firebase: require('firebase'),
      email: "",
      password: "",
      status: null,
      error: false
    }
  },
  methods: {
    register: function () {
      // create user with email
      const email = this.email
      const password = this.password
      const firebase = this.firebase
      const self = this
      firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        self.error = false
        self.firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          console.log(user)
          self.error = false
          self.firebase.auth().currentUser.getIdToken(true).then(token => console.log(token))
          self.$router.push('/')
          
        })
      })
      .catch((error) => {
          self.error = true
      })
    },
    login: function() { this.$router.push('/login') }
  }
}
</script>

<style lang="sass" scoped>
  #error
    color: red
  a
    &:hover
      text-decoration: underline
      cursor: pointer
</style>
