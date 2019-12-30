<template>
  <div class="account-list">
    <!-- 账号列表容器 -->
    <el-card class="box-card">
      <!-- 标题 -->
      <div slot="header" class="clearfix">
        <h3>账号列表</h3>
      </div>
      <!-- 正文 -->
      <el-table @selection-change="handleSelectionChange" :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- <el-table-column prop="id" label="编号" width="50"></el-table-column> -->
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="date" label="录入时间"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件
          current-page ： 当前页码
          page-sizes ：  可以动态选择每页长度值（下拉框）
          page-size ：   默认每页长度值
          total ：       符合条件的总记录数
          layout ：      组件内容的布局顺序

      -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <div style="margin-top: 20px">
        <el-button size="mini" type="danger" @click="batchDelete()">批量删除</el-button>
        <el-button size="mini" @click="clearSelection()">取消选择</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // 当前页
      pageSize: 5, // 每页长度，即每页显示的最大条数
      total: 30, // 符合条件的总条数

      ids: [], // 创建一个属性来收集已选中的id
      tableData: [
        {
          id: 1,
          username: "王小虎",
          email: "wxh@qq.com",
          date: "2016-05-02",
          role: "超级管理员"
        },
        {
          id: 2,
          username: "王老虎",
          email: "wlh@qq.com",
          date: "2017-05-02",
          role: "普通员工"
        },
        {
          id: 3,
          username: "小强",
          email: "xq@qq.com",
          date: "2018-05-02",
          role: "普通员工"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(selectedRows) {
      this.ids = selectedRows.map(row => row.id); // function(row){ return row.id }
    },
    //  分页组件相关
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    batchDelete(){

    },
    clearSelection(){

    }
  }
};
</script>

<style lang="less">
.account-list {
  .el-pagination {
    margin-top: 15px;
  }
}
</style>
