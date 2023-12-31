<template>
  <div class="category-page">
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="left">
          <div class="search">搜索</div>
          <div class="category-list">
            <div class="item">item</div>
          </div>
        </div>
      </el-col>
      <el-col :span="17"> <div class="right">right</div></el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style scoped lang="less">
.category-page {
  padding: 5px 15px;
  border: 1px solid #000;
  .left {
  }
  .right {
  }
}
</style>
