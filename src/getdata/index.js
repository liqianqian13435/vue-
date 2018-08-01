// 请求数据模块
// 引入axios 请求数据
import axios from 'axios';

var $http = axios.create({
    baseURL: 'https://www.vue-js.com/api/v1/',
    headers: { 'X-Custom-Header': 'foobar' }
});
// 请求主体列表函数
function getTopicList(params){
    // 设置默认参数
    var newParams=Object.assign({limt:5},params)
    // 返回值
    return $http({
        // 请求的方法
        method: 'get', 
        // 请求的url 会拼接 到 baseURL 中
        url: '/topics',
        params: newParams
    })
}

// 请求主体详情函数
function getTopicContent(id){
    // 返回值
    return $http({
        // 请求的方法
        method: 'get', 
        // 请求的url 会拼接 到 baseURL 中
        url: '/topic/'+id,
    })
}


function getUserdata(params){
    return $http({
        method:'get',
        url:'/user/'+params,
    })
}
// 暴露模块
export {getTopicList,getTopicContent,getUserdata}