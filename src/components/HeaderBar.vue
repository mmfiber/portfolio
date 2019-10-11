<template lang="pug">
  .header
    v-toolbar(height="100%")
      v-toolbar-items
        v-row.align-center.titles
          template(v-for="ctn in contents")
            router-link.fill-height(:to="getLink(ctn)")
              v-btn.px-10.display-1.capitalize(text
                :style="{color: selectedCtn==ctn ? selectedColor : ''}") {{ctn}}
        v-row.align-center.justify-end.lang
          template(v-for="(lang, index) in langs")
            span(v-if="index!=0").mx-2.display-1 /
            v-btn.display-1.capitalize(@click="changeLang(lang)" text
              :style="{color: selectedLang==lang ? selectedColor : ''}") {{lang}}
</template>

<style lang="stylus" scoped>
  .v-container:after
    display block
    content ""
    clear both

  .v-toolbar__items
    width 100%

    a
      text-decoration none

  .titles
    float left

  .lang
    float right

  .capitalize
    text-transform capitalize
  
  .v-btn
    height 100% !important
</style>
  
<script>
export default {
  data(){
    return {
      contents:[
        "home",
        "about",
        "languages",
        "works",
      ],
      langs: this.$i18n.availableLocales,
      selectedColor: '#26A69A'
    }
  },
  computed:{
    selectedCtn(){
      return this.$route.name
    },
    selectedLang(){
      return this.$i18n.locale
    },
  },
  methods:{
    changeLang(lang){
      this.$root.$i18n.locale = lang
    },
    getLink(ctn){
      return ctn=='home' ? '/' : '/' + ctn
    }
  }
};
</script>