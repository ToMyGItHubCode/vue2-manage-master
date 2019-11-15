<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%;background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item class="myItem" index="manage" ><i class="el-icon-menu"></i><span style="font-size: 16px;color: #fafafa">首页</span></el-menu-item>
					<el-submenu index="2" style="background-color: #324157;">
						<template slot="title"><i class="el-icon-document"></i><span style="font-size: 16px;color: #fafafa">吉安环境监测数据</span></template>
						<el-menu-item index="airList" ><span style="font-size: 16px;color: #fafafa">空气污染指标数据</span></el-menu-item>
						<el-menu-item index="waterList"><span style="font-size: 16px;color: #fafafa">水质污染指标数据</span></el-menu-item>
						<el-menu-item index="foodList"><span style="font-size: 16px;color: #fafafa">土质污染量指标数据</span></el-menu-item>
						<el-menu-item index="noiseList"><span style="font-size: 16px;color: #fafafa">噪声污染指标数据</span></el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i><span style="font-size: 16px;color: #fafafa">添加数据</span></template>
						<el-menu-item index="addAir"><span style="font-size: 16px;color: #fafafa">空气数据新增</span></el-menu-item>
						<el-menu-item index="addWater"><span style="font-size: 16px;color: #fafafa">水质数据新增</span></el-menu-item>
						<el-menu-item index="addNoise"><span style="font-size: 16px;color: #fafafa">土质数据新增</span></el-menu-item>
						<el-menu-item index="addNoise"><span style="font-size: 16px;color: #fafafa">噪声数据新增</span></el-menu-item>
					</el-submenu>
                    <el-submenu index="4">
                        <template slot="title"><i class="el-icon-user-solid"></i><span style="font-size: 16px;color: #fafafa">学生资源管理</span></template>
                        <el-menu-item index="studentList"><span style="font-size: 16px;color: #fafafa">查询学生信息</span></el-menu-item>
                        <el-menu-item index="addStudent"><span style="font-size: 16px;color: #fafafa">新增学生信息</span></el-menu-item>
                        <el-menu-item index="addWater"><span style="font-size: 16px;color: #fafafa">修改学生信息</span></el-menu-item>
                        <el-menu-item index="addNoise"><span style="font-size: 16px;color: #fafafa">删除学生信息</span></el-menu-item>
                    </el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-s-data"></i><span style="font-size: 16px;color: #fafafa">数据可视化</span></template>
						<el-menu-item index="visitor"><span style="font-size: 16px;color: #fafafa">用户分布</span></el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-edit"></i><span style="font-size: 16px;color: #fafafa">编辑</span></template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="vueEdit"><span style="font-size: 16px;color: #fafafa">文本编辑</span></el-menu-item>
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-setting"></i><span style="font-size: 16px;color: #fafafa">设置</span></template>
						<el-menu-item index="adminSet"><span style="font-size: 16px;color: #fafafa">管理员设置</span></el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="8">
						<template slot="title"><i class="el-icon-warning"></i><span style="font-size: 16px;color: #fafafa">说明</span></template>
                        <el-menu-item index="explain"><span style="font-size: 16px;color: #fafafa">说明</span></el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" >
	@import '../style/common';
	.manage_page{
	}
</style>
