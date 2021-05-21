<template>
  <b-menu>
    <img src="@/assets/icon.png" width="256" height="256">
    <b-menu-list label="Menu">
      <b-menu-item icon="view-dashboard-variant-outline" label="DashBoard" @click="setActivePane(0)" :active="activepane === 0" />
      <b-menu-item icon="book-open-blank-variant" label="Sell" @click="setActivePane(1)" :active="activepane === 1" />
    </b-menu-list>
    <b-menu-list label="Tool">
      <b-menu-item icon="file-refresh-outline" label="Convert" @click="setActivePane(2)" :active="activepane === 2" />
    </b-menu-list>
  </b-menu>
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
      console.log(_input)
      this.activepane = _input
      this.$emit('changePane', this.activepane)
    }
  }
}
</script>
