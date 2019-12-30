<template>
  <div class="product-add">
    <el-card class="box-card">
      <div slot="header">
        <h1>添加商品</h1>
      </div>
      <div>
        <!-- 添加商品表单 -->
        <el-form
          size="small"
          :model="AddForm"
          style="width: 560px;"
          ref="AddForm"
          label-width="80px"
        >
          <!-- 名称 -->
          <el-form-item label="商品名称">
            <el-input v-model="AddForm.name"></el-input>
          </el-form-item>

          <!-- 分类 -->
          <el-form-item label="商品分类">
            <el-select v-model="AddForm.category" placeholder="请选择商品分类">
              <el-option label="热销" value="热销"></el-option>
              <el-option label="咖啡" value="咖啡"></el-option>
              <el-option label="热菜" value="热菜"></el-option>
              <el-option label="凉菜" value="凉菜"></el-option>
              <el-option label="饮品" value="饮品"></el-option>
              <el-option label="火锅" value="火锅"></el-option>
            </el-select>
          </el-form-item>

          <!-- 特色 -->
          <el-form-item label="商品特色">
            <el-checkbox-group v-model="AddForm.feature">
              <el-checkbox label="新品上市" name="feature"></el-checkbox>
              <el-checkbox label="第二单半价" name="feature"></el-checkbox>
              <el-checkbox label="主打产品" name="feature"></el-checkbox>
              <el-checkbox label="火爆产品" name="feature"></el-checkbox>
              <el-checkbox label="祖传手艺" name="feature"></el-checkbox>
              <el-checkbox label="源自四川" name="feature"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <!-- 文件上传 -->
          <el-form-item label="商品图片">
            <!-- 
              action : 选中时，自动上传的地址
              show-file-list ： 是否显示已上传文件列表
              on-success     :  文件上传成功时的钩子函数（即事件回调函数）	
             -->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="handleUploadSuccess"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <!-- 是否促销 -->
          <el-form-item label="是否促销">
            <el-radio-group v-model="AddForm.isPromotion">
              <el-radio label="促销"></el-radio>
              <el-radio label="不促销"></el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 单规格:   的 包装费 和 价格 -->
          <!-- 单规格的包装费 -->
          <el-form-item label="包装费">
            <el-input-number v-model="AddForm.packingexpense" :min="0" :max="20" label="包装费"></el-input-number>
          </el-form-item>
          <!-- 单规格的价格 -->
          <el-form-item label="价格">
            <el-input-number v-model="AddForm.price" :min="20" label="价格"></el-input-number>
          </el-form-item>

          <!-- 商品描述 -->
          <el-form-item label="商品描述">
            <el-input type="textarea" v-model="AddForm.desc"></el-input>
          </el-form-item>

          <!-- 添加按钮 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm">立即添加</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
// 引入接口
import { productAdd,uploadUrl,uploadDir } from "@/apis/product";

export default {
  data() {
    return {
      uploadUrl : uploadUrl,
      // 商品表格
      AddForm: {
        name: "", // 商品名称
        category: "", // 商品分类
        feature: [], // 商品特色
        imgUrl: "", // 商品图片地址
        isPromotion: "不促销", // 是否促销
        packingexpense: "", // 包装费
        price: "", // 价格
        desc: "" // 商品描述
      },
      formLabelWidth: "120px" // 标签宽度
    };
  },
  methods: {
    // 提交添加表单
    submitForm() {
      // 提交之前，对参数做预处理
      this.AddForm.feature = JSON.stringify(this.AddForm.feature); // array-> arrString
      const that = this;

      productAdd(this.AddForm).then(data => {
        if (data.success) {
          // 成功提示
          this.$message({
            type: "success",
            duration: 1500,
            message: data.message,
            onClose() {
              that.$router.push("/home/productlist");
            }
          });
        } else {
          // 失败提示
          this.$message.error(data.message);
        }
      });
    },
    // 处理上传成功
    handleUploadSuccess(data){
      if(data.success){
        // 上传成功，把文件名称回填到数据对象中
        // 目的：将来提交可以关联图片
        this.AddForm.imgUrl = data.fileName
      }
    }
  },
  computed: {
    // 计算图片地址
    imageUrl(){
      if(this.AddForm.imgUrl){  //上传成功后可以回显
        return uploadDir+this.AddForm.imgUrl
      }else{ // 初始渲染，不显示图片
        return '';
      }
    }
  }
};
</script>

<style lang="less">
.product-add {
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>