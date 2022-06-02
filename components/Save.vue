<template>
  <div>
    <b-button @click="save">
      Save json
    </b-button>
    <b-button @click="exportation">
      Export CSVfile
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: Object,
      required: true
    }
  },
  methods: {
    save () {
      const jsondata = JSON.stringify(this.json)

      const blob = new Blob([jsondata], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'isbn.json'
      link.click()
    },
    exportation () {
      let data = ''
      for (const item in this.json.isbn) {
        data += item.toString() + ',' + this.json.isbn[item].issold + ',' + this.json.isbn[item].soldtime + '\n'
      }

      const blob = new Blob([data], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'isbn.csv'
      link.click()
    }
  }
}
</script>

<style>
</style>
