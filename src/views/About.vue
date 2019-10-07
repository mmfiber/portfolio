<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center.mb-5
        v-flex.xs8.sm3
          img.icon(src="../assets/icon.svg")
      v-row.justify-center
        v-flex.xs8.sm6 text
</template>

<style lang="stylus" scoped>
  .v-row
    width 100%

  .icon
    width 100%
</style>

<script>
import BaseLayout from '../components/BaseLayout';

export default {
  components: {
    BaseLayout,
  },
};
</script>