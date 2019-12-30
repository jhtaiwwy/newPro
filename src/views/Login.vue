<template>
  <div class="login" @keyup.enter="submitForm">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header">
        <h2>仁和集市超市管理系统</h2>
      </div>
      <!-- 内容
            model：表单中，收集数据的对象。所有表单上填写的值，统一汇总到model对应的对象里，方便一并提交。
            rules：表单验证规则
      -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginFormId"
        label-width="70px"
        class="demo-ruleForm"
      >
        <!-- 表单项1 -->
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 表单项2 -->
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <!-- 表单项3 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
// 引入
import { login } from "@/apis/";

export default {
  data() {
    return {
      loginForm: {
        // model属性
        username: "",
        password: ""
      },
      rules: {
        // 验证
        username: [
          /*
               required : 是否添加必填校验
               trigger :  触发方式
             */
          { required: true, message: "请输入用户名", trigger: "blur" }, // 验证规则1
          {
            min: 3,
            max: 5,
            message: "用户名长度在 3 到 5 个字符",
            trigger: "blur"
          } // 验证规则2
        ],
        password: [
          /*
               required : 是否添加必填校验
               trigger :  触发方式
             */
          { required: true, message: "请输入密码", trigger: "blur" }, // 验证规则1
          {
            min: 3,
            max: 20,
            message: "密码长度在 6 到 20 个字符",
            trigger: "blur"
          } // 验证规则2
        ]
      }
    };
  },
  methods: {
    // 登录按钮逻辑
    submitForm() {
      // this 指向当前上下文的顶级组件 Login组件

      // $refs
      // 通过$refs获取配置的ref属性的表单对象
      const form = this.$refs.loginFormId;
      // 调用element表单组件的validate手动验证方式（从上到下依次验证每一个定义了规则的单元格）
      form.validate(valid => {
        // 箭头函数自动指向上级作用域的this

        if (valid) {
          // 发ajax
          login(this.loginForm).then(data => {
            if (data.success) {
              // 存储token到本地
              localStorage.setItem('token',data.tokenId)

              // 成功提示
              this.$message({
                message: data.message,
                type: "success",
                duration: 1000, //消息提示的时间，过后自动关闭
                // 定义消息关闭的回调
                onClose: () => {
                  // 追加一个新地址
                  // this.$router.push("/home");
                  // 替换一个新地址（采纳）
                  this.$router.replace("/home");
                }
              });
            }else{
               this.$message.error(data.message);
            }
          });

          // debugger
        } else {
          // 错误提示
          this.$message.error("错了哦，这是一条错误消息");
          // console.log('error submit!!');
          // return false;
        }
      });
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!');
      //   } else {
      //     // console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less">
.login {
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .box-card {
    width: 500px;
  }
}
</style>

