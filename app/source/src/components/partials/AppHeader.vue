<template lang="html">
  <b-navbar class="fixed-top" toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
    </div>
    <b-collapse is-nav id="nav_collapse">
      <h1 class="navbar-brand brand-logo"><a href="/" style="color: white">Savior</a></h1>
\
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="signout()"></i>Logout</b-nav-item>

        <b-nav-item href="#"><img class="img-xs rounded-circle" :src="photoURL" alt="profile image"></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="js">
export default {
  name: 'app-header',
  props: {
    username: String, photoURL: String
  },
  data: function () { return {firebase: require('firebase')} },
  methods: {
    signout () {
      const self = this
      self.firebase.auth().signOut().then(() => {
        self.$router.push('/login')
      })
    }
  }
}
</script>

<style scoped lang="scss">
.app-header {
}
</style>
