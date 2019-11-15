import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addWater = r => require.ensure([], () => r(require('@/page/addWater')), 'addWater');
const addNoise = r => require.ensure([], () => r(require('@/page/addNoise')), 'addNoise');
const addAir = r => require.ensure([], () => r(require('@/page/addAir')), 'addAir');
const airList = r => require.ensure([], () => r(require('@/page/airList')), 'airList');
const studentList = r => require.ensure([], () => r(require('@/page/studentList')), 'studentList');
const addStudent = r => require.ensure([], () => r(require('@/page/addStudent')), 'addStudent');
const waterList = r => require.ensure([], () => r(require('@/page/waterList')), 'waterList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const noiseList = r => require.ensure([], () => r(require('@/page/noiseList')), 'noiseList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addWater',
			component: addWater,
			meta: ['添加数据', '水质监测数据'],
		}, {
            path: '/addNoise',
            component: addNoise,
            meta: ['添加数据', '噪声监测数据'],
        },{
			path: '/addAir',
			component: addAir,
			meta: ['添加数据', '空气监测数据'],
		},{
			path: '/airList',
			component: airList,
			meta: ['数据管理', '空气质量数据'],
		},{
			path: '/waterList',
			component: waterList,
			meta: ['数据管理', '水质质量数据'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['数据管理', '食品列表'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/noiseList',
			component: noiseList,
			meta: ['数据管理', '噪声监测数据'],
		},{
            path: '/studentList',
            component: studentList,
            meta: ['学生资源管理', '查询学生信息'],
        },
        {
            path: '/addStudent',
            component: addStudent,
            meta: ['学生资源管理', '创建学生信息'],
        },
        {
			path: '/visitor',
			component: visitor,
			meta: ['图表', '用户分布'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['图表', '用户数据'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		},
        ]
	}
]

export default new Router({
	routes,
	//strict: process.env.NODE_ENV !== 'production',
})
