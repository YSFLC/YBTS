<template>
  <div>
    <b-field message="ISBNを入力してください">
      <b-input v-model="inputisbn" placeholder="ISBN" />
      <b-button type="is-primary" label="追加" @click="addISBN" />
      <b-button type="is-info" label="すべて売却" @click="sell" />
      <b-button type="is-danger" label="すべて削除" @click="removeAllISBN" />
    </b-field>

    <b-table :data="sellisbn" :columns="columns" />
  </div>
</template>

<script>
/*
  これを見てるってことは:

  1. あなたはつよつよプログラマーで、この汚いコードをリファクタリングしに来た
  2. あなたはつよつよプログラマーで、このYSFLCが動かないと言われソースを見に来た
  3. あなたはつよつよプログラマーで、新しくアプリを作り変えようとソースを見に来た

  ドキュメント化はどっかにされてると思います。
  コーディング頑張れ！！
*/
export default {
  props: {
    json: {
      type: Object,
      required: true
    }
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
        return String(this.inputisbn) in this.json['isbn']
      }
      let isSold = () => { // もうその本は売れているか
        return this.json['isbn'][String(this.inputisbn)].issold
      }

      if (this.json['isbn'] === null) { // データがインポートされていない場合
        this.$buefy.toast.open({
          message: 'データがインポートされていません',
          type: 'is-danger'
        })
      } else if (isInputISBNConflict()) { // 同じ入力があった場合
        this.$buefy.toast.open({
          message: this.inputisbn + ' は既に追加されています',
          type: 'is-danger'
        })
      } else if (!isExistInJson()) { // 元帳にデータが存在しなかった場合
        this.$buefy.toast.open({
          message: this.inputisbn + ' なんて本は存在しません',
          type: 'is-danger'
        })
      } else if (isSold()) { // 元帳曰く売れている場合
        this.$buefy.toast.open({
          message: this.inputisbn + ' は既に売れています',
          type: 'is-danger'
        })
      } else { // 売れる！！！！！！！！！！！！！！！！！！！！！！！！
        this.sellisbn.push({})
        this.sellisbn[this.sellisbn.length - 1].id = this.sellisbn.length
        this.sellisbn[this.sellisbn.length - 1].isbn = this.inputisbn

        this.inputisbn = null
      }
    },
    removeAllISBN () {
      this.sellisbn.splice(0)
    },
    sell () {
      if (this.sellisbn.length === 0) { // ISBNが一個も入力されていなかった場合
        this.$buefy.toast.open({
          message: 'ISBNが入力されていません',
          type: 'is-danger'
        })
      } else { // 売れる！！！！！！！！！！！！！！！！！！！！！
        this.$emit('sell', this.sellisbn)

        this.$buefy.toast.open({
          message: this.sellisbn.length + ' 冊の本を売却しました'
        })

        this.removeAllISBN()
      }
    }
  }
}
</script>

<style scoped>
</style>
