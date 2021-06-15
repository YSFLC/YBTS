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
      let data = {}

      for (let i of this.isbntabledata.split('\n')) {
        if (i !== '') {
          data[String(i)]['isbn'] = 'a'
        }
      }

      console.log(data)
      let jsondata = JSON.stringify(data)
      console.log(jsondata)
    }
  }
}
</script>

<style scoped>
</style>
