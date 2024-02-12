<template>
  <div class="img">
    <van-uploader :after-read="afterRead">
      <van-image round width="6rem" height="6rem" :src="user.userAvatar" />
    </van-uploader>
  </div>
  <van-cell title="账号" :value="user.userAccount" />
  <van-cell
    title="用户名"
    is-link
    :value="user.userName"
    @click="handerEidt('用户名', user.userName, 'userName')"
  />
  <van-cell
    title="简介"
    is-link
    :value="user.userProfile"
    @click="handerEidt('简介', user.userProfile ?? '', 'userProfile')"
  />
  <van-cell
    title="性别"
    is-link
    :value="user.gender === 0 ? '男' : '女'"
    @click="handerEidt('性别', user.gender ?? '0', 'gender')"
  />
  <van-cell
    title="电话"
    is-link
    :value="user.phone"
    @click="handerEidt('电话', user.phone ?? '', 'phone')"
  />
  <van-cell
    title="邮箱"
    is-link
    :value="user.email"
    @click="handerEidt('邮箱', user.email ?? '', 'email')"
  />
  <van-cell title="创建时间" :value="createTime" />
</template>
<script setup lang="ts" name="user">
import Axios from '@/plugins/myAxios'
import { type User } from '@/types/index'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = ref<User>({
  id: 1,
  userName: '鱼皮',
  userAccount: 'dogYupi',
  userAvatar: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  userProfile: undefined,
  gender: 0,
  phone: '123112312',
  tags: '123234',
  email: '12345@qq.com',
  createTime: new Date()
})
onMounted(async () => {
  const loginUser = await Axios.get('/user/get/login')
  user.value = loginUser.data
})
const createTime = user.value.createTime.toLocaleDateString()
// eidtKey 要更新的属性，originValue 原来的值，eidtColumn  要更新的列名
const handerEidt = (editKey: string, editValue: any, editColumn: string) => {
  router.push({
    path: '/user/eidt',
    query: {
      editKey,
      editValue,
      editColumn
    }
  })
}

const afterRead = (file: File) => {
  // 此时可以自行将文件上传至服务器
  console.log(file)
 
}
</script>
<style>
.img {
  display: flex;
  justify-content: center;
}
</style>
