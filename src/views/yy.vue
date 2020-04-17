<template>
  <div>
      <mt-header style="background-color:white;color:black" :title="title">
        <router-link to="/list" slot="left">
            <mt-button>{{this.$route.params.name}}</mt-button>
        </router-link>
        <router-link style="z-index:3" to="" @click.native="handleshow" slot="right">
        <mt-button style="z-index:3"  icon="search" ></mt-button>
        </router-link>
        </mt-header>
      <div class="yy">
           <p class="city" v-for="data in datalist" :key="data.name">
               {{data.name}}
               </br>
               {{data.address.substring(0,15)+'...'}}
               </p>
        <div class="msg">
          <p>无更多影院</p>
               </div>
      </div>
      <Tab></Tab>
      <div class="search" v-show="ishow">
       <mt-search ></mt-search>
      </div>
  </div>
</template>

<script>
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);
import Nav from '../components/Navbar'
import Tab from '../components/Tabbar'
import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue'
import axios from 'axios'
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import { Indicator } from 'mint-ui';
export default {
     data(){
        return{
            title:'影院',
            datalist:[],
            ishow:false,
        }
    },
  components:{
      Nav,
      Tab
  },
  mounted(){
                Indicator.open({
  text: 'Loading...',
  spinnerType: 'fading-circle'
});
    axios({
      url:`https://m.maizuo.com/gateway?cityId=${this.$route.params.cityId}&ticketFlag=1&k=8761646`,
          headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586416542721554505865","bc":"440100"}',
            'X-Host': 'mall.film-ticket.cinema.list'
          }
      }).then(res=>{
        //  
        this.datalist = res.data.data.cinemas
        Indicator.close();
      })
  
},
methods:{
    handleshow(){
        this.ishow = !this.ishow
    }
}
}
</script>

<style>
.yy{
    width: 100%;
    height: auto;
}
.city{
    display: block;
    width: 100%;
    height: 50px;
    text-align: left;
    padding-left: 15px;
    background-color: white;
    margin-top: 2px;
}
.search{
    width: 100%;
    height: 100%;
    background-color: white;
    position: absolute;
    z-index: 2;
    top: 0;
}
</style>