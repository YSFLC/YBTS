<template>
  <div class="columns">
    <div class="column is-narrow">
      <SideBar @changePane="getPane" />
    </div>
    <div class="column m-2">
      <transition mode="out-in">
        <DashBoard v-if="activepane === 0" :json="json" />
        <Sell v-if="activepane === 1" :json="json" @sell="sell" />
        <Convert v-if="activepane === 2" />
        <Load v-if="activepane === 3" @jsondata="getJsonData" />
        <Save v-if="activepane === 4" :json="json" />
        <Usage v-if="activepane === 5" />
        <About v-if="activepane === 6" />
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
    getPane (input) {
      this.activepane = input
    },
    getJsonData (json) {
      this.json = json
    },
    sell (sellisbn) {
      let date = new Date()
      for (let i = 0; i < sellisbn.length; i++) {
        this.json[String(sellisbn[i].isbn)].issold = true
        this.json[String(sellisbn[i].isbn)].soldtime = Math.floor(date.getTime() / 1000)
      }
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
