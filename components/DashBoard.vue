<template>
  <div>
    <p>{{ json }}</p>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: undefined,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
