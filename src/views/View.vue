<template>
  <div class="main" @scroll="scroll">
      <router-link to="/Video" slot="left">
    <mt-button style="position: absolute;top:0px;z-index: 2;left:0;float:left;opacity: 0.4;" icon="back"></mt-button>
  </router-link>
<mt-header style="position: absolute;top:0px;z-index: 1;width:100%;background-color:white;color:black;opacity: 0.8;" v-show="isshow" :title="this.datalist.name">
</mt-header>
      <div class="swipe">
      <mt-swipe>
      <mt-swipe-item><img :src="this.datalist.poster" width="100%" height="200" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="text">
        <h3 style="float:left">{{this.datalist.name}}</h3>
        <h5 style="margin-left:80%;padding-top:5px;color:orange">{{this.datalist.grade}}分</h5>
        <h4 style="clear:both">{{this.datalist.category}}</h4>
        <h4>{{this.datalist.nation}}|{{this.datalist.runtime}}分钟</h4>
        <h4 >{{ js() }}</h4>
    </div>
    <div class="text2">
      <h3>演职人员</h3>
  <div class="swiper-container">
    <div class="swiper-wrapper" >
            <div style="width:100px" class="swiper-slide" v-for="item in this.datalist.actors" :key="item.name"><img :src="item.avatarAddress" height="90" width="80" alt="" srcset=""></div>
      <!-- <div class="swiper-slide" v-for="item in this.datalist.actors" :key="item.name"><img :src="item.avatarAddress" width="80px" height="80px" alt="" srcset=""></div> -->
    </div>
  </div>
    </div>
    <div class="text2">
      <h3>剧照</h3>
        <div class="swiper-container">
    <div class="swiper-wrapper" >
            <div style="width:160px" class="swiper-slide" v-for="(item,index) in this.datalist.photos" :key="index"><img :src="item" height="100" width="150" alt="" srcset=""></div>
      <!-- <div class="swiper-slide" v-for="item in this.datalist.actors" :key="item.name"><img :src="item.avatarAddress" width="80px" height="80px" alt="" srcset=""></div> -->
    </div>
  </div>
    </div>
      </div>
    <button class="btn">选座购票</button>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import swiper from 'swiper';
import { Button } from 'mint-ui';
import Vue from 'vue'
Vue.component(Button.name, Button);
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui';
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  data(){
    return{
      id:this.$route.params.filmId,
      datalist:[],
      isshow:false,
      scrollTop: 0
    }
  },
mounted(){
  window.addEventListener('scroll', this.scroll, true)
  Indicator.open({
  text: 'Loading...',
  spinnerType: 'fading-circle'
});
    axios({
      url:`https://m.maizuo.com/gateway?filmId=${this.id}&k=2903286`,
          headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586416542721554505865","bc":"110100"}',
            'X-Host': 'mall.film-ticket.film.info'
          }
      }).then(res=>{
          this.datalist = res.data.data.film
          Indicator.close();
    }),
    new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
},
        methods: {
            js(){
             if (!!this.datalist.synopsis) {
                return this.datalist.synopsis.substring(0,100)+'...'
             }
            },
         // 获取滚动条与顶端距离

            scroll(event) {

                this.scrollTop = event.target.scrollTop

                if (this.scrollTop>0) {
    this.isshow = true;
} else {
this.isshow = false;
}

            }

},
 beforeDestroy() {
 	 window.removeEventListener('scroll', this.scroll)
  },
}


</script>
<style lang='scss' scoped>
.main{
  width: 100%;
  height: 600px;
  overflow-y: auto;
  .swipe{
    width: 100%;
    height: 200px;
  }
}
.btn{
  -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    color: inherit;
    display: block;
    font-size: 18px;
    height: 41px;
    outline: 0;
    overflow: hidden;
    position: absolute;
    text-align: center;
    color: #fff;
    background-color: #ef4f4f;
    display: block;
    width: 100%;
    bottom:0px;
}
.btn:active{
  background-color: black;
  opacity: 0.8;
}
.text{
    width: 100%;
    height: 200px;
    background-color: #fff;
    text-align: left;
    padding-left: 10px;
    clear: both;
  }
.swiper-container {
    width: 100%;
    height: 100px;
    text-align: left;
}
  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;

      
    }
.synopsis{
  height: 200px;
  width: 100%;
  overflow: hidden;
}
.text2{
    width: 100%;
    height: 150px;
    background-color: #fff;
    text-align: left;
    padding-left: 10px;
    clear: both;
  }
</style>