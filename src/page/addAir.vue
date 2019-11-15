<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="12" :offset="4">
		        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="年月" prop="yearMonth">
						<el-input v-model="formData.yearMonth" placeholder="xx年xx月"></el-input>
					</el-form-item>

                    <el-form-item label="AQI" prop="aqi">
                        <el-input v-model="formData.aqi"></el-input>
                    </el-form-item>

                    <el-form-item label="范围" prop="scope">
                        <el-input v-model="formData.scope" placeholder="格式为：xx~xx"></el-input>
                    </el-form-item>

                    <el-form-item label="质量等级" prop="qualityLevel">
                        <el-input v-model="formData.qualityLevel" placeholder="客观性评价"></el-input>
                    </el-form-item>

                    <el-form-item label="PM2.5" prop="pm25">
                        <el-input v-model="formData.pm25"></el-input>
                    </el-form-item>

                    <el-form-item label="PM10" prop="pm10">
                         <el-input v-model="formData.pm10"></el-input>
                    </el-form-item>

                    <el-form-item label="SO2" prop="so2">
                        <el-input v-model="formData.so2"></el-input>
                    </el-form-item>


                    <el-form-item label="CO" prop="co">
                        <el-input v-model="formData.co"></el-input>
                    </el-form-item>

                    <el-form-item label="NO2" prop="no2">
                        <el-input v-model="formData.no2"></el-input>
                    </el-form-item>

                    <el-form-item label="O3" prop="o3">
                        <el-input v-model="formData.o3"></el-input>
                    </el-form-item>

                    <el-form-item class="button_submit">
                        <el-button type="primary" @click="submitForm('formData')">立即创建</el-button>
                    </el-form-item>

				</el-form>
  			</el-col>
  		</el-row>
    </div>
</template>

<script>
    import headTop from '@/components/headTop'
    import {addAir} from '@/api/getData'
    export default {
    	data(){
    		return {
    			formData: {
                    aqi: '',
                    yearMonth: '',
                    scope: '',
                    qualityLevel: '',
                    pm25: '',
                    pm10: '',
                    so2: '',
                    co: '',
                    no2: '',
                    o3: '',
		        },
		       rules: {
                   yearMonth: [
						{ required: true, message: 'xx年xx月', trigger: 'blur' },
					],
                   pm25: [
                       { type: 'number', message: '提示：数据不能为小数' }
                   ],
                   pm10: [
                       { type: 'number', message: '提示：数据不能为小数' }
                   ],
                   so2: [
                       { type: 'number', message: '提示：数据不能为小数' }
                   ],
                   no2: [
                       { type: 'number', message: '提示：数据不能为小数' }
                   ],
                   o3: [
                       { type: 'number', message: '提示：数据不能为小数' }
                   ],
					/*
					phone: [
						{ required: true, message: '请输入联系电话' },
						{ type: 'number', message: '电话号码必须是数字' }
					],*/
				},
    		}
    	},
    	components: {
    		headTop,
    	},
    	mounted(){
    		this.initData();
    	},
    	methods: {
    		async initData(){
    		},
			tableRowClassName(row, index) {
		        if (index === 1) {
		        	return 'info-row';
		        } else if (index === 3) {
		        	return 'positive-row';
		        }
		        return '';
		    },
		    handleDelete(index){
		    	this.activities.splice(index, 1)
		    },
            async submitForm(formName){
                try{
                    const data = await addAir(this.formData);
                    if (data.status == '1') {
                        this.$message({
                            type: 'success',
                            message: '添加成功'
                        });
                        this.formData = {
                            aqi: '',
                            yearMonth: '',
                            scope: '',
                            qualityLevel: '',
                            pm25: '',
                            pm10: '',
                            so2: '',
                            co: '',
                            no2: '',
                            o3: '',
                        };
                    }else{
                        this.$message({
                            type: 'error',
                            message: '系统网络繁忙'
                        });
                    }
                    console.log(result)
                }catch(err){
                    console.log(err)
                }
            },
		  /*  Form(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						Object.assign(this.formData, {activities: this.activities}, {
							category: this.selectedCategory.join('/')
						})
						try{
							let result = await addWater(this.formData);
							if (result.status == 1) {
								this.$message({
					            	type: 'success',
					            	message: '添加成功'
					          	});
					          	this.formData = {
                                    yearMonth: '',
                                    place: '',
                                    ph: '',
                                    doo: '',
                                    temperature: '',
                                    deep: '',
                                    sd: '',
                                    cod: '',
                                    nn: '',
                                    ynn: '',
                                    tp: '',
                                    tn: '',
                                    an: '',
                                    chl: '',
						        };
							}else{
								this.$message({
					            	type: 'error',
					            	message: result.message
					          	});
							}
							console.log(result)
						}catch(err){
							console.log(err)
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请检查输入是否正确',
							offset: 100
						});
						return false;
					}
				});
			},*/
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.button_submit{
		text-align: center;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	}
	.avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	}
	.el-table .info-row {
	    background: #c9e5f5;
	}

	.el-table .positive-row {
	    background: #e2f0e4;
	}
</style>
