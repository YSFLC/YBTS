<template>
  <div class="columns">
    <div class="column is-narrow">
      <SideBar @changePane="getPane" />
    </div>
    <div class="column m-2">
      <transition mode="out-in">
        <DashBoard v-if="activepane === 0" />
        <Sell v-if="activepane === 1" :json="json" />
        <About v-if="activepane === 2" />
        <Convert v-if="activepane === 3" />
        <Load v-if="activepane === 4" @jsondata="getJsonData" />
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activepane: 0,
      json: null
    }
  },
  methods: {
    getPane (_input) {
      this.activepane = _input
    },
    getJsonData (json) {
      this.json = json
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transition: opacity .1s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
