<template>
  <div class="fullheight">
    <div class="hero-body box">
      <p class="title is-large">
        Sell
      </p>
      <p class="subtitle">
        商品の売却
      </p>
    </div>
    <div class="flex">
      <div class="child">
        <b-field message="商品番号をを入力してください">
          <b-input v-model="inputisbn" placeholder="商品番号" />
          <b-button type="is-primary" label="追加" @click="addISBN" />
        </b-field>
      </div>
      <div class="child">
        <b-field message="クーポンの数を入力してください">
          <b-numberinput
            v-model="couponnum"
            min="0"
            placeholder="0"
            controls-position="compact"
          />
        </b-field>
      </div>
    </div>
    <div class="flex">
      <b-button type="is-info" label="すべて売却" @click="sell" />
      <b-button type="is-danger" outlined label="選択要素をリストから取り消し" @click="removeCheckedISBN" />
    </div>
    <b-table :data="sellisbn" :columns="columns" :checked-rows.sync="checkedRows" checkable>
      <template #empty>
        <div class="has-text-centered">
          まだ入力されていません
        </div>
      </template>
    </b-table>
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
          field: 'isbn',
          label: '商品番号'
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
          message: '商品 ' + this.inputisbn + ' は存在しません',
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
          message: '商品番号が入力されていません',
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
            '枚で 商品数 ' +
            this.sellisbn.length +
            ' を超えています',
          type: 'is-danger'
        })
      } else {
        // 売れる！！！！！！！！！！！！！！！！！！！！！
        this.$emit('sell', this.sellisbn)
        this.$emit('addCoupon', this.couponnum, this.sellisbn)

        this.$buefy.toast.open({
          message: this.sellisbn.length + ' 個の商品を売却しました'
        })

        this.sellisbn.splice(0)
      }
    }
  }
}
</script>

<style scoped>
.flex {
  margin-bottom: 10px;
}
.child {
  display: inline-block;
}
.fullheight {
  min-height: 95vh;
}
</style>
