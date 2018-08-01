<template>
  <div class="gzh">
    <img src="../../static/images/erweima.png" alt="">
    <p>亲，微信扫一扫奴家</p>
  </div>
</template>

<script>
export default {
  name: 'Gzh',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../assets/sass/base.scss';

    *{
      margin: 0;
      padding: 0;
      }
    ul,ol{
      list-style:none;
      }
	  a{
      text-decoration: none;
      }
    .gzh{
      width:rem(750px);
      display:flex;
      flex-direction:column;
      img{
        display:block;
        margin:rem(100px) auto;
        width:rem(600px);
        height:rem(600px);
      }
      p{
        color:#1DB702;
        font-size:rem(28px);
        text-align:center;
      }
    }
</style>
