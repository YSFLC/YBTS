<template>
  <div>
    <div class="hero-body box">
      <p class="title is-large">
        Save
      </p>
      <p class="subtitle">
        データの保存/変換
      </p>
    </div>
    <div class="box">
      バージョン: {{this.json.version}}<br>
      商品数: {{Object.keys(this.json.isbn).length}}<br>
      エラーログ数: {{Object.keys(this.json.log).length}}<br>
      <b-tooltip label="JSON形式で保存します アプリで読み込みが可能です" position="is-bottom">
        <b-button @click="save">
          JSON形式で保存
        </b-button>
      </b-tooltip>
      <b-tooltip label="CSV形式で保存します Excelなどで処理できますが アプリで読み込みはできません" position="is-bottom">
        <b-button @click="exportation">
          Export CSVfile
        </b-button>
      </b-tooltip>
    </div>
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
