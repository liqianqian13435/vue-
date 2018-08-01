import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Gzh from '@/components/Gzh'
import Me from '@/components/Me'
import Login from '@/components/Login'
import Sign from '@/components/Sign'
//主题相关的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Weex from '@/components/topics/Weex'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job'
import Topic from '@/components/topics/Topic'
import Img from '@/components/topics/Img'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/index',
			name: 'Index',
			component: Index,
			children: [
				{
					path: '/',
					component: All,
				},
				{
					path: 'good',
					component: Good,
				},
				{
					path: 'weex',
					component: Weex,
				},
				{
					path: 'share',
					component: Share,
				},
				{
					path: 'ask',
					component: Ask,
				},
				{
					path: 'job',
					component: Job,
				},
				{
					path:'topic/:id',
					component:Topic,
				},
				{
					path:'img/:loginname',
					component:Img
				}
			]
		},
		
		{
			path: '/gzh',
			name: 'Gzh',
			component: Gzh,
		},
		{
			path: '/me',
			name: 'Me',
			component: Me,
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/sign',
			component:Sign
		},

		{
			path: '/*',
			redirect: '/index'
		},
		
	]
})
