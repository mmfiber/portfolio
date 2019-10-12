<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center.mb-5
        v-flex.xs8.sm3
          img.icon(src="../assets/icon.svg")
      v-row.justify-center
        table
          tbody
            template(v-for="(info, index) in myInfo")
              tr.title
                th.pr-1 {{info.title}}
                td(v-if="info.link")
                  a(:href="info.link") {{info.content}}
                td(v-else) {{info.content}}
</template>

<style lang="stylus" scoped>
  .v-row
    width 100%

  .icon
    width 100%

  a
    text-decoration none

  th
    text-align right
</style>

<script>
import BaseLayout from '../components/BaseLayout'

export default {
  components: {
    BaseLayout,
  },
  data(){
    return {
      myInfoKeys: Object.keys(this.$i18n.messages.ja.myinfo)
    }
  },
  computed:{
    myInfo(){
      return this.myInfoKeys.map((k) => {
        return{
          "title": this.$t(`myinfo.${k}.title`),
          "content": this.$t(`myinfo.${k}.content`),
          "link": this.$t(`myinfo.${k}.link`),
        }
      })
    }
  }
};
</script>