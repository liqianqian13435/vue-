<template>
  <div class="index">
    <nav class="top">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<router-link to="/index/" tag="a" :class="(respath==''||respath== undefined )?'bg':''">全部</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/good" tag="a" :class="respath=='good'?'bg':''">精华</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/weex" tag="a" :class="respath=='weex'?'bg':''">weex</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/share" tag="a" :class="respath=='share'?'bg':''">分享</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/ask" tag="a" :class="respath=='ask'?'bg':''">问答</router-link>
				</div>
				<div class="swiper-slide">
					<router-link to="/index/job" tag="a" :class="respath=='job'?'bg':''">招聘</router-link>
				</div>
			</div>
		</div>
    </nav>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      
    };
  },
  // 计算属性
  computed:{
	  respath:function(){
     var pathArr=this.$route.path.split('/')
    	//  返回
		return pathArr[2]
	  }
  },
  mounted(){
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 10,
    });
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/sass/base.scss";

.top {
  width: 100%;
  height: rem(80px);
  background: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
	.swiper-container{
		.swiper-wrapper{
			font-size:rem(34px);
			text-align:center;
			a{
				color: #369219;
				line-height:rem(80px);
      			border-radius:rem(10px);
				padding:rem(5px) rem(10px);
			}
			.bg{
				 color:#fff;
     			 background:#369219;
			}
		}
	}
}
</style>
