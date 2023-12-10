<template>
  <div class="common-layout">
    <el-container>
      <el-header class="category-header">
        <div class="category-content">
          <div class="title">分类榜单</div>
          <div class="category">
            <el-row :gutter="0">
              <el-col class="col-category" :span="6">全部·1123本</el-col>
              <el-col class="col-category" :span="6">历史·113本</el-col>
              <el-col class="col-category" :span="6">地理·123本</el-col>
              <el-col class="col-category" :span="6">音乐·23本</el-col>
              <el-col class="col-category" :span="6">人文·93本</el-col>
              <el-col class="col-category" :span="6">数学·523本</el-col>
              <el-col class="col-category" :span="6">玄幻·223本</el-col>
            </el-row>
          </div>
        </div>
      </el-header>
      <el-main class="content-rank">
        <el-row :gutter="0">
          <el-col :span="8" class="rank">
            <div class="rank-title">总阅读榜</div>
            <div class="rank-content">
              <novelCard />
            </div>
            <div class="rank-content">
              <novelCard />
            </div>
            <div class="rank-content">
              <novelCard />
            </div>
          </el-col>
          <el-col :span="8" class="rank">
            <div class="rank-title">总收藏榜</div>
            <div class="rank-content">
              <novelCard />
            </div>
            <div class="rank-content">
              <novelCard />
            </div>
            <div class="rank-content">
              <novelCard />
            </div>
          </el-col>
          <el-col :span="8" class="rank">
            <div class="rank-title">新书榜</div>
            <div class="rank-content">
              <novelCard />
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import novelCard from "../../common/component/novelsView/novelCard.vue";
</script>
<style scoped lang="less">
.common-layout {
  height: 100%;
  padding: 20px 40px;
  .category-header {
    text-align: center;
    margin-bottom: 0px;
    height: 25vh;
    overflow-y: auto;
    .category-content {
      .title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .category {
        .col-category {
          border: 1px solid #ecedf1;
          text-align: left;
          margin-bottom: 20px;
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
          cursor: pointer;
        }
        .col-category:hover {
          background-color: #eef4f9;
          border: 1px solid #e0e8f2;
        }
        .el-col {
          border-radius: 4px;
        }

        .grid-content {
          border-radius: 4px;
          min-height: 36px;
        }
      }
    }
  }
  .content-rank {
    .rank {
      text-align: center;
      .rank-title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      .rank-content {
        height: 140px;
        margin-bottom: 10px;
        margin-right: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
