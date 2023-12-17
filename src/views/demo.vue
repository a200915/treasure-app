<template>
    <div>demo</div>
    <img src="https://gitee.com/hglaaa/treasure-imgs/raw/master/01.png" alt="">
    <lang-demo />
</template>

<script lang="ts" setup>
import { post } from "@/http";
import langDemo from "./lang-demo/index.vue";

post("/mock/demo", { a: 1, b: 2 }).then((res) => {
  console.log(res);
});
</script>

<style scoped></style>
