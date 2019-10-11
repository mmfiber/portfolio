<template lang="pug">
  BaseLayout
    v-container
      v-row.justify-center.mb-5
        v-flex.xs8.sm3
          img.icon(src="../assets/icon.svg")
      v-row.justify-center
        v-flex.xs8.sm6
          template(v-for="ck in careerKey")
            v-row
              span.headline {{$t(`Career.${ck}.title`)}}
              span.headline {{$t(`Career.${ck}.content`)}}
          template(v-for="ctn in contacts")
            v-row
              span {{contact[ctn]}}
          
</template>

<style lang="stylus" scoped>
  .v-row
    width 100%

  .icon
    width 100%
</style>

<script>
import BaseLayout from '../components/BaseLayout';
import contact from '../resource/contact.json'

export default {
  components: {
    BaseLayout,
  },
  data(){
    return {
      careerKey:[
        "Name",
        "Occupation"
      ],
      contacts:[
        "twitter",
        "facebook",
        "e-mail"
      ],
      contact: contact
    }
  }
};
</script>