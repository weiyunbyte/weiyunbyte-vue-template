<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- <van-image fit="contain" width="100" height="100" :src="require('../assets/logo.png')" /> -->
    <van-row type="flex" justify="center" class="home_box">
      <van-col class="home_box_list" span="8">
        <van-image
         fit="comtain"
         width="100"
         height="100"
         src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </van-col>
      <van-col class="home_box_list" span="8" offset="4">span: 8</van-col>
    </van-row>

    <div></div> 
    <p>{{msg}}</p>
    <p>{{count}}</p>
    <p>{{doneTodosCount}}</p>
    <p>{{getTodoById(1)}}</p>
    <p>{{getnames}}</p>
    <p>{{name}}</p>
    <p>{{getname}}</p>
    <p>null</p>
    <Nav></Nav>
  </div>
</template>

<script>
/* eslint-disable */
import Nav from '@/common/nav/nav.vue'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { Image as VanImage, Col, Row, Swipe, SwipeItem } from 'vant'
export default {
  name: 'Home',
  components: {
  	Nav,
    VanImage: VanImage,
    VanCol: Col,
    VanRow: Row,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  },
  data () {
    return {
      msg: "Home"
    }
  },
  computed: {
    ...mapState({
      count: 'count'
    }),
    ...mapState('home', {
      name: 'name'
    }),
    ...mapGetters({
      doneTodosCount: 'doneTodosCount',
      getTodoById: 'getTodoById'
    }),
    ...mapGetters('a' ,{
      getnames: 'getnames'
    }),
    ...mapGetters('home', {
      getname: 'getname'
    })
  },
  methods: {
    // aa() {
    //   this.$store.commit('increment')
    // },
    // ...mapMutations({
    //   aa: 'increment'
    // }),
    // bb() {
    //   // this.$store.commit('incrementTwo',{num: 11})
    //   this.$store.commit({
    //     type: 'incrementTwo',
    //     num: 13
    //   })
    //   this.$store.commit('setTosos')
    // },
    ...mapMutations({
      aa: 'increment',
      SOME_MUTATION: 'SOME_MUTATION',
      bb: 'incrementTwo'
    }),
    ...mapMutations('home',{
      setname: 'setname'
    }),
    ...mapActions({
      increment: 'increment',
      cc: 'incrementTwo',
      actionA: 'actionA',
      actionB: 'actionB',
      actionC: 'actionC',
      actionD: 'actionD'
    }),
    ...mapActions('home',{
      setname: 'setname',
      getglomessage: 'getglomessage'
    })
  },
  mounted() {
    this.aa()
    this.bb({num: 99})
    this.SOME_MUTATION()
    console.log(this.getTodoById(1))
    // this.$store.dispatch('increment')
    // this.$store.dispatch({
    //   type: 'incrementTwo',
    //   num: 999
    // })
    // this.increment()
    this.cc({num: 888})
    this.actionB().then(() =>{
      console.log(1111)
    }).catch((err) => {
      console.log(err)
    })
    // this.actionC().then(() => {
    //   console.log(222)
    // }).catch((err) => {
    //   console.log(err)
    // })
    this.actionD().then(() => {
      console.log('actionD结束')
    }).catch((err) => {
      console.log(err)
    })
    ////////////////
    console.log(this.$store.state.a.name)
    console.log(this.$store.state.home.name)
    console.log(this.getname)
    // this.setname({text:'帅'})
    this.getglomessage({
      text: '帅帅'
    }).then(() =>{
      console.log('1234567')
    })
  }
}
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: auto;
  min-height: 100%;
  background: #ccc;
}
.logo{
  width: 100px;
  height: 100px;
  margin: 0 auto;
  img{
    display: block;
    width: 100%;
  }
}
.home_box{
  .home_box_list{
    background: #39a9ed;
  }
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
