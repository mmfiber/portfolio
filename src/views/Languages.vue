<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center
        v-col.col-12.col-xs-12.col-sm-6.col-md-4.pa-10(v-for="(lang, id) in langs" :key="id")
          LanguageCard.fill-height(:lang="lang")
      v-row.justify-center.mt-10
        v-icon(v-for="(i, id) in langIcons" :key="id" size="80") {{i}}
</template>

<style lang="stylus" scoped>

</style>

<script>
import BaseLayout from '../components/BaseLayout'
import LanguageCard from '../components/LanguageCard'
import langInfo from '../resource/lang.json'

export default {
  components: {
    BaseLayout,
    LanguageCard,
  },
  data(){
    return {
      langs: langInfo["langs"],
      langIcons:langInfo["lang-icons"]
    }
  }
};
</script>