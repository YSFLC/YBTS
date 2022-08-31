<template>
  <div>
    <div class="hero-body box">
      <p class="title is-large">
        Convert
      </p>
      <p class="subtitle">
        商品番号をJSONファイルに変換
      </p>
    </div>
    <b-field label="商品番号を改行区切りで入力してください">
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
              message: '番号 ' + i + ' が重複していました',
              position: 'is-bottom-right',
              type: 'is-danger',
              duration: 9999999999,
              progressBar: true,
              hasIcon: true
            })
          } else {
            data.isbn[i] = { issold: false, soldtime: null }
          }
        }
      }

      const jsondata = JSON.stringify(data)

      const blob = new Blob([jsondata], { type: 'application/json' })
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
