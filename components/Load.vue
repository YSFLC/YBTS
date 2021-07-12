<template>
  <div>
    <label for="data_upload">ファイル(JSON)を選択</label>
    <input id="data_upload" type="file" name="data_upload" @change="onFileChange">
  </div>
</template>

<script>
export default {
  data () {
    return {
      json: null
    }
  },
  methods: {
    onFileChange (e) {
      let file = e.target.files[0]
      if (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.json = JSON.parse(e.target.result)
          this.$emit('jsondata', this.json)
        }
        reader.readAsText(file)
      }
    }
  }
}
</script>

<style scoped>
</style>
