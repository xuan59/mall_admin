<template>
    <div style="height:100%;overflow: hidden;">
        <el-container>
            <el-header>
                <div class="horizontal-vertical-center">
                    <img style="height:40px" src="../../assets/logo.png">
                    <h2>商品管理系统</h2>
                    <div @click="isClose" class="collapse-off">
                        <i :class="this.isOpen"></i>
                    </div>
                </div>
                <div class="horizontal-vertical-center">
                    <el-dropdown  trigger="click" @command="handleCommand">
                        <span class="username">
                            <i class="el-icon-user-solid"></i>
                            {{ userName }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="a">个人信息</el-dropdown-item>
                            <el-dropdown-item command="a">修改密码</el-dropdown-item>
                            <el-dropdown-item command="a">系统设置</el-dropdown-item>
                            <el-dropdown-item command="b" divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-container class="main-aside">
                <el-aside class="menu-aside" width="auto">
                    <div class="aside-top">
                            <!-- <img v-show="!isCollapse" src="../../assets/logo.png"> -->
                            <!-- {{ time }} -->
                    </div>
                    <el-menu
                    default-active="1"
                    @open="handleOpen"
                    @close="handleClose"
                    class="el-menu-vertical-demo"
                    :collapse="isCollapse"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">导航一</span>
                            </template>
                            <el-menu-item-group>
                            <span slot="title">分组一</span>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                            <span slot="title">选项4</span>
                            <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title">导航四</span>
                        </el-menu-item>
                        <!-- <el-menu-item @click="isClose">
                            <i :class="this.isOpen"></i>
                        </el-menu-item> -->
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        </el-breadcrumb>
                        <el-divider></el-divider>
                        <div style="min-width: 800px;">
                            <router-view />
                        </div>
                    </el-main>
                    <el-footer class="menu-footer">Copyright © 2021-2021 拥有所有版权</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
        
<script>
export default {
    data(){
        return {
            isCollapse: false,
            isOpen: 'el-icon-s-fold',
            userName: 'admin',
            times: '',
            time: '',
        }
    },
    watch:{
        
    },
    methods:{
         handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        isClose(){
            if(this.isCollapse){
                this.isCollapse = false;
                this.isOpen = 'el-icon-s-fold';
            }else{
                this.isCollapse = true;
                this.isOpen = 'el-icon-s-unfold';
            }
        },
        // getTime(){
        //     this.time = this.$moment(new Date()).format('YYYY-MM-YY h:mm:ss')
        // },
        handleCommand(){

        }
    },
    created(){
        // this.times = setInterval(this.getTime, 1000);
    },
    destroyed(){
        // clearInterval(this.times);
    }
}
</script>

<style scoped>
@import '../../common/menuStyle.css';
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-aside, .el-container{
    height: 100%;
}
.el-aside{
    background-color: #545c64;
    text-align: center;
    width: 200px;
}
.aside-top{
    /* height: 100px; */
    padding: 10px 0px 10px 0px;
    color: #ffffff;
}
.main-aside{
    height: calc(100% - 60px);
}

.el-header{
    height: 60px;
    background-color: #545c64;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu-footer{
    color: #b1b1b1;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-family: cursive;
}
 i{
     color: #ffffff;
 }
 .el-menu {
     border: none;
 }
 .collapse-off{
    padding:15px;
    display: flex;
    justify-content: left;
    align-items: left;
    font-size: 25px;
 }
 .username{
     color: #ffffff;
 }


        
</style>

