<template>
  <div class="topic">
    <div class="topTitle">
        <span class="bg" v-if="topicData.top">置顶</span>
        <div class="title" >{{topicData.title}}</div>       
    </div>
    <ul class="jianjie">
      <li>发布于一天前</li>
      <li>作者{{author}}</li>
      <li>{{topicData.visit_count}}次浏览</li>
      <li v-if="topicData.tab">来自{{tab[topicData.tab]}}</li>
    </ul>
    <div class="content" >
      <div class="shequtuijian">       
        <p><span>社区推荐：</span>是一个面向程序员的的技术社区，从 Vue 到 React，从前端教程到开源库，无论是入门还是进阶，来</p>
      </div>
      <div class="text" v-html="topicData.content"></div>
    </div>
   <div class="replies">
    <div class="huifu">{{huifu}}回复</div>
    <ul>
      <li v-for="(item ,index) in topicData.replies">
        <div class="authorData">
            <img :src="item.author.avatar_url" alt="">
            <span>作者</span>
            <a href="">{{index+1}}楼 1年前</a>
        </div>
        <div class="content" v-html="item.content">
          
        </div>
      </li>
    </ul>
  </div>


  </div>
 
</template>

<script>
// 引入请求数据的模块
import { getTopicContent } from "@/getdata/index.js";

export default {
  name: "topic",
  data() {
    return {
      topicData: [],
      author:'',
      huifu:'',
          tab: {
        weex: "weex",
        share: "分享",
        ask: "问答",
        job: "招聘"
      }
    };
  },
  // 调用钩子函数
  mounted() {
    // 调用请求数据的函数并且获取请求的数据
    getTopicContent(this.$route.params.id).then(data => {
      this.topicData = data.data.data;
      this.author=data.data.data.author.loginname;
      this.huifu=data.data.data.replies.length

    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/sass/base.scss";

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

.topic {
  width: rem(750px);
  margin-top: rem(80px);
  margin-bottom:rem(100px);
  
  .topTitle {
    display: flex;    
    width: rem(730px);
    padding: rem(10px);
    .title {
      width: rem(680px);
      font-size: rem(38px);
      font-weight: bold;
    }

    .bg {
      display: block;
      margin-right: rem(10px);
      background: #369219;
      font-size: rem(22px);
      color: #fff;
      width: rem(65px);
      height: rem(45px);
      text-align: center;
      line-height: rem(45px);
      border-radius: rem(8px);
    }
  }
  .jianjie{
    display:flex;
    justify-content:space-around;
    width:rem(730px);
    color:#838383;
    line-height:1rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .content{
    width:100%;
    padding:rem(20px);
    box-sizing: border-box;
    .shequtuijian{
      border-left:10px solid #369219;
      padding:rem(20px);
      background:#e5e5e5;
      font-size:rem(28px);
      line-height:0.8rem;
    }
    .text{
      width:100%;
      background:#FAFAFA;
      margin-top:rem(30px);
      font-size:rem(15px);
      line-height:1rem;
      border-radius:rem(5px);
    }
    
  }
  .replies{
    width:rem(750px);
    .huifu{
      height:rem(100px);
      background:#eee;
      font-size:rem(40px);
      line-height:rem(100px);
      padding-left:rem(20px)
    }
    ul{
      li{
        width:rem(730px);
        border-bottom:1px solid #ccc;
        font-size:rem(30px);
        padding: rem(20px) rem(10px);
        .authorData{
          display:flex;
          img{
             width:rem(80px);
             height:rem(80px);
             border-radius:rem(10px);
             margin-right:rem(20px);
          }
          span{
            font-size:rem(25px);
            margin-right:rem(10px);
          }
          a{
            font-size:rem(25px);
          }
        }
        .content{
          font-size:rem(15px);
        }
      }
    }
  }
}
</style>
