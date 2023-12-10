<template>
  <div class="novel-card">
    <div class="picture">
      <img src="../../../assets/4K.jpg" alt="" />
    </div>
    <div class="content">
      <div class="title">
        <el-tooltip
          content="1.古灵精怪的可爱的白色的调皮的淘气猫"
          placement="top"
          effect="light"
        >
          1.古灵精怪的可爱的...
        </el-tooltip>
      </div>
      <div class="author">作者：余华</div>
      <div class="size">大小：1.5Mb</div>
      <div class="upload">
        <div class="uploader">上传人：admin</div>
        <div class="upload-time">2023-12-11</div>
      </div>
      <div class="category">分类：爱情</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
</script>
<style scoped lang="less">
.novel-card {
  background-color: #fff;
  height: 100%;
  display: flex;
  .picture {
    flex: 3;
    img {
      height: 100%;
      width: 100%;
      padding: 1px;
    }
  }
  .content {
    flex: 7;
    text-align: left;
    padding: 15px 5px;
    font-size: 14px;
    &:hover {
      background-color: #eef4fa;
    }
    .title {
      font-size: 20px;
      font-weight: 700;
    }
    .author {
    }
    .upload {
      display: flex;
      .uploader {
        flex: 5;
        color: #916957;
      }
      .upload-time {
        flex: 5;
        text-align: right;
        color: #916957;
      }
    }
  }
}
</style>
