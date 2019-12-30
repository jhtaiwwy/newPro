<template>
  <div class="index">
    <div class="sales-data">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content">
            <div class="content">
              <div class="icon">
                <img src="/imgs/order1.svg" alt />
              </div>
              <div class="text">
                <ul>
                  <li class="title">总订单</li>
                  <li class="num">102,400</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="content">
              <div class="icon">
                <img src="/imgs/money1.svg" alt />
              </div>
              <div class="text">
                <ul>
                  <li class="title">总销售额</li>
                  <li class="num">102,400</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="content">
              <div class="icon">
                <img src="/imgs/order2.svg" alt />
              </div>
              <div class="text">
                <ul>
                  <li class="title">今日订单数</li>
                  <li class="num">102,400</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="content">
              <div class="icon">
                <img src="/imgs/money2.svg" alt />
              </div>
              <div class="text">
                <ul>
                  <li class="title">今日销售额</li>
                  <li class="num">102,400</li>
                </ul>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div id="sales-charts" class="sales-charts" style="width: 100%; height: 360px;"></div>
  </div>
</template>

<script>
export default {
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.index {
  height: 100%;
  .sales-data {
    height: 100px;
    .grid-content {
      height: 100px;
      background-color: #ffffff;
      text-align: center;
      // padding: 20px;
      .content {
        height: 100px;
        display: flex;
        align-items: center;
        .icon {
          // flex: 1;
          width: 140px;
          img {
            width: 80px;
            height: 80px;
          }
        }
        .text {
          text-align: left;
          flex: 1;
          color: #333;
          ul {
            list-style: none;
            padding-left: 0px;
            li {
              line-height: 30px;
              &.title {
                font-size: 20px;
                color: #ccc;
                font-weight: 500;
              }
              &.num {
                font-size: 18px;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }

}
</style>