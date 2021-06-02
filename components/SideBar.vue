<template>
  <div class="box container">
    <b-menu>
      <img src="@/assets/logo.svg" width="256" height="256">
      <b-menu-list label="Menu">
        <b-menu-item icon="view-dashboard-variant-outline" label="DashBoard" @click="setActivePane(0)" :active="activepane === 0" />
        <b-menu-item icon="book-open-blank-variant" label="Sell" @click="setActivePane(1)" :active="activepane === 1" />
        <b-menu-item icon="information-outline" label="About" @click="setActivePane(3)" :active="activepane === 3" />
      </b-menu-list>
      <b-menu-list label="Tool">
        <b-menu-item icon="file-refresh-outline" label="Convert" @click="setActivePane(2)" :active="activepane === 2" />
      </b-menu-list>
    </b-menu>
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
    setActivePane (_input) {
      this.activepane = _input
      this.$emit('changePane', this.activepane)
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
