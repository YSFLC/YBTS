<template>
  <div>
    <b-field label="ISBNTable">
      <b-input v-model="isbntabledata" type="textarea" />
    </b-field>
    <b-button @click="convert">変換</b-button>
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
      console.log(this.isbntabledata)
      let jsonisbn = {}

      const splitted = this.isbntabledata.split('\n')

      for (let i = 0; i < splitted.length; i++) {
        jsonisbn['isbndata'] = splitted[i]
      }

      console.log(splitted)
    }
  }
}
</script>

<style scoped>
</style>
