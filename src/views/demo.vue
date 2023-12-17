<template>
    <div>demo</div>
</template>

<script lang="ts" setup>
import { post } from '@/http';

post('/mock/demo', {a: 1,b:2}).then(res => {
    console.log(res);
    
})

</script>

<style  scoped>
</style>