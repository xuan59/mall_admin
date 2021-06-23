<template>
    <div>
        <el-row>
            <el-col :span="12">
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-col>
            <el-col :span="12">
                  <el-tabs v-model="activeName" type="card" @tab-click="handleTabClick">
                    <el-tab-pane label="编辑" name="update"></el-tab-pane>
                    <el-tab-pane label="新增" name="insert"></el-tab-pane>
                </el-tabs>
                <el-form :model="menuForm" :rules="rules" ref="menuForm" label-width="100px">
                    <el-form-item label="上级编号">
                        <el-input v-model="menuForm.parentMenuNo" size="small" disabled></el-input>
                    </el-form-item>
                    <el-form-item v-show="activeName == 'update'" label="菜单编号" prop="name">
                        <el-input v-model="menuForm.menuNo" size="small" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="菜单名称" prop="menuName">
                        <el-input v-model="menuForm.menuName" size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单路径" prop="menuPath">
                        <el-input v-model="menuForm.menuPath" size="small"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单等级" prop="menuLevel" size="small">
                        <el-select v-model="menuForm.menuLevel" placeholder="请选择菜单等级">
                            <el-option label="1" value="1"></el-option>
                            <el-option label="2" value="2"></el-option>
                            <el-option label="3" value="3"></el-option>
                            <el-option label="4" value="4"></el-option>
                            <el-option label="5" value="5"></el-option>
                            <el-option label="6" value="6"></el-option>
                            <el-option label="7" value="7"></el-option>
                            <el-option label="8" value="8"></el-option>
                            <el-option label="9" value="9"></el-option>
                            <el-option label="10" value="10"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="是否生效" prop="takeEffect">
                        <el-switch v-model="takeEffect" active-color="#13ce66"></el-switch>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('menuForm')">保存</el-button>
                        <el-button type="danger" @click="handleDelete">删除</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
        
<script>
export default {
    data(){
        return {
            data: [],
            defaultProps: {
                children: 'child',
                label: 'menuName'
            },
            activeName: 'update',
            menuForm: {
                menuNo: '',
                menuName: '',
                menuPath: '',
                menuLevel: '',
                parentMenuNo: '',
                takeEffect: true,
                systemNo: '10002',
                createUserNo: '000000'
            },
            takeEffect: true,
            selectedNode: '',
            rules: {
                menuName: [
                    { required: true, message: '请输入菜单名称', trigger: 'blur' },
                ],
                menuPath: [
                    { required: true, message: '请输入菜单路径', trigger: 'blur' },
                ],
                menuLevel: [
                    { required: true, message: '请输入菜单路径', trigger: 'blur' },
                ],
            }
        }
    },
    watch:{
        
    },
    methods:{

        //初始化查询
        init(){
            this.request.post('menuResource/selectList').then(res => {
                if(res && res.resList != undefined){
                    this.data = res.resList;
                }
            });
            
        },
        
        //选择节点
        handleNodeClick(data) {
            this.menuForm = JSON.parse(JSON.stringify(data));
            this.activeName = 'update';
            this.selectedNode = data;
            this.takeEffect = data.takeEffect == 1? true : false;
        },
        //选择tab
        handleTabClick(tab, event) {
            if(this.activeName == 'update'){
                this.menuForm = JSON.parse(JSON.stringify(this.selectedNode));
                this.takeEffect = this.menuForm.takeEffect == 1? true : false;
            }else{
                this.$refs['menuForm'].resetFields();
                this.menuForm.parentMenuNo = this.selectedNode.menuNo
                this.takeEffect = true
            }
        },
        //删除节点
        handleDelete(){
            this.request('menuResource/delete', this.menuForm);
        },
        //保存节点
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.menuForm.takeEffect = this.takeEffect == true? 1 : 2;
                    this.request.post('menuResource/' + this.activeName, this.menuForm).then(res =>{
                        if(res.status == 'SUCCESS'){
                            this.$message({
                                message: '成功',
                                type: 'success'
                            });
                            this.init();
                        }else{
                            this.$message.error(res.data.resMsg);
                        }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
    },
    created(){
       this.init()
    },
}
</script>

<style lang="scss" scoped>
.el-select,.el-input{
    min-width: 100px;
    max-width: 300px;
}
.el-form-item{
    text-align: left;
}

/deep/ .el-tree-node__label {
    font-size: 16px;
}
/deep/ .el-tree-node__content {
    padding: 5px;
}

</style>