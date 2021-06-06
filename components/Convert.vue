<template>
  <div>
    <b-field label="ISBNTable">
      <b-input v-model="isbntabledata" type="textarea" />
    </b-field>
    <b-button @click="convert">
      変換
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
      console.log(this.isbntabledata) // eslint-disable-line no-console
    }
  }
}
</script>

<style scoped>
</style>
