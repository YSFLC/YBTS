<template>
  <div>
    <b-field label="ISBNを改行区切りで入力してください">
      <b-input v-model="isbntabledata" type="textarea" />
    </b-field>
    <b-button :disabled="isbntabledata.length === 0" @click="convert()">
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
      const data = {}
      data.version = '2.0.0'
      data.isbn = {}
      data.union = {}
      data.log = {}

      for (const i of this.isbntabledata.split('\n')) {
        if (i !== '') {
          if (i in data.isbn) {
            this.$buefy.notification.open({
              message: 'ISBN ' + i + ' が重複していました',
              position: 'is-bottom-right',
              type: 'is-danger',
              hasIcon: true
            })
          } else {
            data.isbn[String(i)] = {}
            data.isbn[String(i)].issold = false
            data.isbn[String(i)].soldtime = null
          }
        }
      }

      const jsondata = JSON.stringify(data)

      const blob = new Blob([jsondata], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'isbn.json'
      link.click()
    }
  }
}
</script>

<style scoped>
</style>
