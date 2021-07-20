<template>
  <div>
    <b-field message="ISBNを入力してください">
      <b-input v-model="inputisbn" placeholder="ISBN" />
      <b-button type="is-primary" label="追加" @click="addISBN" />
    </b-field>

    <b-button type="is-info" label="すべて売却" @click="sell" />
    <b-button type="is-danger" label="すべて削除" @click="removeAllISBN" />

    <b-table :data="sellisbn" :columns="columns" />
  </div>
</template>

<script>
/*
  これを見てるってことは:

  1. あなたはつよつよプログラマーで、この汚いコードをリファクタリングしに来た
  2. あなたはつよつよプログラマーで、このYSFLCが動かないと言われソースを見に来た
  3. あなたはつよつよプログラマーで、新しくアプリを作り変えようとソースを見に来た
*/
export default {
  props: {
    json: {}
  },
  data () {
    return {
      inputisbn: null,
      sellisbn: [],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40'
        },
        {
          field: 'isbn',
          label: 'ISBN'
        }
      ]
    }
  },
  methods: {
    addISBN () {
      let isInputISBNConflict = () => { // 入力したisbnが今までの入力とダブっているかどうか
        for (let i = 0; i < this.sellisbn.length; i++) {
          if (this.sellisbn[i].isbn === this.inputisbn) {
            return true
          }
        }
        return false
      }
      let isExistInJson = () => { // 元帳にデータが存在するか
        return String(this.inputisbn) in this.json
      }

      if (isInputISBNConflict()) { // 同じ入力があった場合
        this.$buefy.toast.open({
          message: this.inputisbn + ' は既に追加されています',
          type: 'is-danger'
        })
      } else if (isExistInJson()) { // 入力にダブりが無く、元帳にもデータがあった場合(成功)
        this.sellisbn.push({})
        this.sellisbn[this.sellisbn.length - 1].id = this.sellisbn.length
        this.sellisbn[this.sellisbn.length - 1].isbn = this.inputisbn

        this.inputisbn = null
      } else { // 同じ入力はなかったが、元帳にデータが見つからなかった場合(トラウマ(去年あったバグ(こわい)))
        this.$buefy.toast.open({
          message: this.inputisbn + ' なんて本は存在しません',
          type: 'is-danger'
        })
      }
    },
    removeAllISBN () {
      this.sellisbn.splice(0)
    },
    sell () {
      console.log(this.json[String(this.sellisbn[0].isbn)])
    }
  }
}
</script>

<style scoped>
</style>
