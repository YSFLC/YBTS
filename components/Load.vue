<template>
  <div>
    <b-field class="file is-primary" :class="{ 'has-name': !!file }">
      <b-upload v-model="file" class="file-label" @change="onFileChange">
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload" />
          <span class="file-label">Click to upload</span>
        </span>
        <span v-if="file" class="file-name">
          {{ file.name }}
        </span>
      </b-upload>
    </b-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: null,
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
