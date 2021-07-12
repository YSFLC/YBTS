<template>
  <div>
    <b-field message="ISBNを入力してください">
      <b-input v-model="inputisbn" placeholder="ISBN" />
      <b-button type="is-primary" label="追加" @click="addISBN" />
    </b-field>

    <b-button type="is-info" label="すべて売却" @click="sell" />
    <b-button type="is-danger" label="すべて削除" @click="removeAllISBN" />

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
      inputisbn: null,
      sellisbn: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40'
        },
        {
          field: 'isbn',
          label: 'ISBN'
        }
      ]
    }
  },
  methods: {
    addISBN () {
      this.sellisbn.push({})
      this.sellisbn[this.sellisbn.length - 1].id = this.sellisbn.length
      this.sellisbn[this.sellisbn.length - 1].isbn = this.inputisbn

      this.inputisbn = null
    },
    removeAllISBN () {
      this.sellisbn.splice(0)
    },
    sell () {
      this.$buefy.toast.open({
        message: 'あいうえお',
        type: 'is-danger'
      })
    }
  }
}
</script>

<style scoped>
</style>
