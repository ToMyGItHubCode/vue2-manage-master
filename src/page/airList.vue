<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                    property="airId"
                    label="序号">
                </el-table-column>
                <el-table-column
                  property="aqi"
                  label="AQI"
                 >
                </el-table-column>
                <el-table-column
                  property="yearMonth"
                  label="月份"
                 >
                </el-table-column>
                <el-table-column
                  property="scope"
                  label="范围">
                </el-table-column>
                <el-table-column
                  property="qualityLevel"
                  label="质量等级">
                </el-table-column>
                <el-table-column
                  property="pm25"
                  label="PM2.5">
                </el-table-column>
                <el-table-column
                  property="pm10"
                  label="PM10">
                </el-table-column>
                <el-table-column
                  property="so2"
                  label="SO2">
                </el-table-column>
                <el-table-column
                  property="co"
                  label="CO">
                </el-table-column>
                <el-table-column
                  property="no2"
                  label="NO2">
                </el-table-column>
                <el-table-column
                  property="o3"
                  label="O3">
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
    import {getAirList, getAirCount} from '@/api/getData'
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
                    const countData = await getAirCount();
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
                const data = await getAirList({currentPage: this.currentPage, limit: this.limit});
                this.pageCount=data.totalPage;
                this.tableData = [];
                data.items.forEach(item => {
                    const tableData = {};
                    tableData.airId = item.airId;
                    tableData.aqi = item.aqi;
                    tableData.yearMonth = item.yearMonth;
                    tableData.scope = item.scope;
                    tableData.qualityLevel = item.qualityLevel;
                    tableData.pm25 = item.pm25;
                    tableData.pm10 = item.pm10;
                    tableData.so2 = item.so2;
                    tableData.co = item.co;
                    tableData.no2 = item.no2;
                    tableData.o3 = item.o3;
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
