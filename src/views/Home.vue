<template>
  <div class="home">
    <h1>This is an home page</h1>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from '@/common/nav/nav.vue'
export default {
  name: 'Home',
  components: {
    Nav
  },
  data () {
    return {
      msg: "Home"
    }
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
</style>
