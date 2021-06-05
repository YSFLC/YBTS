<template>
  <div>
    <p>This is made by</p>
    <h1>Y.Narita</h1>
    <h2>K.katayama</h2>
    <h3>Y.Murakami</h3>
    <h4>I.Siotuki</h4>
    <h5>S.Tukamoto</h5>
    <h6>K.Sibuya</h6>
    <h7>S.Sasaki</h7>
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
  color:black;
  font-size: 8mm;
};
h1{
  font-size: 10cm;
}
</style>
