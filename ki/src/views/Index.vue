<template>
  <div class="index">

    <div>
      <!-- 二级路由 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <van-tabbar active-color="#F5AE52" class="tab-bar" v-model="tabbarActive">
      <van-tabbar-item class="cor" v-for="(item, index) in tabbarData" :key="index" :name="item.name" :icon="item.icon" @click="togglePage({name: item.name})">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {createNamespacedHelpers} from 'vuex'

  const {mapState} = createNamespacedHelpers('indexModule');

  export default {
    name: 'index',

    data() {
      return {
        tabbarActive: 'home'
      };
    },
    
    computed: {
      ...mapState(['tabbarData'])
    },

    methods: {
      togglePage(o) {
        this.$router.push(o);
      }
    },

    created() {
      console.log('this.$route ==> ', this.$route);
      //纠正底部导航的标签
      this.tabbarActive = this.$route.name;
    }
  }
</script>

<style lang="less" scoped>
  .index{
    padding-bottom: calc(~"1.33333rem");
     .tab-bar{
   background-color: #000000;
  .cor{
    color: #ffffff;
  }
 }
  }
</style>