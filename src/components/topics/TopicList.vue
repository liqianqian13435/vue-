<template>
  <div class="topicList">
	   <ul class="items">
		   <li class="item" v-for="item in topics">
			   <router-link :to="'/index/img/'+item.author.loginname" tag="div"class="img">
				   <img v-lazy="item.author.avatar_url" alt="">
			   </router-link>
			   <div class="top" :class="{topBg :item.top}">
				   <span v-if="item.top">置顶</span>
				   <span v-else-if="item.good">精华</span>
				   <span v-else="item.tab">{{tab[item.tab]}}</span>
			   </div>
			   <div class="title">
				   <router-link  :to=" '/index/topic/'+item.id" tag="div" class="content">
				   		{{item.title}}
				   </router-link>
				   <div class="times">
					   {{item.reply_count}}/{{item.visit_count}}
				   </div>
			   </div>
        <div class="day">1小时</div>         
		   </li>
	   </ul>
  </div>
</template>

<script>
// 引入请求数据的模块
import {getTopicList  } from "@/getdata/index.js";


export default {
  name: "topicList",
  data() {
    return {
      tab: {
        weex: "weex",
        share: "分享",
        ask: "问答",
        job: "招聘"
      }
    };
  },
  
    //接收  父组件传递过来的值
  props: ["topics"]
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/base.scss";

.topicList{
  margin-top: rem(80px);

}
.items {
  width: 100%;
  .item {
    display: flex;
    width: 100%;
    height: rem(100px);
    border-bottom: 1px solid #ccc;
    .img {
      display: flex;
      width: rem(90px);
      justify-content: center;
      img {
        display: block;
        /* 弹性布局中子元素居中 */
        align-self: center;
        width: rem(60px);
        height: rem(60px);
      }
    }
    .top {
      align-self: center;
      width: rem(65px);
      height: rem(40px);
      font-size: rem(22px);
      text-align: center;
      line-height: rem(40px);
      border-radius: rem(8px);
      margin-right: rem(15px);
      background: #e5e5e5;
      color: #999999;
    }
    .topBg {
      background: #369219;
      color: #fff;
    }
    .title {
      width: rem(450px);
      padding-top: rem(15px);
      .content {
        font-size: rem(28px);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333333;
      }
      .times {
        color: #b6b6b6;
      }
    }
    .day{
      width:rem(80px);
      font-size:rem(23px);
      line-height:rem(100px);
      text-align:center;
      color:#b6b6b6;
    }
  }
}
</style>
