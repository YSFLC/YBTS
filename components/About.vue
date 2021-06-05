<template>
  <div>
    <p>aaaaa</p>
    <h1>aaa</h1>
  </div>
</template>

<script>
function nariNari (n) {
  for (let i = 0; i < n; i++) {
    console.log(String(i) + 'nari')
  }
}

nariNari(1000)
</script>

<style scoped>
p {
  color: red;
  font-size: 8cm;
};
</style>
