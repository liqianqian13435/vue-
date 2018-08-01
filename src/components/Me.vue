<template>
  <div class="me">
    <div class="about">
      <h2>关于</h2>
      <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
      <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎吐槽。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
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

    *{margin: 0;padding: 0;}
    ul,ol{list-style:none;}
	  a{text-decoration: none;}
    .me{
      width:rem(750px);
      .about{
        width:rem(680px);
        margin:rem(80px) auto;
        h2{
          font-size:rem(60px);
          line-height:1.5rem;
          border-bottom:1px solid #ccc;
        }
        p{
          font-size:rem(35px);
          line-height:1.5rem;
        }
      }
    }
</style>
