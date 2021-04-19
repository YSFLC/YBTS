<template>
  <aside class="box">
    <img src="@/assets/logo.svg">

    <p class="menu-label">General</p>
    <ul class="menu-list">
      <li>
        <a :class="{ 'is-active': activeNum == 'Dashboard' }" @click="changeActiveLink('Dashboard')">
          <span class="icon"><i class="fa fa-home"></i></span> Dashboard
        </a>
      </li>
      <li>
        <a :class="{ 'is-active': activeNum == 'Sell' }" @click="changeActiveLink('Sell')">
          <span class="icon"><i class="fa fa-book"></i></span> Sell
        </a>
      </li>
    </ul>

    <p class="menu-label">Advanced</p>
    <ul class="menu-list">
      <li>
        <a :class="{ 'is-active': activeNum == 'Database' }" @click="changeActiveLink('Database')">
          <span class="icon"><i class="fa fa-server"></i></span> Database
        </a>
      </li>
    </ul>

    <p class="menu-label">Other</p>
    <ul class="menu-list">
      <li>
        <a :class="{ 'is-active': activeNum == 'About' }" @click="changeActiveLink('About')">
          <span class="icon"><i class="fa fa-info"></i></span> About
        </a>
      </li>
    </ul>
    <a href="#" class="button is-danger">
      debug:{{ activeNum }}
    </a>
  </aside>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeNum: "Dashboard"
    }
  },
  methods: {
    changeActiveLink (_str) {
      this.activeNum = _str
    }
  }
}
</script>

<style scoped>
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

*::-webkit-scrollbar {
  display:none;
}

aside {
  position: fixed; /* Stay in place */
  height: 100%;
}
</style>