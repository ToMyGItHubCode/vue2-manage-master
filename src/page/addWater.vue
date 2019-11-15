<template>
    <div>
        <head-top></head-top>
        <el-row style="margin-top: 20px;">
  			<el-col :span="12" :offset="4">
		        <el-form :model="formData" :rules="rules" ref="formData" label-width="110px" class="demo-formData">
					<el-form-item label="年月" prop="yearMonth">
						<el-input v-model="formData.yearMonth" placeholder="xx年xx月"></el-input>
					</el-form-item>

                    <el-form-item label="地点" prop="place">
                        <el-input v-model="formData.place"></el-input>
                    </el-form-item>

                    <el-form-item label="PH" prop="ph">
                        <el-input v-model="formData.ph"></el-input>
                    </el-form-item>

                    <el-form-item label="DO" prop="doo">
                        <el-input v-model="formData.doo"></el-input>
                    </el-form-item>

                    <el-form-item label="水温" prop="temperature">
                        <el-input v-model="formData.temperature"></el-input>
                    </el-form-item>

                    <el-form-item label="水深" prop="deep">
                         <el-input v-model="formData.deep"></el-input>
                    </el-form-item>

                    <el-form-item label="SD" prop="sd">
                        <el-input v-model="formData.sd"></el-input>
                    </el-form-item>


                    <el-form-item label="COD" prop="cod">
                        <el-input v-model="formData.cod"></el-input>
                    </el-form-item>

                    <el-form-item label="硝氮" prop="nn">
                        <el-input v-model="formData.nn"></el-input>
                    </el-form-item>

                    <el-form-item label="亚硝氮" prop="ynn">
                        <el-input v-model="formData.ynn"></el-input>
                    </el-form-item>

                    <el-form-item label="TP" prop="tp">
                        <el-input v-model="formData.tp"></el-input>
                    </el-form-item>

                    <el-form-item label="TN" prop="tn">
                        <el-input v-model="formData.tn"></el-input>
                    </el-form-item>

                    <el-form-item label="氨氮" prop="an">
                        <el-input v-model="formData.an"></el-input>
                    </el-form-item>

                    <el-form-item label="叶绿素" prop="chl">
                        <el-input v-model="formData.chl"></el-input>
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
    import {addWater} from '@/api/getData'
    export default {
    	data(){
    		return {
    			formData: {
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

		        },
		       rules: {
                   yearMonth: [
						{ required: true, message: 'xx年xx月', trigger: 'blur' },
					],
					/*address: [
						{ required: true, message: '请输入详细地址', trigger: 'blur' }
					],
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
                    const data = await addWater(this.formData);
                    if (data.status == '1') {
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
