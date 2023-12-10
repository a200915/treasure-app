<template>
  <div class="novels">
    <el-row class="tac">
      <el-col :xs="4" :sm="4" :md="3" :lg="2" :xl="2">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical"
          :default-active="activeIndex"
          text-color="#fff"
        >
          <el-menu-item
            v-for="item in novelsTabList"
            @click="showNovelsTab(item)"
            :index="item.tabName"
            :key="item.tabIndex"
          >
            <el-icon><component :is="item.tabIcon" /></el-icon>
            <span>{{ item.tabName }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="20" :sm="20" :md="21" :lg="22" :xl="22" class="content">
        <component :is="componentId" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, shallowRef } from "vue";
import { House, Menu, Reading, UserFilled } from "@element-plus/icons-vue";
import first from "../../components/novelsView/first.vue";
import second from "../../components/novelsView/second.vue";
import third from "../../components/novelsView/third.vue";
import fourth from "../../components/novelsView/fourth.vue";
const activeIndex = ref("首页");
const novelsTabList = reactive([
  {
    tabComponent: shallowRef(first),
    tabName: "首页",
    tabIndex: 1,
    tabIcon: shallowRef(House),
  },
  {
    tabComponent: shallowRef(third),
    tabName: "书架",
    tabIndex: 2,
    tabIcon: shallowRef(Reading),
  },
  {
    tabComponent: shallowRef(second),
    tabName: "分类",
    tabIndex: 3,
    tabIcon: shallowRef(Menu),
  },
  {
    tabComponent: shallowRef(fourth),
    tabName: "我的",
    tabIndex: 4,
    tabIcon: shallowRef(UserFilled),
  },
]);
const componentId = shallowRef(first);
const showNovelsTab = (item: any) => {
  componentId.value = item.tabComponent;
};
</script>
<style lang="less" scoped>
.novels {
  .el-menu-vertical {
    height: 90vh;
  }
  .content {
    background-color: #edeef0;
    height: 90vh;
  }
}
</style>
