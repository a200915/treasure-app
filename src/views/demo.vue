<template>
  <div>demo</div>
  <hr />
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
