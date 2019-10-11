<template lang="pug">
  .header
    v-toolbar(height="100%")
      v-toolbar-items
        v-app-bar-nav-icon(v-if="mobile" @click.stop="drawer = !drawer")
        v-row(v-else).align-center.titles
          template(v-for="ctn in contents")
            router-link.fill-height(:to="getLink(ctn)")
              v-btn.px-10.display-1.capitalize(text
                :style="{color: selectedCtn==ctn ? selectedColor : ''}") {{ctn}}
        LanguageBtn.justify-end.lang(:selectedColor="selectedColor")
</template>

<style lang="stylus" scoped>
  .v-toolbar__items
    width 100%

    a
      text-decoration none

    .titles
      float left

    .lang
      float right
    
    .v-btn
      height 100% !important
  
  .capitalize
      text-transform capitalize
  </style>
    
<script>
import LanguageBtn from '../components/LanguageBtn'

export default {
  components:{
    LanguageBtn,
  },
  data(){
    return {
      contents:[
        "home",
        "about",
        "languages",
        "works",
      ],
      selectedColor: '#26A69A',
      drawer: null,
    }
  },
  computed:{
    selectedCtn(){
      return this.$route.name
    },
    mobile(){
      return parseInt(window.innerWidth) < 960
    },
  },
  methods:{
    getLink(ctn){
      return ctn=='home' ? '/' : '/' + ctn
    }
  }
};
</script>