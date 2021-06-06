<template>
  <div class="box container">
    <b-menu>
      <img src="@/assets/logo.svg" width="256" height="256">
      <b-menu-list label="Menu">
        <b-menu-item icon="view-dashboard-variant-outline" label="DashBoard" :active="activepane === 0" @click="setActivePane(0)" />
        <b-menu-item icon="book-open-blank-variant" label="Sell" :active="activepane === 1" @click="setActivePane(1)" />
        <b-menu-item icon="information-outline" label="About" :active="activepane === 2" @click="setActivePane(2)" />
      </b-menu-list>
      <b-menu-list label="Tool">
        <b-menu-item icon="file-refresh-outline" label="Convert" :active="activepane === 3" @click="setActivePane(3)" />
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
