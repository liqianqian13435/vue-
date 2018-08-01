<template>
  <div id="app">
	
    <router-view/>
	<!-- 底部导航 -->
    <nav class="footer">
		<ul>
			<router-link to="/" tag="li" :class="respath=='index'?'bg':''">首页</router-link>
			<router-link to="/gzh" tag="li" :class="respath=='gzh'?'bg':''">公众号</router-link>
			<router-link to="/me" tag="li" :class="respath=='me'?'bg':''">关于</router-link>
			<router-link to="/login" tag="li" :class="respath=='login'?'bg':''">登录</router-link>
		</ul>
    </nav>
	
  </div> 
</template>

<script>
export default {
  name: "App",
  // 计算属性
  computed:{
	  respath:function(){
     var pathArr=this.$route.path.split('/')
    //  返回
		  return pathArr[1]
	  }
  }
};
</script>

<style lang="scss">
@import "./assets/sass/base.scss";

.footer {
  width: 100%;
  height: rem(80px);
  background: #1c6132;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
    li {
      width: 25%;
      color: #fff;
      font-size: rem(40px);
      text-align: center;
      line-height: rem(80px);
	}
	li.bg{
		font-weight:bold;
	}
  }
}
</style>
