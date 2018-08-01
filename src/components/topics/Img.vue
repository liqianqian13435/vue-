<template>
  <div class="users">
    <div class="userData">
        <div class="userName">
            <img :src="userData.avatar_url" alt="">
            <span>{{userData.loginname}}</span>
        </div>
        <div class="text">{{userData.score}}积分</div>
        <div  class="text">注册时间{{userData.create_at}}</div>
    </div>
    <h2>最近创建的话题</h2>    
    <div class="replies">
        <ul class="items">
            <li class="item" v-for="item in userData.recent_topics">
                <div class="img">
                    <img :src="item.author.avatar_url" alt="">
                </div>
                <div class="title">
                    {{item.title}}
                </div>
            </li>
        </ul>      
    </div>
    <h2>最近参与的话题</h2>    
    <div class="replies">
        <ul class="items">
            <li class="item" v-for="item in userData.recent_replies">
                <div class="img">
                    <img :src="item.author.avatar_url" alt="">
                </div>
                <div class="title">
                    {{item.title}}
                </div>
            </li>
        </ul>      
    </div>
  </div>
</template>

<script>
// 引入请求数据的模块
import { getUserdata } from "@/getdata/index.js";
export default {
  name: 'users',
  data () {
    return {
      userData:[]
    }
  },
  // 调用钩子函数
  mounted() {
    // 调用请求数据的函数并且获取请求的数据
    getUserdata(this.$route.params.loginname).then(data => {
      this.userData = data.data.data;
      console.log(this.userData)
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../assets/sass/base.scss';
.users{
    width:rem(710px);
    margin-top:rem(80px);
    padding:rem(20px);    
    background:rgb(203, 245, 179);
    .userData{
        padding:rem(20px);        
        background:#fff;
        .userName{
            display:flex;
            img{
                display:block;
                width:rem(100px);
                height:rem(100px);
                border-radius:rem(10px);
                margin-right:rem(10px);
            }
            span{
                align-self:center;
                font-size:rem(30px);
            }
        }

    }
    .text{
        font-size:rem(30px);
        line-height:0.7rem;
    }
    h2{
        line-height:1.5rem;
    }
    .replies{
        padding:rem(20px);        
        background:#fff;
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
            .title {
            width: rem(550px);
            font-size: rem(28px);
            overflow: hidden;
            text-overflow: ellipsis;
            line-height:rem(80px);
            white-space: nowrap;
            color: #333333;
            }
        }
    }
}
 

</style>
