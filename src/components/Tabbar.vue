<template>
<mt-tabbar >
  <mt-tab-item id="tab1">
    <img slot="icon" src="../assets/电影.png">
    <router-link active-class="activelink" to="/video" tag="li">电影</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab2">
    <img slot="icon" src="../assets/影院.png">
   <router-link active-class="activelink" to="yy/510100/成都" tag="li">影院</router-link>
  </mt-tab-item>
  <mt-tab-item id="tab3">
    <img slot="icon" src="../assets/我的.png">
   <router-link active-class="activelink" to="/my" tag="li">我的</router-link>
  </mt-tab-item>
</mt-tabbar>
</template>

<script>

import Vue from 'vue'
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        // this.$router.push({ name: 'yy', params: { cityId: 510100,name: '成都'}})
    }

}
</script>

<style>
.activelink{
    color: red;
}
li{
    list-style: none;
}
</style>