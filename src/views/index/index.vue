<template>
  <div class="index">
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: "index"
    }
  },
  methods:{
    text(){
      this.$http
          .user
          .index()
          .then(data => {console.log(data)})
          .catch(error => {console.log(error)})
    }
  },
  mounted(){
    this.text()
  }
}
</script>
<style scoped lang="scss">
@mixin test {
  color: red;
}
p{
  @include test;
}
</style>
