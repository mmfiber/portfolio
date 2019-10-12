<template lang="pug">
  .header
    v-toolbar
      v-toolbar-items.hidden-lg-and-up
       v-btn(@click.stop="drawer = !drawer" text)
        v-icon mdi-menu
      v-toolbar-items.hidden-md-and-down
        v-row.align-center
          template(v-for="ctn in contents")
            router-link.fill-height(:to="getLink(ctn)")
              v-btn.px-10.display-1.capitalize(text
                :style="{color: selectedCtn==ctn ? selectedColor : ''}") {{ctn}}
      v-spacer
      v-toolbar-items
        LanguageBtn(:selectedColor="selectedColor")
        
    .wrapper
      v-navigation-drawer(v-model="drawer" stateless).hidden-lg-and-up
        v-list-item-group(v-model="selectedCtnId" color="teal")
          template(v-for="ctn in contents")
            v-list-item
              router-link.capitalize(:to="getLink(ctn)"
                :style="{color: selectedCtn==ctn ? selectedColor : 'rgba(0, 0, 0, .87)'}")
                v-container.fill-height.headline(fluid) {{ctn}}
            
</template>

<style lang="stylus" scoped>
  .v-toolbar
    position relative
  
  .wrapper
    position absolute

    .v-list-item
      padding 0

      a
        width 100%

  a
    text-decoration none

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
    selectedCtnId(){
      return this.contents.indexOf(this.selectedCtn)
    }
  },
  methods:{
    getLink(ctn){
      return ctn=='home' ? '/' : '/' + ctn
    }
  }
};
</script>