<template>
  <div>
    <b-field label="ISBNTable">
      <b-input v-model="isbntabledata" type="textarea" />
    </b-field>
    <b-button @click="convert()">
      保存
    </b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isbntabledata: ''
    }
  },
  methods: {
    convert () {
      let data = {}
      data['isbn'] = {}

      for (let i of this.isbntabledata.split('\n')) {
        if (i !== '') {
          data['isbn'][String(i)] = {}
          data['isbn'][String(i)].issold = false
          data['isbn'][String(i)].soldtime = null
        }
      }

      let jsondata = JSON.stringify(data)

      const blob = new Blob([jsondata], { type: 'text/plain' })
      let link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'isbn.json'
      link.click()
    }
  }
}
</script>

<style scoped>
</style>
