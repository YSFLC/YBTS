<template>
  <div id="app">
    <div class="columns">
      <div class="column section is-narrow ">
        <img src="@/assets/logo.svg">

        <p class="menu-label">General</p>
        <ul class="menu-list">
          <li>
            <a :class="{ 'is-active': activeNum == 0 }" @click="changeActiveLink(0)">
              <span class="icon"><i class="fa fa-home"></i></span> DashBoard
            </a>
          </li>
          <li>
            <a :class="{ 'is-active': activeNum == 1 }" @click="changeActiveLink(1)">
              <span class="icon"><i class="fa fa-book"></i></span> Sell
            </a>
          </li>
        </ul>

        <p class="menu-label">Advanced</p>
        <ul class="menu-list">
          <li>
            <a :class="{ 'is-active': activeNum == 2 }" @click="changeActiveLink(2)">
              <span class="icon"><i class="fa fa-server"></i></span> DataBase
            </a>
          </li>
        </ul>

        <p class="menu-label">Other</p>
        <ul class="menu-list">
          <li>
            <a :class="{ 'is-active': activeNum == 3 }" @click="changeActiveLink(3)">
              <span class="icon"><i class="fa fa-info"></i></span> About
            </a>
          </li>
        </ul>

        <a href="#" class="button is-danger">
          debug:{{ activeNum }}
        </a>
      </div>

      <div class="column">
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
