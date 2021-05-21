<template>
  <div class="columns">
    <div class="column is-one-quarter">
      <SideBar @changePane="getPane" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
  },
  methods: {
    getPane (_input) {
      alert(_input)
    }
  }
}
</script>

<style scoped>
</style>
