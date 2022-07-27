<template>
  <div class="container">
    <div class="sidebar">
      <SideBar :json="json" @changePane="getPane" />
    </div>
    <div class="main">
      <transition mode="out-in">
        <DashBoard v-if="activepane === 0" :json="json" />
        <Sell v-if="activepane === 1" :json="json" @sell="sell" @addCoupon="addCoupon" @addlog="addlog" />
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
      activepane: 5,
      json: undefined
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
      const date = parseInt(new Date().getTime() / 1000)
      for (let i = 0; i < sellisbn.length; i++) {
        this.json.isbn[sellisbn[i].isbn].issold = true
        this.json.isbn[sellisbn[i].isbn].soldtime = date
      }
    },
    addCoupon (couponnum, sellisbn) {
      const date = parseInt(new Date().getTime() / 1000)
      this.json.union[date] = {}
      this.json.union[date].couponnum = couponnum
      this.json.union[date].sellisbn = []
      for (let i = 0; i < sellisbn.length; i++) {
        this.json.union[date].sellisbn.push(sellisbn[i].isbn)
      }
    },
    addlog (logtype, comment) {
      const date = parseInt(new Date().getTime() / 1000)
      this.json.log[date] = {}
      this.json.log[date].logtype = logtype
      this.json.log[date].comment = comment
    }
  }
}
</script>

<style>
</style>

<style scoped>
.container {
  min-width: 100%;
  min-height: 100%;
  margin: 0px;
  display: flex;
}
.main {
  padding-left: 300px;
  width: 100%;
  margin: 32px;
}
.sidebar {
  width: 300px;
  position: fixed;
}

.v-leave-active {
  transition: opacity 0.1s;
}
.v-enter,
.v-leave-to {
  transition: opacity 0.1s;
  opacity: 0;
}
</style>
