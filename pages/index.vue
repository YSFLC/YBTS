<template>
  <div class="container">
    <div>
      <img src="@/assets/icon.png" width="512" height="512" class="Logo">
      <h1 class="title">
        YSFLC
      </h1>
      <h5 class="subtitle">
        v1.0.0
      </h5>
      <div class="links">
        <NuxtLink
          to="/BookManager"
          class="button--green"
        >
          はじめる
        </NuxtLink>
        <a
          href="https://github.com/NULLCT/YSFLC"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
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
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
