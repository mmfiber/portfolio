<template lang="pug">
  v-row.align-center
    template(v-for="(lang, index) in langs")
      span(v-if="index!=0").mx-2.display-1 /
      v-btn.headline.capitalize(@click="changeLang(lang)" text
        :style="{color: selectedLang==lang ? selectedColor : ''}") {{lang}}
</template>

<style lang="stylus" scoped>  
  .capitalize
    text-transform capitalize
</style>

<script>
export default {
  props:{
    selectedColor: String,
  },
  data(){
    return{
      langs: this.$i18n.availableLocales,
    }
  },
  computed:{
    selectedLang(){
      return this.$i18n.locale
    },
  },
  methods:{
   changeLang(lang){
      this.$root.$i18n.locale = lang
    },
  }
}
</script>