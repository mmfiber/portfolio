<template lang="pug">
  v-toolbar
    v-layout(align-center justify-center)
      span.xs2.px-5.mx-5(v-for="val in contents") {{val}}
</template>

<style lang="stylus" scoped>
  .v-toolbar 
    max-height 64px

    span
      font-size 24px
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
      ]
    }
  }
};
</script>