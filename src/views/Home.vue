<template lang="pug">
  v-container
    v-row.justify-center.align-center.fill-height
      .wrapper
        v-row.justify-center.link-wrapper
          router-link(to="/about").display-3.mb-6 Welcome to Masahiro Mikami's Portfolio Site
        v-row.justify-center.link-wrapper
          router-link(to="/about").display-1 Click to start
</template>

<style lang="stylus" scoped>
  .container
    height 100%

  .link-wrapper>a
    text-decoration none
    color rgba(0,0,0,.87)
</style>

