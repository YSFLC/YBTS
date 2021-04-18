<template>
  <aside class="box menu section column">
    <img src="../assets/logo.svg" width="220" height="220">

    <p class="menu-label is-hidden-touch">General</p>
    <ul class="menu-list">
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)">
          <span class="icon"><i class="fa fa-home"></i></span> Dashboard
        </a>
      </li>
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 1 }" @click="changeActiveLink(1)">
          <span class="icon"><i class="fa fa-book"></i></span> Sell books
        </a>
      </li>
    </ul>

    <p class="menu-label">Advanced</p>
    <ul class="menu-list">
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 2 }" @click="changeActiveLink(2)">
          <span class="icon"><i class="fa fa-server"></i></span> Dashboard
        </a>
      </li>
    </ul>

    <p class="menu-label">Other</p>
    <ul class="menu-list">
      <li>
        <a href="#" :class="{ 'is-active': activeNum == 3 }" @click="changeActiveLink(3)">
          <span class="icon"><i class="fa fa-info"></i></span> About
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      activeNum: 0
    }
  },
  methods: {
    changeActiveLink (n) {
      this.activeNum = n
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
aside {
  position: fixed; /* Stay in place */
  height: 100%;
  width: 256px;
  transition: 1s;
}

main {
  position: fixed;
  height: 100%; /* 100% Full-height */
  width: 80%; /* 0 width - change this with JavaScript */
  top: 0px;
  left: 25%;

  padding: 10px;

  transition: 1s; /* 0.5 second transition effect to slide in the sidenav */
}

footer {
  position: fixed;
  bottom: 0px;
  right: 0px;

  transition: 1s; /* 0.5 second transition effect to slide in the sidenav */
}
</style>
