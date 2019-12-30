            
<template>
  <div class="-manage">
    <el-table :data="tableData" style="width: 100%">
      <!-- 下拉框 可以展开 -->
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="商品ID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="商品名称">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="商品分类">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="商品特色">
              <span>{{ props.row.feature | renderFeature}}</span>
            </el-form-item>
            <el-form-item label="是否促销">
              <span>{{ props.row.isPromotion }}</span>
            </el-form-item>
            <el-form-item label="商品包装费">
              <span>{{ props.row.packingexpense}}</span>
            </el-form-item>
            <el-form-item label="商品单价">
              <span>{{ props.row.price}}</span>
            </el-form-item>
            <el-form-item label="商品描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <!-- 其他显示的选项 -->
      <el-table-column label="商品 ID" prop="id"></el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="描述" prop="desc"></el-table-column>
      <el-table-column label="录入时间" prop="inputtime" :formatter="formateDate"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDel(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <div style="margin-top: 20px; padding: 10px;">
      <el-pagination
        :current-page="currentPage"
        layout="total, prev, pager, next, jumper"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { productList } from "@/apis/product";
import moment from "moment";

export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          id: 1,
          // imgUrl: "2",
          name: "3",
          category: "4",
          feature: "5",
          isPromotion: "6",
          packingexpense : "7",
          price: "8",
          desc: "9",
          inputtime:'2019-11-11'
        }
      ],
      currentPage: 1,
      total: 0,
      pageSize: 3,
      dialogFormVisible: true
    };
  },
  methods:{
    // 录入时间格式化函数
    formateDate(row, column, cellValue){
      // const value =   moment(cellValue).format('YYYY-MM-DD');
      // 使用日期处理函数，格式化日期
      // moment(待处理的值).format(格式化语法);
      const value =   moment(cellValue).format('YYYY年MM月DD日 HH:mm');
      return value;
    }
  },
  // 加载数据的生命周期
  mounted(){
    console.log('自动加载，在mounted生命周期中发请求....')
    // 在页面加载完毕后，请求数据，并渲染到页面
    productList().then((data)=>{
      // 把请求结果，更新到页面
      this.tableData = data;
    })
  },
  // 定义过滤器
  filters:{
    // 过滤器名称 : 过滤方法
      //  参数1： 待处理的值
    renderFeature(value){ 
      // 如果值存在
      if(value){
        // 把符合数组格式的字符串，先转为数组对象，再拆分拼接为字符结果
        return JSON.parse(value).join('、')
      }
    }
  }
};
</script>

<style lang="less" scoped>
.-manage {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
}
</style>