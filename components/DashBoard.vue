<template>
  <div>
    <p>{{ json }}</p>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
