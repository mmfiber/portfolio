<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center
        v-col.col-12.col-xs-12.col-sm-6.col-md-4.pa-10(v-for="(work, id) in works" :key="id")
          WorkCard.fill-height(:work="work")
</template>

<style lang="stylus" scoped>

</style>

<script>
import BaseLayout from '../components/BaseLayout'
import WorkCard from '../components/WorkCard'
import works from '../resource/work.json'

export default {
  components: {
    BaseLayout,
    WorkCard,
  },
  data(){
    return {
      works: works["works"]
    }
  }
};
</script>