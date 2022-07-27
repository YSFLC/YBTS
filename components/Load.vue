<template>
  <section>
    <b-field>
      <b-upload
        v-model="file"
        drag-drop
      >
        <section class="section">
          <div class="content has-text-centered">
            <p>
              <b-icon
                icon="upload"
                size="is-large"
              />
            </p>
            <p v-if="file === undefined">
              データをドラッグ&ドロップ
            </p>
            <p v-else>
              {{ file.name }}
              {{ file.size }}byte
            </p>
          </div>
        </section>
      </b-upload>
    </b-field>

    <b-button type="is-info" label="読み込み" :disabled="file === undefined" @click="read" />
  </section>
</template>

<script>
export default {
  data () {
    return {
      file: undefined
    }
  },
  methods: {
    read () {
      const reader = new FileReader()
      reader.onload = () => {
        const json = JSON.parse(reader.result)

        if (json.version === '2.0.0') {
          this.$buefy.toast.open({
            message: '本 ' + Object.keys(json.isbn).length + ' 冊を正常にインポートしました'
          })
        } else {
          this.$buefy.toast.open({
            message: '非サポートのバージョンですが、本 ' + Object.keys(json.isbn).length + ' 冊をインポートしました',
            type: 'is-danger'
          })
        }
        this.$emit('jsondata', JSON.parse(reader.result))
      }
      reader.readAsText(this.file)
    }
  }
}
</script>

<style scoped>
</style>
