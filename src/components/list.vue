<template>
<div class="main">
      <mt-index-list>
  <mt-index-section v-for="data in datalist" :key="data.index" :index="data.index">
    <mt-cell @click.native="handlecityId(item)" v-for="item in data.list" :key="item.cityId" :title="item.name" ></mt-cell>
  </mt-index-section>
</mt-index-list>
</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';
import Vue from 'vue'
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
import axios from 'axios'
export default {
    data(){
        return{
            datalist:[]
        }
    },
    mounted(){
          Indicator.open({
  text: 'Loading...',
  spinnerType: 'fading-circle'
});
       axios({
           url:'https://m.maizuo.com/gateway?k=9675250',
           headers:{
               'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"1586416542721554505865","bc":"440100"}',
               'X-Host':'mall.film-ticket.city.list'
           }
       }).then(res=>{
        //    this.datalist = res.data.data.cities
        //    console.log(this.datalist)
        Indicator.close();
        var arrlist = []
        for (let index = 65; index < 91; index++) {
            arrlist.push(String.fromCharCode(index));
        }
                    for (let j = 0; j < arrlist.length; j++) {
                   var arr = res.data.data.cities.filter(item=>item.pinyin.substring(0,1)===arrlist[j].toLowerCase())
                   if (arr.length>0) {
                       this.datalist.push({
                           index:arrlist[j],
                           list:arr
                       })
                   }
            }
       })
    },
    methods:{
        handlecityId(val){
             this.$router.push({ name: 'yy', params: { cityId: val.cityId,name: val.name}})
        }
    }
}
</script>

<style>

</style>