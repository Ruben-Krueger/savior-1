<template lang="html">
  <section class="app-sidebar">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item nav-profile">
          <div class="nav-link">
            <div class="profile-image"> <img :src="photoURL" alt="image"/> <span class="online-status online"></span> </div>
            <div class="profile-name">
              <p class="name">{{ username }}</p>
              <p class="designation"></p>
              <div class="badge badge-teal mx-auto mt-3"></div>
            </div>
          </div>
        </li>
        <li class="nav-item"><router-link class="nav-link" to="/"><img class="menu-icon" src="../../assets/images/menu_icons/01.png" alt="menu icon"><span class="menu-title">Recommendations</span></router-link></li>
        <li class="nav-item"><router-link class="nav-link" to="/widgets/"><img class="menu-icon" src="../../assets/images/menu_icons/02.png" alt="menu icon"><span class="menu-title">Tracking</span></router-link></li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">
export default {
  name: 'app-sidebar',
  props: {
    username: String, photoURL: String
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {

}
</style>
