<template>
  <div class="account-add">
    <el-card class="box-card">
      <!--  标题 -->
      <div slot="header" class="clearfix">
        <h3>账户添加</h3>
      </div>
      <!--  正文 -->
      <!-- 
        model： 表单数据对象
        rules:  表单验证规则
        ref  :  设置唯一标识（将来：this.$refs.addAccountForm获取到表单对象）
        label-width ：  表单项目的label（标签）宽度
      -->
      <el-form :model="accountForm" :rules="rules" ref="addAccountForm" label-width="80px">
        <el-form-item label="账户" prop="username">
          <el-input type="text" v-model="accountForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="accountForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="accountForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="password" v-model="accountForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select v-model="accountForm.role" placeholder="请选择用户角色">
            <el-option label="超级管理员" value="超级管理员"></el-option>
            <el-option label="普通员工" value="普通员工"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">添加</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import axios from "axios";
// import { accountAdd } from "@/apis/account";

export default {
  data() {
    //   debugger
    /**
     * data函数的this            ： 当前组件
     * validatePass函数的this    ： 第一个参数，当前验证的rule对象
     *
     * this的使用
     *       方式一： 使用箭头函数，自动绑定上级作用域（分场景）
     *       方式二： 上一级作用域，缓存this
     */
    // 缓存this
    const accountAddComp = this;

    // 自定义的密码验证规则 // field,value,callback
    const validatePass = (rules, value, callback) => {
      debugger;
      if (value === "") {
        // 为空进去
        callback(new Error("密码不能为空！"));
      } else if (!/^[0-9|a-z|A-Z]+/.test(value)) {
        // 验证失败
        callback(new Error("密码必须为数组或字母！"));
      } else if (value != accountAddComp.accountForm.checkPass) {
        // 密码和确认密码验证
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };
    // 自定义的确认密码验证规则
    const validatePass2 = function(rules, value, callback) {
      if (value === "") {
        // 为空进去
        callback(new Error("确认密码不能为空！"));
      } else if (!/^[0-9|a-z|A-Z]+/.test(value)) {
        // 验证失败
        callback(new Error("确认密码必须为数组或字母！"));
      } else if (value != accountAddComp.accountForm.password) {
        // 密码和确认密码验证
        callback(new Error("两次密码不一致！"));
      } else {
        callback();
      }
    };

    return {
      // 初始表单对象
      accountForm: {
        username: "",
        password: "",
        checkPass: "",
        email: "",
        role: ""
      },
      rules: {
        // 验证字段名称：值是数组
        username: [
          { required: true, message: "请输入账户信息", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          // { required: true, message: '请输入账户信息', trigger: 'blur' },
          //  validator: 自定义的验证函数
          { validator: validatePass, trigger: "blur" }
        ],
        checkPass:[
            //  validator: 自定义的验证函数
            { validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods:{
    submitForm(){
      // axios.post('http://172.16.12.254:666/account/add',xxx).then((data)=>{data.data})
      // accountAdd(xxx).then(data=>xxxx)
    }
  }
};
</script>

<style>
</style>