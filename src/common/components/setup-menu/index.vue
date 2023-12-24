<template>
  <div class="setup-menu">
    <!-- 左侧 -->
    <div class="left">
      <el-menu
        class="el-menu-left"
        mode="horizontal"
        :ellipsis="false"
        :router="routerOpenFlag"
      >
        <el-menu-item index="/home" @click="goHome">
          <div class="image">
            <img src="../../../assets//4K.jpg" alt="" />
          </div>
        </el-menu-item>
        <el-menu-item
          v-for="(item, index) in props.leftItemList"
          :index="item.routerPath"
          :key="index"
          @click="showTabBar(item)"
          >{{ $t(item.title) }}
        </el-menu-item>
      </el-menu>
    </div>
    <!--  无 -->
    <div class="content"></div>
    <!-- 右侧 -->
    <div class="right">
      <el-menu
        class="el-menu-right"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
      >
        <el-menu-item index="6">{{ $t("setupMenu.mine") }} </el-menu-item>
        <el-menu-item index="7">{{ $t("setupMenu.message") }} </el-menu-item>
        <el-menu-item>
          <el-switch
            v-model="localeFlag"
            inline-prompt
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #89b9f9;
            "
            active-text="中文"
            inactive-text="英文"
            @change="changeLang"
          />
        </el-menu-item>
        <el-menu-item>上传 </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, reactive, defineProps, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);

import { useRouter } from "vue-router";
const router = useRouter();

// 国际化切换
const localeFlag = computed(() => {
  return locale.value === "zh" ? true : false;
});
const changeLang = (val: any) => {
  localeStore.changLang(val);
};
// 菜单左侧ItemList
const props = defineProps(["leftItemList", "routerOpenFlag"]);

// 非路由模式下点击显示tabBar内容
const emit = defineEmits(["showTabBar"]);
const showTabBar = (item: any) => {
  if (props.routerOpenFlag === false) {
    emit("showTabBar", item);
  }
};

// 点击跳转网站首页
const goHome = () => {
  router.push({ path: "/home" });
};
</script>
<style scoped lang="less">
@bgd-menu: #dedfe6;
.setup-menu {
  display: flex;
  justify-content: space-between;
  background-color: @bgd-menu;

  .left {
    .el-menu-left {
      background-color: @bgd-menu;
      .image {
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: yellowgreen;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .content {
  }

  .right {
    .el-menu-right {
      background-color: @bgd-menu;
    }
  }
}
</style>
