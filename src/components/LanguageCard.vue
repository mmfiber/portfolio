<template lang="pug">
  v-card(elevation=8).mb-10
    v-card-title.headline.justify-center {{name}}
    v-card-text
      v-container(fluid).text {{$t(`langs.${name}`)}}
      v-container(fluid).level.align-stretch
        v-row
          span.mr-1 {{$t("Coding experience")}}
          span {{codingExp}}
        v-row
          span.mr-1 {{$t("level")}}
          v-icon(v-for="(l, id) in level" :key="id" :style="l.styles") {{l.icon}}
</template>

<style lang="stylus" scoped>
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
      let days = Math.floor(ms / (60*60*24*1000))
      let months = Math.floor(days / 30)
      let years = Math.floor(months / 12)
      const duration = {
        "year": years,
        "month": months - years*12,
      }
      return duration
    }
  }
}
</script>