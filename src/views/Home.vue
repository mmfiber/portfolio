<template lang="pug">
  v-container.fill-height
    v-row.justify-center.align-center
      .wrapper
        v-row.justify-center.link-wrapper
          router-link(to="/about").display-2.font-weight-light.mb-6 Welcome to Masahiro Mikami's Portfolio Site
        v-row.justify-center.link-wrapper
          router-link(to="/about").headline.font-weight-light Click to start
</template>

<style lang="stylus" scoped>
  .link-wrapper>a
    text-align center
    text-decoration none
    color rgba(0,0,0,.87)
</style>

