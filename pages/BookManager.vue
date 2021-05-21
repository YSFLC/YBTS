<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNum: 0
    }
  },
  methods: {
    changeActivePage (_input) {
      this.activeNum = _input
    }
  }
}
</script>

<style scoped>
</style>
