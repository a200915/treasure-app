<template>
  <div class="jump-more" @click="jumpCategory">
    查看更多<el-icon><ArrowRight /></el-icon>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { ArrowRight } from "@element-plus/icons-vue";
const router = useRouter();
const jumpCategory = () => {
  router.push("/novel/category");
};
</script>
<style scoped lang="less">
.jump-more {
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #54b89d;
  }
}
</style>
