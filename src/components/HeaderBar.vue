<template lang="pug">
  .header
    v-toolbar(height="100%")
      v-container
        v-row.titles
          span.px-5.mx-5.display-1(v-for="val in contents") {{val}}
        v-row.lang.justify-center
          template(v-for="(lang, index) in langs")
            span(v-if="index!=0").mx-2.display-1 /
            v-btn(:style="{color: selectedLang==lang ? '#26A69A' : ''}"
              @click="changeLang(lang)" text).display-1 {{lang}}
</template>

<style lang="stylus" scoped>
  .v-container:after
    display block
    content ""
    clear both
    
  .titles
    float left

  .lang
    float right
</style>
  
<script>
export default {
  data(){
    return {
      contents:[
        "Home",
        "About",
        "Languages",
        "Works",
        "Contact"
      ],
      langs: this.$i18n.availableLocales,
    }
  },
  computed:{
    selectedLang(){
      return this.$i18n.locale
    }
  },
  methods:{
    changeLang(lang){
      this.$root.$i18n.locale = lang
    }
  }
};
</script>