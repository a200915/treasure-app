<template>
  <div class="setup-menu">
    <!-- 左侧 -->
    <div class="left">
      <el-menu
        class="el-menu-left"
        mode="horizontal"
        :ellipsis="false"
        :router="menuOptions.routerOpenFlag"
      >
        <el-menu-item index="/home" @click="goHome">
          <div class="logo">Treasure</div>
        </el-menu-item>
        <template v-for="(item, index) in leftMenuItem as any" :key="index">
          <el-menu-item
            v-if="item.roleGroup.includes(userRole)"
            :index="menuOptions.routerOpenFlag ? item.routerPath : index + ''"
            @click="showTabBar(item)"
            >{{ $t(item.title) }}
          </el-menu-item>
        </template>
        <!-- 模块数量增多时放到二级菜单下 -->
        <el-sub-menu
          v-if="menuOptions.routerOpenFlag && moreMenuItem.length > 0"
          index="/more"
        >
          <template #title> 更多 </template>
          <template v-for="(item, index) in moreMenuItem as any" :key="index">
            <el-menu-item
              v-if="item.roleGroup.includes(userRole)"
              :index="menuOptions.routerOpenFlag ? item.routerPath : index + ''"
              @click="showTabBar(item)"
              >{{ $t(item.title) }}
            </el-menu-item>
          </template>
        </el-sub-menu>
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
        <el-menu-item index="6">
          <el-avatar :src="avatarSrc" />
        </el-menu-item>
        <el-menu-item index="7"
          >{{ $t("homePage.message") }}<el-icon><ChatDotRound /></el-icon>
        </el-menu-item>
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
        <el-menu-item
          >{{ $t("homePage.upload") }}<el-icon><UploadFilled /></el-icon>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, defineProps, defineEmits } from "vue";
import { ChatDotRound, UploadFilled } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);

import { useRouter } from "vue-router";
const router = useRouter();

// 菜单左侧 leftItemList 菜单背景色 bgdColor
// routerOpenFlag为true时，开启router菜单跳转，index为页面路由,不开启，index仅为标识
const emit = defineEmits(["showTabBar"]);
type menuOptions = {
  routerOpenFlag?: boolean;
  bgdColor?: string;
};
interface Props {
  leftItemList?: any;
  menuOptions?: menuOptions;
}
const props = withDefaults(defineProps<Props>(), {
  menuOptions: () => {
    return {
      routerOpenFlag: true,
      bgdColor: "#33e0bd",
    };
  },
});

// 控制菜单-若首页菜单多则折叠显示
const LENGTH = ref(3);
const leftMenuItem = computed(() => {
  if (props.menuOptions.routerOpenFlag) {
    return props.leftItemList?.slice(0, LENGTH.value);
  } else {
    return props.leftItemList;
  }
});
const moreMenuItem = computed(() => {
  if (props.menuOptions.routerOpenFlag) {
    return props.leftItemList?.slice(LENGTH.value);
  } else {
    return;
  }
});

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

// 非路由模式下点击显示tabBar内容
const showTabBar = (item: any) => {
  if (props.menuOptions.routerOpenFlag === false) {
    emit("showTabBar", item);
  }
};

// 点击跳转网站首页
const goHome = () => {
  router.push({ path: "/home" });
};

// 修改css背景值变量
const colorChange = (color: string) => {
  const style = document.getElementsByTagName("body")[0].style;
  style.setProperty("--bgd-color", color);
};
colorChange(props.menuOptions.bgdColor as string);

// 获取头像路径
const avatarSrc = ref(
  "https://gitee.com/hglaaa/treasure-imgs/raw/master/login.jpeg"
);
</script>
<style scoped lang="less">
@bgd-menu: var(--bgd-color, #dedfe6);
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
