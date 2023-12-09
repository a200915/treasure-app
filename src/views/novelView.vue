<template>
  <el-row :gutter="0">
    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <el-menu
        :default-active="activeIndex"
        class="el-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          v-for="item in tabList"
          @click="showTab(item)"
          :index="item.tabName"
          :key="item.tabIndex"
          >{{ item.tabName }}</el-menu-item
        >
      </el-menu>
    </el-col>
    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
      <div class="search">
        <el-input
          v-model="inputValue"
          class="w-50 m-3 input"
          placeholder="请输入搜索内容"
          :suffix-icon="Search"
          clearable
        /></div
    ></el-col>
    <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="user-info">
        <div class="avatar">
          <img src="../assets/qq-avatar-01.jpg" />
        </div>
        <div class="message">
          <div class="icon">
            <el-icon color="#fff" size="20px" class="icon"
              ><ChatDotRound />
            </el-icon>
            <div class="light" v-if="haveMessage"></div>
          </div>
          <div class="msg">消息</div>
        </div>
        <div class="role">superAdmin</div>
      </div>
    </el-col>
  </el-row>
  <component :is="componentId" />
</template>

<script lang="ts" setup>
import { ref, reactive, shallowRef } from "vue";
import frontView from "./novelView/frontView.vue";
import novelsView from "./novelView/novelsView.vue";
import picturesView from "./novelView/picturesView.vue";
import musicView from "./novelView/musicView.vue";
import videoView from "./novelView/videoView.vue";
import { Search, ChatDotRound } from "@element-plus/icons-vue";
const tabList = reactive([
  { tabComponent: shallowRef(frontView), tabName: "首页", tabIndex: 1 },
  { tabComponent: shallowRef(novelsView), tabName: "小说", tabIndex: 2 },
  { tabComponent: shallowRef(picturesView), tabName: "图片", tabIndex: 3 },
  { tabComponent: shallowRef(musicView), tabName: "音乐", tabIndex: 4 },
  { tabComponent: shallowRef(videoView), tabName: "视频", tabIndex: 5 },
]);
let activeIndex = ref("小说");
let inputValue = ref("");
let haveMessage = ref(true);
const componentId = shallowRef(novelsView);
const showTab = (tab: any) => {
  componentId.value = tab.tabComponent;
};
</script>
<style lang="less" scoped>
.el-menu {
  height: 50px;
}
.search {
  height: 49px;
  font-size: 24px;
  background-color: #545c64;
  .input {
    margin-top: 8.5px;
  }
}
.user-info {
  background-color: #545c64;
  height: 49px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  .avatar {
    width: 45px;
    height: 45px;
    img {
      width: 45px;
      border-radius: 99999px;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .message {
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: relative;
    padding-left: 1.75vw;
    padding-right: 1.75vw;
    .icon {
      position: relative;
      .icon {
        border: 1px solid transparent;
        margin-bottom: 10px;
      }
      .light {
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background-color: #e8655d;
        position: absolute;
        top: 0;
        right: 10px;
      }
    }
    .msg {
      width: 40px;
      color: #fff;
      font-size: 12px;
      position: absolute;
      bottom: -5px;
    }
  }
  .role {
    width: 120px;
    margin-right: 2vw;
    cursor: pointer;
    height: 25px;
    border-radius: 12.5px;
    text-align: center;
    line-height: 25px;
    color: #e8eaeb;
    border: 1px solid #000;
  }
}
</style>
