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
          <div class="logo">Treasure</div>
        </el-menu-item>
        <template v-for="(item, index) in props.leftItemList" :key="index">
          <el-menu-item
            v-if="item.roleGroup.includes(userRole)"
            :index="props.routerOpenFlag ? item.routerPath : index + ''"
            @click="showTabBar(item)"
            >{{ $t(item.title) }}
          </el-menu-item>
        </template>
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
            :style="localeStyle"
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
import { computed, ref, defineProps, defineEmits } from "vue";
import { storeToRefs } from "pinia";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);

import { useRouter } from "vue-router";
const router = useRouter();

// 获取角色权限
const userRole = computed(() => {
  const role: string[] = JSON.parse(sessionStorage?.getItem("role") as string);
  return role[0];
});

// 国际化切换
const localeStyle = ref(
  "--el-switch-on-color: #13ce66;--el-switch-off-color: #89b9f9;"
);
const localeFlag = computed(() => {
  return locale.value === "zh" ? true : false;
});
const changeLang = (val: any) => {
  localeStore.changLang(val);
};
// 菜单左侧ItemList
// routerOpenFlag为true时，开启router菜单跳转，index为页面路由
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
      .logo {
        width: 120px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 26px;
        background: -webkit-linear-gradient(
          135deg,
          #0eaf6d,
          #ff6ac6 25%,
          #147b96 50%,
          #e6d205 55%,
          #2cc4e0 60%,
          #8b2ce0 80%,
          #ff6384 95%,
          #08dfb4
        );
        /* 文字颜色填充设置为透明 */
        -webkit-text-fill-color: transparent;
        /* 背景裁剪，即让文字使用背景色 */
        -webkit-background-clip: text;
        /* 背景图放大一下，看着柔和一些 */
        -webkit-background-size: 200% 100%;
        /* 应用动画flowCss 12秒速度 无限循环 线性匀速动画*/
        -webkit-animation: flowCss 12s infinite linear;
      }
      @-webkit-keyframes flowCss {
        0% {
          /* 移动背景位置 */
          background-position: 0 0;
        }
        100% {
          background-position: -400% 0;
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
