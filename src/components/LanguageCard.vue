<template lang="pug">
  v-card(elevation=8)
    v-card-title.headline.justify-center {{name}}
    v-card-text
      v-container
        v-row
          span.text {{$t(`langs.${name}`)}}
      v-container
        v-row
          span.mr-1 {{$t("Coding experience")}}
          span {{codingExp}}
        v-row.align-center
          span.mr-1 {{$t("level")}}
          v-icon(v-for="(l, id) in level" :key="id" :style="l.styles") {{l.icon}}
</template>

<style lang="stylus" scoped>
  .v-icon
    font-size 20px

  .text
    text-align: justify
</style>

<script>
export default {
  props:{
    lang: Object,
  },
  data(){
    return {
      name: this.lang.name,
      level: this.stars(this.lang.level),
    }
  },
  computed:{
    codingExp(){
      const exp = []
      const duration = this.calcDuration(this.lang.duration)
      for(let k in duration){
        const val = duration[k]
        if(val) exp.push(val.toString()+" "+this.$tc(k, val))
      }
      return exp.join(" ")
    },
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
    calcDuration(d){
      const start = new Date(d.start)
      const end = d.end ? new Date(d.end) : new Date()
      const duration = end.getTime() - start.getTime()
      return this.msToDate(duration)
    },
    msToDate(ms){
      const years = Math.floor(this.msToYears(ms))
      const months = Math.floor(this.msToMonth(ms - this.yearsToMs(years)))
      const duration = {
        "year": years,
        "month": months,
      }
      return duration
    },
    msToYears(ms){
      return ms/365/24/60/60/1000
    },
    msToMonth(ms){
      return ms/30/24/60/60/1000
    },
    yearsToMs(ms){
      return ms*365*24*60*60*1000
    }
  }
}
</script>