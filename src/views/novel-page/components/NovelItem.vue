<template>
  <div class="novel-item">
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
            <div class="introduction item">
              <el-tooltip placement="top-start" :content="text"
                >{{ text }}
              </el-tooltip>
            </div>
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
const text = ref(
  "简介:钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的"
);
</script>
<style scoped lang="less">
.novel-item {
  .contain {
    transform: scale(0.95);
    border: 1px solid #55b99c;

    .right {
      width: 98%;
      .item {
        padding: 3px;
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
          padding: 2px 5px;
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
