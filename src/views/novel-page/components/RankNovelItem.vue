<template>
  <div class="rank-novel-item">
    <div class="contain">
      <el-row :gutter="20">
        <el-col :span="7">
          <div class="left">
            <el-image class="book-image" :src="bookVies" fit="fill"> </el-image>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="right">
            <div class="novel-name item">书名:钢铁是怎样炼成的</div>
            <div class="author-name item">作者：保尔·柯察金</div>
            <div class="category-name item">
              分类：<span>历史</span><span>励志</span>
            </div>
            <div class="update-name item">上传人:佚名</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// 获取小说封面路径
const bookVies = ref(
  "https://gitee.com/hglaaa/treasure-imgs/raw/master/login.jpeg"
);
</script>
<style scoped lang="less">
.rank-novel-item {
  transform: scale(0.9);
  border-bottom: 1px solid #eee;
  .contain {
    container-type: inline-size;
    .right {
      width: 98%;
      font-size: 5cqw;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .item {
      }
      .novel-name {
        font-weight: 700;
      }
      .category-name {
        span {
          font-size: 12px;
          border-radius: 5px;
          background-color: #09f;
          margin-right: 3px;
          padding: 0px 5px;
          cursor: pointer;
        }
      }
      .introduction {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
}
</style>
