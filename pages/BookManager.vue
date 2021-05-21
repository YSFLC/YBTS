<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <SideBar @changePane="getPane" />
    </div>

    <div class="column">
      <Convert v-if="activepane === 2"/>
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
