<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="userAccount"
        name="userAccount"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写账号' }]"
      />
      <van-field
        v-model="userPassword"
        type="password"
        name="userPassword"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
<script setup lang="ts" name="login">
import Axios from '@/plugins/myAxios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userAccount = ref('')
const userPassword = ref('')

const onSubmit = async () => {
  const res = await Axios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })
  if (res && res.data) {
    router.replace('/')
  }
}
</script>
