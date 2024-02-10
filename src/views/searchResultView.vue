<template>
  <van-empty v-if="!userList || userList.length < 1" description="暂无符合要求用户" />
  <div>
    <van-card
      v-for="(user, id) in userList"
      :key="id"
      :desc="user.userProfile"
      :title="user.userName"
      :thumb="user.userAvatar"
    >
      <template #tags>
        <van-space wrap>
          <van-tag plain type="primary" v-for="(tag, id) in user.tags" :key="id">{{ tag }}</van-tag>
        </van-space>
      </template>
      <template #footer>
        <van-button size="mini">联系我</van-button>
      </template>
    </van-card>
  </div>
</template>
<script setup lang="ts" name="searchResult">
import { type User } from '@/types/index'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Axios from '@/plugins/myAxios'
import qs from 'qs'
const route = useRoute()
const { activeIds } = route.query
const userList = ref<User[]>([])
onMounted(async () => {
  const userListData: User[] = await Axios.get('/user/searchByTags', {
    params: {
      tagNames: activeIds
    },
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'comma' })
  })
    .then(function (response) {
      return response.data.data
    })
    .catch(function (error) {
      console.log(error)
    })
  if (userListData) {
    userListData.forEach((user) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags)
      }
    })
    userList.value = userListData
  }
})
</script>
