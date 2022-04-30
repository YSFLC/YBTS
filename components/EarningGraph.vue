<template>
  <apexchart
    type="area"
    height="320"
    :options="options"
    :series="series"
  />
</template>
<script>
import VueApexCharts from 'vue-apexcharts'
export default {
  components: {
    apexchart: VueApexCharts
  },
  props: {
    json: {
      type: undefined,
      required: true
    }
  },
  data () {
    return {
      series: undefined,
      options: {
        options: {
          zoom: { enabled: true }
        },
        tooltip: {
          x: { format: 'yyyy/mm/dd HH:mm:ss' }
        },
        xaxis: {
          type: 'datetime',
          labels: { datetimeUTC: false }
        },
        yaxis: {
          type: 'numeric',
          labels: { formatter: val => val.toFixed(0) },
          title: { text: '売却冊数' }
        },
        fill: {
          opacity: 0.5
        }
      }
    }
  },
  created () {
    const res = {}
    for (const i in this.json.isbn) {
      if (this.json.isbn[i].issold) {
        if (this.json.isbn[i].soldtime in res) {
          res[this.json.isbn[i].soldtime]++
        } else {
          res[this.json.isbn[i].soldtime] = 1
        }
      }
    }

    const datalist = []
    for (const i in res) {
      datalist.push([i * 1000, res[i]])
    }

    this.series = [{ data: datalist }]
  }
}
</script>
