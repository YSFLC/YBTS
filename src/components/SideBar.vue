<template>
  <div class="sidebar">
    <aside class="is-4 box menu">
      <!--YSFLC logo-->
      <img src="../assets/logo.svg" width="220" height="220">

      <p class="menu-label">一般</p>
      <ul class="menu-list">
        <li><a><i class="fas fa-home"></i> ダッシュボード</a></li>
        <li><a><i class="fas fa-book"></i> 売買管理</a></li>
      </ul>

      <p class="menu-label">管理</p>
      <ul class="menu-list">
        <li><a><i class="fas fa-server"></i> データ管理</a></li>
      </ul>

      <p class="menu-label">その他</p>
      <ul class="menu-list">
        <li><a><i class="fas fa-user-injured"></i> これつくったひと</a></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
aside {
  position: fixed; /* Stay in place */
  height: 100%;

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
