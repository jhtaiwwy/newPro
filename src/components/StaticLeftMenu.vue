<template>
  <!-- 
             default-active:当前激活菜单的 index
           background-color:菜单的背景色（仅支持 hex 格式,即16进制的3原色）
                 text-color:菜单的文字颜色（仅支持 hex 格式）
          active-text-color:当前激活菜单的文字颜色（仅支持 hex 格式）
              unique-opened:是否只保持一个子菜单的展开
  -->
  <div class="left-menu">
    <el-menu
      unique-opened
      default-active="1-1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="5">
        <template slot="title">
            <i class="el-icon-edit"></i>
            账号管理</template>
        <el-menu-item index="5-1">
            
            账号列表
        </el-menu-item>
        <el-menu-item index="5-2">账号添加</el-menu-item>
        <el-menu-item index="5-3">修改密码</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-food"></i>
          商品管理
          </template>
        <el-menu-item index="6-1">商品列表</el-menu-item>
        <el-menu-item index="6-2">商品添加</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-shop"></i>
          商家管理</template>
        <el-menu-item index="7-1">商家列表</el-menu-item>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          统计报表</template>
        <el-menu-item index="8-1">销售报表</el-menu-item>
        <el-menu-item index="8-2">库存报表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
    .left-menu{
        .el-menu{
            border:0;
        }
    }
</style>