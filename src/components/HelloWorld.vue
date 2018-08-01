<template>
  <div class="hello">
    <router-view/>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import './assets/sass/base.scss';

    *{margin: 0;padding: 0;}
    ul,ol{list-style:none;}
	  a{text-decoration: none;}
</style>
