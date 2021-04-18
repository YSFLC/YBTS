<template>
  <div id="app">
    <SideBar/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar';
import 'bulma/css/bulma.css';

export default {
  name: 'App',
  components: {
    SideBar
  }
};
</script>

<style>
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

*::-webkit-scrollbar {
  display:none;
}
</style>