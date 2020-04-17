<template>
  <div class="page-navbar">
   <mt-navbar v-model="selected">
  <mt-tab-item id="1">正在热映</mt-tab-item>
  <mt-tab-item id="2">即将上映</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div class="car" v-for="data in hot" :key="data.filmId">
        <img :src="data.poster" alt="" width="80" height="100">
        <p>{{data.name}}</p>
        <div class="actors">主演:<a v-for="list in data.actors" :key="list.name">{{ list.name+' ' }}</a></div></br>
        <mt-badge style="margin-left:10px" size="small" color="#888">{{data.nation}}</mt-badge>
        <mt-button class="btn" @click="handlechangepage(data.filmId)" size="small">详情</mt-button>
    </div>
    <div class="msg">
          <p>无更多电影</p>
    </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
       <div class="car" v-for="data in yy" :key="data.filmId">
        <img :src="data.poster" alt="" width="80" height="100">
        <p>{{data.name}}</p>
        <div class="actors">主演:<a v-for="list in data.actors" :key="list.name">{{ list.name+' ' }}</a></div></br>
        <mt-badge style="margin-left:10px" size="small" color="#888">{{data.nation}}</mt-badge>
        <mt-button class="btn" @click="handlechangepage(data.filmId)" size="small">详情</mt-button>
    </div>
        <div class="msg">
          <p>无更多电影</p>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
<Tab></Tab>
  </div>
  
</template>

<script>
import Nav from '../components/Navbar'
import Tab from '../components/Tabbar'
import { Badge } from 'mint-ui';
import { Button } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
import { Indicator } from 'mint-ui';
Vue.use(InfiniteScroll);
Vue.component(Button.name, Button);
Vue.component(Badge.name, Badge);
import { Navbar, TabItem } from 'mint-ui';
import Vue from 'vue'
import axios from 'axios'
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected: '1',
      hot:[],
      yy:[]
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
          url:'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=5261862',
          headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586416542721554505865","bc":"510100"}',
              'X-Host': 'mall.film-ticket.film.list'
          }
      }).then(res=>{
          this.hot = res.data.data.films;
      })
      axios({
          url:'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=2&k=4960626',
          headers:{
              'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586416542721554505865","bc":"510100"}',
              'X-Host': 'mall.film-ticket.film.list'
          }
      }).then(res=>{
          this.yy = res.data.data.films;
          Indicator.close();
      })
  },
  methods:{
        handlechangepage(id){
        this.$router.push({ name: 'View', params: { filmId: id }})
        }
    },
  }
</script>

<style lang="scss">
.car{
    text-align: left;
    height: 100px;
    position: relative;
    clear: both;
    margin-top: 10px;
    img{
        float: left;
    }
    p{
        padding-top: 15px;
        margin-left: 90px;
    }
    .btn{
        position:absolute;
        right: 5px;
        top:30px;
    }
    .actors{
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 200px;
      margin-left: 10px;
      padding-left: 10px;
    }
}
.msg{
  width: 100%;
  height: 50px;
  background-color: #ededed;
  line-height: 50px;
}
</style>>

