<template>
  <div class="fullheight">
    <b-field message="ISBNを入力してください">
      <b-input v-model="inputisbn" placeholder="ISBN" />
      <b-button type="is-primary" label="追加" @click="addISBN" />
    </b-field>
    <b-table :data="sellisbn" :columns="columns" :checked-rows.sync="checkedRows" checkable>
      <template #empty>
        <div class="has-text-centered">
          まだ入力されていません
        </div>
      </template>
      <template #bottom-left>
      </template>
    </b-table>
    <b-field message="クーポンの数を入力してください">
      <b-numberinput
        v-model="couponnum"
        min="0"
        placeholder="0"
        controls-position="compact"
      />
    </b-field>
    <b-button type="is-info" label="すべて売却" @click="sell" />
    <b-button type="is-danger" label="選択されたものを取り消し" @click="removeCheckedISBN" />
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
  data () {
    return {
      inputisbn: null, // ISBN入力欄
      couponnum: 0, // クーポンの数
      sellisbn: [], // 購入リスト
      checkboxPosition: 'left',
      checkedRows: [],
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
      const isInputISBNConflict = () => {
        // 入力したisbnが今までの入力とダブっているかどうか
        for (let i = 0; i < this.sellisbn.length; i++) {
          if (this.sellisbn[i].isbn === this.inputisbn) {
            return true
          }
        }
        return false
      }
      const isExistInJson = () => {
        // 元帳にデータが存在するか
        return this.inputisbn in this.json.isbn
      }
      const isSold = () => {
        // もうその本は売れているか
        return this.json.isbn[this.inputisbn].issold
      }

      if (this.json.isbn === null) {
        // E-000 データがインポートされていない場合
        this.$emit('addlog', 'E-000', null)
        this.$buefy.toast.open({
          message: 'データがインポートされていません',
          type: 'is-danger'
        })
      } else if (isInputISBNConflict()) {
        // E-001 同じ入力があった場合
        this.$emit('addlog', 'E-001', this.inputisbn)
        this.$buefy.toast.open({
          message: this.inputisbn + ' は既に追加されています',
          type: 'is-danger'
        })
      } else if (!isExistInJson()) {
        // E-002 元帳にデータが存在しなかった場合
        this.$emit('addlog', 'E-002', this.inputisbn)
        this.$buefy.toast.open({
          message: this.inputisbn + ' なんて本は存在しません',
          type: 'is-danger'
        })
      } else if (isSold()) {
        // E-003 元帳曰く売れている場合
        this.$emit('addlog', 'E-003', this.inputisbn)
        this.$buefy.toast.open({
          message: this.inputisbn + ' は既に売れています',
          type: 'is-danger'
        })
      } else {
        // 売れる！！！！！！！！！！！！！！！！！！！！！！！！
        this.sellisbn.push({ id: this.sellisbn.length, isbn: this.inputisbn })
        this.inputisbn = null
      }
    },
    removeCheckedISBN () {
      this.checkedRows.forEach((row) => {
        this.sellisbn.splice(this.sellisbn.findIndex(e => e.id === row.id), 1)
      })
    },
    sell () {
      if (this.sellisbn.length === 0) {
        // E-004 ISBNが一個も入力されていなかった場合
        this.$emit('addlog', 'E-004', this.sellisbn)
        this.$buefy.toast.open({
          message: 'ISBNが入力されていません',
          type: 'is-danger'
        })
      } else if (this.sellisbn.length < this.couponnum) {
        // E-005 & E-006
        this.$emit('addlog', 'E-005', this.couponnum)
        this.$emit('addlog', 'E-006', this.sellisbn)
        this.$buefy.toast.open({
          message:
            'クーポンは ' +
            this.couponnum +
            '枚で 本の数 ' +
            this.sellisbn.length +
            ' を超えています',
          type: 'is-danger'
        })
      } else {
        // 売れる！！！！！！！！！！！！！！！！！！！！！
        this.$emit('sell', this.sellisbn)
        this.$emit('addCoupon', this.couponnum, this.sellisbn)

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
.fullheight {
  min-height: 95vh;
}
</style>
