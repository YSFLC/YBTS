<template>
  <div>
    <b-button @click="save">
      Save json
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
      let jsondata = JSON.stringify(this.json)

      const blob = new Blob([jsondata], { type: 'text/plain' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'isbn.json'
      link.click()
    }
  }
}
</script>

<style>
</style>
