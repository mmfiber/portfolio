<template lang="pug">
  .baselayout
    HeaderBar#header.mb-5
    slot
  
</template>

<style lang="stylus" scoped>
  #header
    position sticky
    top 0
</style>

<script>
import HeaderBar from './HeaderBar';

export default {
  components: {
    HeaderBar,
  },
};
</script>