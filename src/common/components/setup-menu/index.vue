<template>
  <div class="setup-menu">
    <div class="left">
      <el-menu
        class="el-menu-left"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
      >
        <el-menu-item index="1">
          <div class="image">首页图标</div>
        </el-menu-item>
        <el-menu-item index="/novel">{{ $t("setupMenu.novel") }} </el-menu-item>
        <el-menu-item>{{ $t("setupMenu.picture") }} </el-menu-item>
        <el-menu-item index="/music">{{ $t("setupMenu.music") }} </el-menu-item>
        <el-menu-item>{{ $t("setupMenu.video") }} </el-menu-item>
      </el-menu>
    </div>
    <div class="content"></div>
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
      </el-menu>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useLocaleStore } from "@/store/modules/locales";
const localeStore = useLocaleStore();
const { locale } = storeToRefs(localeStore);
const localeFlag = computed(() => {
  return locale.value === "zh" ? true : false;
});
const changeLang = (val: any) => {
  localeStore.changLang(val);
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
