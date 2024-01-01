<template>
  <div class="category-page">
    <el-row :gutter="20">
      <el-col :span="2">
        <div class="left">
          <div class="search">类别</div>
          <div class="category-list">
            <div v-for="item in 15" :key="item" class="item">历史</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="right">
          <div class="top">
            <el-input
              v-model="inputCategory"
              placeholder="请输入搜索内容"
              :suffix-icon="Search"
            />
          </div>
          <div class="contain"></div></div
      ></el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";

const inputCategory = ref("");
</script>
<style scoped lang="less">
.category-page {
  padding: 5px 15px;
  border: 1px solid #000;
  .left {
    height: 100%;
    text-align: center;
    .search {
      font-size: 24px;
    }
    .category-list {
      margin-top: 10px;
      .item {
        font-size: 18px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
  }
  .right {
    height: 100vh;
  }
}
</style>
