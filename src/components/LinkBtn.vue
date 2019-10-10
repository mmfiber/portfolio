<template lang="pug">
  v-btn(v-if="isInternal" :to="url"
    :text="text" :color="color" x-large) {{btnText}}
  a(v-else :href="url")
    v-btn(:text="text" :color="color" x-large) {{btnText}}
</template>

<style lang="stylus" scoped>  
  a
    text-decoration none

</style>

<script>
export default {
  props:{
    url: String,
    btnText: String,
    text: Boolean,
    color: String,
  },
  data(){
    return{
      isInternal: this.isInternalLink()
    }
  },
  methods:{
    isInternalLink(){
      return !this.url.match(/http(s)?:\/\//)
    }
  }
}
</script>