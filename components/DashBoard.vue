<template>
  <div>
    <EarningGraph :json="json" />
    <b-table :data="isbntable" focusable paginated per-page="10">
      <b-table-column v-slot="props" field="isbn" label="ISBN" sortable>
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
