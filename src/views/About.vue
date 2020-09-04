<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{count}}</p>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-skeleton title avatar :row="2" :loading="loading">
      <div><p>实际内容</p></div>
    </van-skeleton>
    <Nav></Nav>
  </div>
</template>
<script>
/* eslint-disable */
import Nav from '@/common/nav/nav.vue'
import { Button, Cell, CellGroup, Skeleton } from 'vant'
export default {
  name: 'About',
  components: {
    Nav,
    VanButton: Button,
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanSkeleton: Skeleton
  },
  data () {
    return {
      msg: "about",
      loading: true
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods:{
    text(){
      this.$http
          .user
          .index()
          .then(data => {console.log(data)})
          .catch(error => {console.log(error)})
    },
    increment() {
      this.$store.commit('increment')
      console.log(this.$store.state.count)
    }
  },
  mounted(){
    this.increment()
    // this.$store.commit('increment')
    // console.log(this.$store.state)

    this.text()
    setTimeout(() => {
      this.loading = false
    },5000)
  }
}
</script>
<style scoped lang="scss">
@mixin test {
  color: red;
}
h1{
  @include test;
}
</style>
