<template>
  <van-tabbar route>
  <van-tabbar-item replace to="/" icon="home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/about" icon="user-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</template>

<script>
/* eslint-disable */
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: 'Nav',
  components: {
    VanTabbar: Tabbar,
    VanTabbarItem: TabbarItem
  },
  data() {
    return {
      active: 0,
    };
  },
  methods:{
    
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
