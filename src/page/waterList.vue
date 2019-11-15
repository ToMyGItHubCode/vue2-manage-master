<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <!--<el-table-column
                    property="waterId"
                    label="序号">
                </el-table-column>-->
                <el-table-column
                  property="yearMonth"
                  label="年月"
                 >
                </el-table-column>
                <el-table-column
                  property="place"
                  label="地点"
                 >
                </el-table-column>
                <el-table-column
                  property="ph"
                  label="PH">
                </el-table-column>
                <el-table-column
                  property="doo"
                  label="DO">
                </el-table-column>
                <el-table-column
                  property="temperature"
                  label="水温">
                </el-table-column>
                <el-table-column
                  property="deep"
                  label="水深">
                </el-table-column>
                <el-table-column
                  property="sd"
                  label="SD">
                </el-table-column>
                <el-table-column
                  property="cod"
                  label="COD">
                </el-table-column>
                <el-table-column
                  property="nn"
                  label="硝氮">
                </el-table-column>
                <el-table-column
                  property="ynn"
                  label="亚硝氮">
                </el-table-column>
                <el-table-column
                  property="tp"
                  label="TP">
                </el-table-column>
                <el-table-column
                  property="tn"
                  label="TN">
                </el-table-column>
                <el-table-column
                  property="an"
                  label="氨氮">
                </el-table-column>
                <el-table-column
                  property="chl"
                  label="叶绿素">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="limit"
                  layout="total, prev, pager, next"
                  :page-count="pageCount"
                  :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getWaterList, getWaterCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 10,
                count: 0,
                pageCount:0,
                currentPage: 1,
            }
        },
    	components: {
    		headTop,
    	},
        created(){
            this.initData();
        },
        methods: {
            async initData(){
                try{
                    const countData = await getWaterCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getData();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getData();
            },
            async getData(){
                const data = await getWaterList({currentPage: this.currentPage, limit: this.limit});
                this.pageCount=data.totalPage;
                this.tableData = [];
                data.items.forEach(item => {
                    const tableData = {};
                    tableData.waterId = item.waterId;
                    tableData.yearMonth = item.yearMonth;
                    tableData.place = item.place;
                    tableData.ph = item.ph;
                    tableData.doo = item.doo;
                    tableData.temperature = item.temperature;
                    tableData.deep = item.deep;
                    tableData.sd = item.sd;
                    tableData.cod = item.cod;
                    tableData.nn = item.nn;
                    tableData.ynn = item.ynn;
                    tableData.tp = item.tp;
                    tableData.tn = item.tn;
                    tableData.an = item.an;
                    tableData.chl = item.chl;
                    this.tableData.push(tableData);
                })
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
