<template>
  <!-- 
             default-active:默认激活菜单的 index
           background-color:菜单的背景色（仅支持 hex 格式,即16进制的3原色）
                 text-color:菜单的文字颜色（仅支持 hex 格式）
          active-text-color:当前激活菜单的文字颜色（仅支持 hex 格式）
              unique-opened:是否只保持一个子菜单的展开
                    router :	是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
  -->
  <div class="left-menu">
    <!-- <h3 class="title">仁和超市管理系统</h3> -->
    <el-menu
      :default-active="$route.path"
      unique-opened
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- 循环菜单根节点
          index：菜单的唯一标识，控制菜单的展开和关闭状态该
       -->
       <el-menu-item index="home" :disabled="'/home'===$route.path">
          <i class="el-icon-s-home"></i>
           首页
        </el-menu-item>
      <el-submenu v-for="tree in treelist" :key="tree.id" :index="tree.index" >
        <!-- 根菜单名称 -->
        <template slot="title">
            <i :class="tree.cls"></i>
            <span>{{tree.title}}</span>
        </template>
        <!-- 循环子菜单
            item.index===$route.path  : 把当前菜单的index和路由中激活路线的path进行对比，如果当前菜单就是路由激活的菜单，则禁用
         -->
        <el-menu-item v-for="item in tree.children" :key="item.id" :index="item.index" :disabled="item.index===$route.path">
           {{item.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // 动态菜单创建
      treelist: [
        {
          id:1,
          index: "1",
          cls: "el-icon-s-cooperation",
          title: "商品管理",
          children: [
            { index: "/home/productlist", name: "商品管理" },
            { index: "/home/productadd", name: "添加管理" }
          ]
        },
        {
          id:2,
          index: "2",
          cls: "el-icon-s-goods",
          title: "账号管理",
          children: [
            { index: "/home/accountlist", name: "账号管理" },
            { index: "/home/accountadd", name: "增加账号" },
            { index: "/home/passwordchange", name: "修改密码" },
          ]
        },
        {
          id:3,
          index: "3",
          cls: "el-icon-s-data",
          title: "统计管理",
          children: [
            { index: "/home/sta", name: "销售统计" },
            { index: "/home/stocksta", name: "进货统计" }
          ]
        },
        {
          id:4,
          index: "4",
          cls: "el-icon-s-custom",
          title: "会员管理",
          children: [
            { index: "/home/x", name: "会员管理" },
            { index: "/home/x", name: "添加会员" }
          ]
        }
      ]
    }
  },
  // created(){
  //   debugger
  // }
};
</script>

<style lang="less">

    .left-menu{
      .title{
        color: #fff;
      }
        .el-menu{
            border:0;
        }
        .is-disabled{
          color: #fff;
        }
    }
</style>