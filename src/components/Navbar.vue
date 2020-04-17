<template>
<mt-header :title="title">
  <router-link to="/list" slot="left">
    <mt-button>定位</mt-button>
  </router-link>
 <router-link to="/" slot="right">
  <mt-button icon="search" ></mt-button>
  </router-link>
</mt-header>
</template>

<script>
import { Header } from 'mint-ui';
import Vue from 'vue'
Vue.component(Header.name, Header);
export default {
    data(){
        return{
            title:'影院'
        }
    }
}
</script>

<style>

</style>