<template>
  <div>
    <div class="hero-body box">
      <p class="title is-large">
        DashBoard
      </p>
      <p class="subtitle">
        売却履歴やエラー確認
      </p>
    </div>
    <EarningGraph :json="json" />
    <b-table :data="isbntable" focusable paginated per-page="10">
      <b-table-column v-slot="props" field="isbn" label="商品番号" sortable>
        {{ props.row.isbn }}
      </b-table-column>
      <b-table-column v-slot="props" field="issold" label="売却" sortable>
        <span v-if="props.row.issold" class="tag is-success">
          売却済
        </span>
        <span v-else class="tag is-danger">
          未売却
        </span>
      </b-table-column>
      <b-table-column v-slot="props" field="soldtime" label="時刻" sortable>
        <span v-if="props.row.issold">
          {{ (new Date(props.row.soldtime*1000)).toLocaleDateString() + " " + (new Date(props.row.soldtime*1000)).toLocaleTimeString() }}
        </span>
        <span v-else class="tag is-danger">
          データなし
        </span>
      </b-table-column>
    </b-table>
    <div>
      <b-collapse :open="false" aria-id="contentIdForA11y1">
        <template #trigger="props">
          <b-button
            label="JSON原文を表示"
            aria-controls="contentIdForA11y1"
            :aria-expanded="props.open" />
        </template>
        <div class="notification">
          <div class="content">
            <pre v-highlightjs><code class="json">{{this.json}}</code></pre>
          </div>
        </div>
      </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    json: {
      type: undefined,
      required: true
    }
  },
  data () {
    return {
      isbntable: Object
    }
  },
  created () {
    this.isbntable = []
    for (const i in this.json.isbn) {
      this.isbntable.push({ isbn: i, issold: this.json.isbn[i].issold, soldtime: this.json.isbn[i].soldtime })
    }
  }
}
</script>

<style scoped>
</style>
