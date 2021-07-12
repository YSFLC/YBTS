<template>
  <div class="columns">
    <div class="column is-narrow">
      <SideBar @changePane="getPane" />
    </div>
    <div class="column m-2">
      <DashBoard v-if="activepane === 0" />
      <Sell v-if="activepane === 1" />
      <About v-if="activepane === 2" />
      <Convert v-if="activepane === 3" />
      <Load v-if="activepane === 4" @jsondata="getJsonData" />
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
</style>
