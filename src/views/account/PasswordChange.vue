<template>
  <div class="password-change">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>修改密码</h3>
      </div>
      <!-- 表单  -->
      <el-form
        :model="changeForm"
        :rules="rules"
        ref="changeForm"
        label-width="80px"
      >
        <el-form-item label="原密码" prop="oldPassword">
          <el-input type="password" v-model="changeForm.oldPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input type="password" v-model="changeForm.newPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="changeForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import Button from '../button.js'
// const Button = require('../button.js')

export default {
    data(){
        const validateOldPass = function(rule,value,callback){
            // 不成立
            // callback(new Error('错误原因'))

            // 成立
            callback();
        }

        return {
            // 表单对象
            changeForm:{
                oldPassword:'',   // 初始化表单数据
                newPassword:'',
                checkPass:''
            },
            // 验证规则
            rules:{
                oldPassword:[
                    // validator ：  验证者/验证器
                    // trigger   :   验证触发方式
                    { validator: validateOldPass,  trigger: "blur"  }
                ]
            }
        }
    },
    methods:{
        // 提交表单
        submitForm(){

        },
        // 重置表单
        resetForm(){

        }
    }
};

</script>

<style>
</style>