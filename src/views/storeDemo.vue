<template>
    <div>storeDemo</div>
    <div>name: {{ store.name }}</div>
    <div>age: {{ store.getAge }}</div>
    <div>
        <el-button type="primary" @click="changeName">change name</el-button>
    </div>

</template>

<script lang="ts" setup>
import { useDemoStore } from '@/store/modules/demo';
const store = useDemoStore()

const changeName = () => {
    store.changName('XX')
}

</script>

<style  scoped>
</style>