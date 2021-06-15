<template>
  <div>
    <b-field class="file is-primary" :class="{ 'has-name': !!file }">
      <b-upload v-model="file" class="file-label" @change="loadFromFile()">
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload" />
          <span class="file-label">Click to upload</span>
        </span>
        <span v-if="file" class="file-name">
          {{ file.name }}
        </span>
      </b-upload>
    </b-field>
    <b-button @click="loadFromFile()">
      読み込む
    </b-button>
    {{ val }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      file: null,
      val: ''
    }
  },
  methods: {
    loadFromFile () {
      let fr = new FileReader()

      fr.onload = function () {
        console.log(fr.result)
      }
      fr.readAsDataURL(this.file)
    }
  }
}
</script>

<style scoped>
</style>
