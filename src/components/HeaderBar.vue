<template lang="pug">
  .header
    v-toolbar
      v-layout(align-center justify-center)
        span.px-5.mx-5(v-for="val in contents") {{val}}
</template>

<style lang="stylus" scoped>
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