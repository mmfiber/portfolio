<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center
        v-col.col-12.col-xs-12.col-sm-6.col-md-4.px-10(v-for="lang in langs")
          LanguageCard(:lang="lang")
      v-row.justify-center.mt-10
        v-icon(v-for="i in langIcons" size="80") {{i}}
</template>

<style lang="stylus" scoped>

</style>

<script>
import BaseLayout from '../components/BaseLayout'
import LanguageCard from '../components/LanguageCard'

export default {
  components: {
    BaseLayout,
    LanguageCard,
  },
  data(){
    return {
      langs:[
        "Python",
        "HTML",
        "CSS & SCSS & Stylus",
        "JavaScript(ES6)",
        "php",
        "C",
        "Java",
        "Japanese",
        "English"
      ],
      langIcons:[
        "mdi-language-python",
        "mdi-language-html5",
        "mdi-language-css3",
        "mdi-sass",
        "mdi-language-javascript",
        "mdi-vuejs",
        "mdi-vuetify",
        "mdi-language-php",
        "mdi-wordpress",
        "mdi-language-c",
        "mdi-language-java",
        "mdi-github-circle",
      ]
    }
  }
};
</script>