<template lang="pug">
  v-container
    v-row.justify-center.align-center.fill-height
      .wrapper
        span.display-3.mb-6 Welcome to Masahiro Mikami's Portfolio Site
        br
        span.display-1 Click to start
</template>

<style lang="stylus" scoped>
  .container
    height 100%

  .wrapper>span
    display inline-block
    width 100%
    text-align center
</style>

<script>
export default {
  computed:{
    headerHeight(){
      return document.getElementById('header').clientHeight + 20 // mb-5:20px
    }
  }
};
</script>
