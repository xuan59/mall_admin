<template>
    <div>
        <div class="full-justified home-top">
            <div class=" home-top-item">
                <div class="home-box home-order-amount">
                   <i class="el-icon-message-solid"></i>
                </div>
                <div class="home-top-text">
                    <p class="home-top-text-1">￥34500</p>
                    <p class="home-top-text-2">今日订单金额</p>
                    <el-progress :percentage="50"></el-progress>
                </div>
            </div>
            <div class="home-top-item">
                <div class="home-box home-order-number">
                    <i class="el-icon-s-data"></i>
                </div>
                <div class="home-top-text">
                    <p class="home-top-text-1">20000</p>
                    <p class="home-top-text-2">今日订单数量</p>
                    <el-progress :percentage="60"></el-progress>
                </div>
            </div>
            <div class="home-top-item">
                <div class="home-box home-fans-number">
                    <i class="el-icon-s-custom"></i>
                </div>
                <div class="home-top-text">
                    <p class="home-top-text-1">20000</p>
                    <p class="home-top-text-2">粉丝数量</p>
                    <el-progress :percentage="50"></el-progress>
                </div>
            </div>
        </div>
        <div>
            <div id="orderAmount"></div>
        </div>
        <div class="full-justified">
             <el-table
                :data="orderStatistics"
                :span-method="arraySpanMethod"
                :cell-style="styleBack"
                border
                :show-header=false
                style="margin-left: 10px;">
                <el-table-column
                    align="center"
                    prop="name"
                    label="ID">
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="number"
                    label="姓名">
                </el-table-column>
            </el-table>
            <el-table
                :data="orderStatistics"
                :span-method="arraySpanMethod"
                :cell-style="styleBack"
                border
                :show-header=false
                style="margin-left: 10px;">
                <el-table-column
                    align="center"
                    prop="name"
                    label="ID">
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="number"
                    label="姓名">
                </el-table-column>
            </el-table>
            <el-table
                :data="orderStatistics"
                :span-method="arraySpanMethod"
                :cell-style="styleBack"
                border
                :show-header=false
                style="margin-left: 10px;">
                <el-table-column
                    align="center"
                    prop="name"
                    label="ID">
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="number"
                    label="姓名">
                </el-table-column>
            </el-table>
            <el-table
                :data="orderStatistics"
                :span-method="arraySpanMethod"
                :cell-style="styleBack"
                border
                :show-header=false
                style="margin-left: 10px;">
                <el-table-column
                    align="center"
                    prop="name"
                    label="ID">
                </el-table-column>
                <el-table-column
                    align="center"
                    prop="number"
                    label="姓名">
                </el-table-column>
            </el-table>
        </div>
        
    </div>
</template>
        
<script>
import * as echarts from 'echarts';
export default {
    data(){
        return {
            oderAmontChart: '',
            orderStatistics: [
                {
                    name: '订单统计信息'
                },
                {
                    name: '未处理订单：',
                    number: 0
                },
                {
                    name: '待发货订单：',
                    number: 10
                },
                {
                    name: '待结算订单：',
                    number: 5
                },
                {
                    name: '交易完成订单：',
                    number: 1000
                },
                {
                    name: '取消订单订单：',
                    number: 0
                }
            ],
         
        }
    },
    watch:{
        
    },
    methods:{
        setoderAmontOption(){
            
            console.log(this.oderAmontChart)
            let option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };
            this.oderAmontChart.setOption(option);
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return [1, 2]; //合并一行2列
            }
        },
        styleBack({ row, column, rowIndex, columnIndex }){
            if (rowIndex === 0) {
                return { backgroundColor: "#f5f7fa" } //设置第一行的背景颜色
            }
        },
        
    },
    created(){
        
        
    },
    mounted(){
        this.oderAmontChart = echarts.init(document.getElementById('orderAmount'));
        this.setoderAmontOption();
        window.onresize = this.oderAmontChart.resize;
    }
}
</script>

<style scoped>
.full-justified{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.home-top{
    height: 120px;
    padding: 0 20px 20px 20px;
}
.home-top-item{
    background-color: #ffffff;
    border: #d0d0d0 1px solid;
    width: 30%;
    height: 100%;
    min-width: 240px;
}
.home-box{
    width: 40%;
    height: 100%;
    min-width: 80px;
    max-width: 350px;
    float: left;
    color: #ffffff;
    font-size: 50px;
    line-height: 120px;
}
.home-top-text{
    min-width: 60%;
    max-width: 350px;
    width: 60%;
    height: 100%;
    float: right;
    padding: 10px 0px;
}
.home-order-number{
    background-color: #6ccac9;
} 
.home-order-amount{
    /* #f8d347 */
    background-color: #ff6c60; 
}
.home-fans-number{
    background-color: #57c8f2;
}
.home-top-text-1{
    color: #666666;
    font-size: 32px;
    font-weight: normal;
    font-family: "Arial";
    margin: 0px;
}
.home-top-text-2{
    color: #666666;
    margin: 5px 0px;
}
#orderAmount{
    width: 100%;
    height: 300px;
    min-width: 150px;
    /* max-width: 260px; */
    min-height: 300px;
    max-height: 500px;
}

</style>