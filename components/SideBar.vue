<template>
  <div class="box container">
    <b-menu>
      <img src="@/assets/logo.png" width="256" height="256">
      <b-menu-list label="General">
        <b-menu-item
          icon="view-dashboard-variant-outline"
          label="DashBoard"
          :disabled="json == undefined"
          :active="activepane === 0"
          @click="setActivePane(0)"
        />
        <b-menu-item
          icon="book-open-blank-variant"
          label="Sell"
          :disabled="json == undefined"
          :active="activepane === 1"
          @click="setActivePane(1)"
        />
      </b-menu-list>
      <b-menu-list label="Tool">
        <b-menu-item
          icon="file-refresh-outline"
          label="Convert"
          :active="activepane === 2"
          @click="setActivePane(2)"
        />
        <b-menu-item
          icon="arrow-up-bold-circle-outline"
          label="Load"
          :active="activepane === 3"
          @click="setActivePane(3)"
        />
        <b-menu-item
          icon="download"
          label="Save"
          :disabled="json == undefined"
          :active="activepane === 4"
          @click="setActivePane(4)"
        />
      </b-menu-list>
      <b-menu-list label="Others">
        <b-menu-item
          icon="help-circle-outline"
          label="Usage"
          :active="activepane === 5"
          @click="setActivePane(5)"
        />
        <b-menu-item
          icon="information-outline"
          label="About"
          :active="activepane === 6"
          @click="setActivePane(6)"
        />
      </b-menu-list>
    </b-menu>
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
      activepane: 5
    }
  },
  methods: {
    setActivePane (_input) {
      this.activepane = _input
      this.$emit('changePane', this.activepane)
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  top:0px;
}
</style>
