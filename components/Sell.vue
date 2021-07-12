<template>
  <div>
    {{ jsondata }}
    <b-field message="ISBNを入力してください">
      <b-input placeholder="ISBN..." type="search" icon="book-open" />
      <p class="control">
        <b-button type="is-primary" label="追加" />
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  props: {
    jsondata: {
      type: String,
      default: null
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
