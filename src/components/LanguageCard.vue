<template lang="pug">
  v-card(elevation=8).mb-10
    v-card-title.display-1.justify-center {{lang}}
    v-card-text
      v-container(fluid).text {{$t(`langs.${lang}.exp`)}}
      v-container(fluid).level.align-stretch
        v-row.justify-center.align-center.body-1
          span.mr-1 {{$t("Coding experience")}}
          span.mr-1(v-if="duration.years") {{duration.years.toString()+" "+this.$tc("year", duration.years)}}
          span.mr-5(v-if="duration.months") {{duration.months.toString()+" "+this.$tc("month", duration.months)}}
          v-icon(v-for="(l, id) in level" :key="id" :style="l.styles") {{l.icon}}
</template>

<style lang="stylus" scoped>
  .v-card
    position relative

    .text
      font-size 20px
      margin-bottom 50px
        
    .level 
      position absolute
      left 0
      bottom 0
      border-top 1px solid #cccccc

</style>

<script>
import BaseLayout from '../components/BaseLayout';

export default {
  components: {
    BaseLayout,
  },
  props:{
    lang: String,
  },
  data(){
    return {
      level: this.stars(this.$t(`langs.${this.lang}.level`)),
      duration: this.stydyDuration(this.$t(`langs.${this.lang}.duration`)),
    }
  },
  methods:{
    stars(n){
      const stars = []
      for(let i=0; i<3; i++){
        if(i<parseInt(n)){
          stars.push({
            "icon": "mdi-star",
            "styles": {"color": "#FFD600"} 
            })
        }else{
          stars.push({
            "icon": "mdi-star-outline",
            "styles": {"color": "#BDBDBD"} 
            })
        }
      }
      return stars
    },
    stydyDuration(d){
      const start = new Date(d.start)
      const end = d.end ? new Date(d.end) : new Date()
      const duration = end.getTime() - start.getTime()
      return this.msToDate(duration)
    },
    msToDate(ms){
      let days = Math.floor(ms / (60*60*24*1000))
      let months = Math.floor(days / 30)
      let years = Math.floor(months / 12)
      const duration = {
        "years": years,
        "months": months - years*12,
      }

      return duration
    }
  }
}
</script>