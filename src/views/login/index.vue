<template>
  <div class="login-page">
    <div class="box">
      <div class="left">
        <el-image fit="cover" :src="imgUrl" style="height: 100%; width: 100%" />
      </div>
      <div class="right">
        <h1>Login</h1>
        <el-form ref="formRef" :model="loginForm" label-width="auto"> 
            <el-form-item label="账号">
                <el-input v-model="loginForm.userName" placeholder="请输账号" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" show-password v-model="loginForm.passWord" placeholder="请输密码" />
            </el-form-item>
        </el-form> 
        <el-row :gutter="20" style="margin-top: 40px;">
            <el-col class="register" :span="24" :offset="0">
                还没账号？去注册～
            </el-col>
        </el-row>
        <el-row :gutter="20" style="margin-top: 40px;">
            <el-col :span="24" :offset="0" style="text-align: center;">
                <el-button type="primary" style="width: 80%;" @click="login">登录</el-button>
            </el-col>
        </el-row> 
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ElMessage } from 'element-plus';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import { useUserStore } from '@/store/modules/user';
const userStore = useUserStore()

const router = useRouter()
const route = useRoute()

const imgUrl = ref(
  'https://gitee.com/hglaaa/treasure-imgs/raw/master/login.jpeg'
);

const loginForm = reactive({
    userName: 'admin',
    passWord: '123456'
})

const login = () => {
  let params = {
    userName: loginForm.userName,
    passWord: loginForm.passWord,
  }

  userStore.toLogin(params).then(res => {
    if(res) {
      let path = route.query.redirect || '/demo'
      router.push({
        path: path as string
      })
    }
  }).catch((err) => {
    ElMessage({
        message: err.message || '用户名或账号错误',
        type: 'error'
      })
  })
}

</script>

<style scoped lang="less">
.login-page {
  height: 100%;
  background: linear-gradient(to right, #65cbf7, #b3a5fc);
  .box {
    width: 60%;
    height: 450px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.8);
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 60%;
  }
  .right {
    width: 40%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 20px;
  }
  h1 {
    text-align: center;
    padding-top: 45px;
    margin-top: 0;
  }
}
.register {
    text-align: right;
    font-size: 12px;
    cursor: pointer;
    &:hover {
        color: #0094ff;
    }
}
</style>
