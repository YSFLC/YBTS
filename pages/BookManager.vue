<template>
  <div class="columns">
    <div class="column is-narrow">
      <SideBar @changePane="getPane" />
    </div>

    <div class="column m-2">
      <DashBoard v-if="activepane === 0" />
      <Sell v-if="activepane === 1" />
      <Convert v-if="activepane === 2" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activepane: 0
    }
  },
  methods: {
    getPane (_input) {
      this.activepane = _input
    }
  }
}
</script>

<style scoped>
</style>
