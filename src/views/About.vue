<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Nav></Nav>
  </div>
</template>
<script>
import Nav from '@/common/nav/nav.vue'
export default {
  name: 'About',
  components: {
    Nav
  },
  data () {
    return {
      msg: "about"
    }
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
.about {
  width: 100%;
  height: auto;
  min-height: 100%;
  background: #ccc;
}
</style>
