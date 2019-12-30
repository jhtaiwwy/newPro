<template>
  <div class="home">
    <el-container>
      <el-aside width="210px">
        <LeftMenu />
      </el-aside>
      <el-container>
        <el-header>
          <h2>
            <i class="el-icon-s-shop"></i>
            仁和超市管理系统
          </h2>
          <div class="right-box">
            <div class="welcome">欢迎你, 小强</div>
            <div class="avatar-wrap">
              <!-- 下拉框 -->
              <el-dropdown>
                <span class="el-dropdown-link">
                  <img src="/imgs/avatar.jpg" alt />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="personal">个人中心</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>©COPYRIGHT 仁和超市 2010-2030</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LeftMenu from "@/components/LeftMenu.vue"; // 引入自定义组件

export default {
  name: "home",
  components: {
    LeftMenu // 把自定义组件注册到当前组件局部
  }
};
</script>

<style lang="less">
.home {
  height: 100%;
  // margin-top: 10px;
  // background-color: #f00;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #545c64;
    }

    .el-header,
    .el-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #242f41;
      color: #fff;
    }
    .el-header {
      display: flex;
      justify-content: space-between;
      .right-box {
        
        display: flex;
        justify-content: center;
        align-items: center;
        .welcome {
          flex: 1;
          text-align: right;
          margin-right: 10px;
          font-size: 14px;
          color: rgb(255, 255, 255);
        }
        .avatar-wrap {
          flex: 0 0 50px;
          text-align: center;

          .el-dropdown {
            width: 100%;
            height: 100%;
            .el-dropdown-link {
              display: inline-block;
              width: 100%;
              height: 50px;
              line-height: 50px;
              img {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                margin-top: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
