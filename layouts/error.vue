<template>
  <div>
    <p>aaaa</p>
    <p> {{ error.statusCode }} </p>
    <p> {{ error.message }} </p>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: ['error']
}
</script>
