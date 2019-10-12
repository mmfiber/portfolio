<template lang="pug">
  v-card(elevation=8).mb-10
    v-img(:alt="work.name" :src="require(`../assets/${work.eyecatch}`)") 
    v-card-title.headline.px-5 {{$t(`works.${work.name}.title`)}}
    v-card-text.text.px-5 {{$t(`works.${work.name}.content`)}}
    v-card-actions.btn.px-5
      LinkBtn(:url="work.to" btnText="Go to page" :text="true" color="teal")
      
</template>

<style lang="stylus" scoped>
  .v-image
    height 200px

  .v-card
    position relative

    .text
      margin-bottom 68px
        
    .btn 
      position absolute
      right 0
      bottom 0
      
  @media screen and (max-width: 1264px)
    .v-image
      height 200px
    
  
</style>

<script>
import LinkBtn from "./LinkBtn"
export default {
  components:{
    LinkBtn,
  },
  props:{
    work: Object,
  },
}
</script>