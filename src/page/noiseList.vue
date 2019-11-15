<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                    property="noiseId"
                    label="序号">
                </el-table-column>
                <el-table-column
                  property="yearMonth"
                  label="年月"
                 >
                </el-table-column>
                <el-table-column
                  property="ground"
                  label="田径场"
                 >
                </el-table-column>
                <el-table-column
                  property="library"
                  label="新图书馆">
                </el-table-column>
                <el-table-column
                  property="sounth"
                  label="南大门">
                </el-table-column>
                <el-table-column
                  property="sleeppingRoom"
                  label="28栋宿舍">
                </el-table-column>
                <el-table-column
                  property="north"
                  label="北大门">
                </el-table-column>
                <el-table-column
                  property="eatingOne"
                  label="一食堂">
                </el-table-column>
                <el-table-column
                  property="teachingRoom"
                  label="九栋教学楼">
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
    import {getNoiseList, getNoiseCount} from '@/api/getData'
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
                    const countData = await getNoiseCount();
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
                const data = await getNoiseList({currentPage: this.currentPage, limit: this.limit});
                this.pageCount=data.totalPage;
                this.tableData = [];
                data.items.forEach(item => {
                    const tableData = {};
                    tableData.noiseId = item.noiseId;
                    tableData.yearMonth = item.yearMonth;
                    tableData.sounth = item.sounth;
                    tableData.ground = item.ground;
                    tableData.library = item.library;
                    tableData.teachingRoom = item.teachingRoom;
                    tableData.sleeppingRoom = item.sleeppingRoom;
                    tableData.north = item.north;
                    tableData.eatingOne = item.eatingOne;
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
