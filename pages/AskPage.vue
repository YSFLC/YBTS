<template>
  <div class="container">
    <div class="title">
      <img src="@/assets/icon.png" width="512" height="512" class="Logo">
      <h1>
        はじめてですか？
      </h1>
    </div>
    <div class="links">
      <a
        href="https://github.com/YSFLC/YBTS/wiki"
        target="_blank"
        rel="noopener noreferrer"
        class="button--grey"
      >
        はじめてのかた
      </a>
      <NuxtLink to="/BookManager" class="button--grey">
        YBTSをはじめる
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
