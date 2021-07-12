<template>
  <div>
    <b-field message="ISBNを入力してください">
      <b-input placeholder="ISBN" type="search" />
      <p class="control">
        <b-button type="is-primary" label="追加" />
      </p>
    </b-field>

    <b-table :data="sellisbn" :columns="columns" />
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      sellisbn: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40'
        },
        {
          field: 'isbn',
          label: 'label'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
