<template>
  <div class="jump-more">
    查看更多<el-icon><ArrowRight /></el-icon>
  </div>
</template>
<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
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
