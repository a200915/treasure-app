<template>
  <div class="common-layout">
    <!-- 推荐小说 -->
    <div class="header">
      <div class="title">
        <h3>推荐小说</h3>
      </div>
      <el-divider />
      <div class="contain">
        <el-row :gutter="50">
          <el-col :span="4" v-for="item in 6" :key="item" class="category-item">
            <el-image :src="bookVies" fit="fill"> </el-image>
            <div class="novel-name">
              <el-tooltip placement="top" content="网友之宠幸宠零开始之大主宰">
                网友之宠幸宠零开始之大主宰
              </el-tooltip>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 书籍分类 -->
    <div class="main">
      <div class="title">
        <h3>书籍分类</h3>
      </div>
      <el-divider />
      <el-row :gutter="50">
        <el-col :span="4" v-for="item in 16" :key="item">
          <div class="category-item">全部·1122本</div>
        </el-col>
      </el-row>
    </div>
    <!-- 榜单 -->
    <div class="footer">
      <div class="title">
        <h3>榜单</h3>
      </div>
      <el-divider />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="item">
            <list-name :title="downloadRankTitle" />
            <rank-novel-item />
            <rank-novel-item />
            <rank-novel-item />
            <jump-more />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <list-name :title="collectRankTitle" />
            <rank-novel-item />
            <rank-novel-item />
            <rank-novel-item />
            <jump-more />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <list-name :title="readRankTitle" />
            <rank-novel-item />
            <rank-novel-item />
            <rank-novel-item />
            <jump-more />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="item">
            <list-name :title="highScoreRankTitle" />
            <rank-novel-item />
            <rank-novel-item />
            <rank-novel-item />
            <jump-more />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RankNovelItem from "./components/RankNovelItem.vue";
import ListName from "./components/ListName.vue";
import JumpMore from "./components/JumpMore.vue";
// 获取小说封面路径
const bookVies = ref(
  "https://gitee.com/hglaaa/treasure-imgs/raw/master/cover/wind.jpg"
);
const categoryItemBgc = ref("yellowgreen");
const downloadRankTitle = ref("下载榜");
const collectRankTitle = ref("收藏榜");
const readRankTitle = ref("阅读榜");
const highScoreRankTitle = ref("高分榜");

// 三个模块的背景色
const bgdColor = ref("#f9f9fa");
</script>
<style scoped lang="less">
h3 {
  margin: 0;
}
:deep(.el-divider--horizontal) {
  margin-top: 5px;
}
.common-layout {
  .header {
    background-color: v-bind(bgdColor);

    margin-bottom: 24px;
    .title {
      text-align: center;
    }
    .contain {
      background-color: v-bind(bgdColor);

      transform: scale(0.9);
      .novel-name {
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .main {
    background-color: v-bind(bgdColor);
    padding: 0 30px 15px;

    .title {
      text-align: center;
    }
    .category-item {
      padding: 5px;
      color: #61666d;
      background-color: #ecf2f8;
      text-align: center;
      margin-bottom: 5px;
      border-radius: 5px;
      &:hover {
        cursor: pointer;
        background-color: v-bind(categoryItemBgc);
      }
    }
  }
  .footer {
    background-color: v-bind(bgdColor);
    padding-left: 3px;
    margin-top: 24px;
    margin-bottom: 50px;
    padding-bottom: 10px;
    .title {
      text-align: center;
    }
    .item {
    }
  }
}
</style>
