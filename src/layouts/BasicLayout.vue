<template>
  <van-nav-bar
    title="标题"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
  <RouterView></RouterView>
  <van-tabbar v-model="active" router="true">
    <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="team" icon="search" to="/team">队伍</van-tabbar-item>
    <van-tabbar-item name="user" icon="friends-o" to="user">个人</van-tabbar-item>
  </van-tabbar>
</template>
<script setup name="BasicLayout" lang="ts">
import { ref } from 'vue'
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
const active = ref('home')
const onClickLeft = () => {
  router.back()
}
const onClickRight = () => {
  router.push('/search')
}
</script>
