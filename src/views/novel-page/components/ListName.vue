<template>
  <div class="list-name">
    <h4>{{ props.title }}</h4>
    <span>周</span>
    <span>月</span>
    <span>年</span>
  </div>
</template>
<script setup lang="ts">
const props = defineProps(["title"]);
</script>
<style scoped lang="less">
.list-name {
  display: flex;
  align-items: center;
  h4 {
    font-size: 22px;
    margin: 0;
    padding-right: 10px;
  }
  span {
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: #091;
    }
  }
}
</style>
