<template>
  <div class="share">
  	<topic-list :topics="topics"></topic-list>
    <infinite-loading @infinite="infiniteHandler" v-show="loadingShow"></infinite-loading>	  
  </div>
</template>

<script>
// 引入请求数据的模块
import { getTopicList } from "@/getdata/index.js";
// 引入主题 列表 组件
import TopicList from "@/components/topics/TopicList";
// 引入滑动加载
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: "Share",
  data() {
    return {
      topics: [],
      page:1,
      loadingShow:true
    };
  },
  // 调用钩子函数
  mounted() {
    // 调用请求数据的函数并且获取请求的数据
    getTopicList({ tab: "share" }).then(data => {
      this.topics = data.data.data;
    });
  },
  //加载组件
	components:{
    TopicList,
    InfiniteLoading
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {

         // 查询数据 每次请求5条 
        getTopicList({limit:5,page:++(this.page),tab:'share'}).then(data => {
          // 请求到的数据拼接到原来的数据后
          this.topics =this.topics.concat(data.data.data) ;
          // 判断请求的数据长度 没有数据 让请求图标不显示
          if(data.data.data.length==0){
            this.loadingShow=false;
          }else{
            // 有数据 继续请求
               $state.loaded();
          }
        });

     
      }, 1000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

// 加载基础的样式
@import "../../assets/sass/base.scss";
.share{
  margin-bottom:rem(100px);
}

</style>
