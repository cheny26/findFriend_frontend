<template>
  <UserCardList :userList="userList" />
</template>
<script setup lang="ts" name="home">
import { type User } from '@/types/index'
import { ref, onMounted } from 'vue'

import Axios from '@/plugins/myAxios'
import UserCardList from '@/components/userCardList.vue'

const userList = ref<User[]>([])
onMounted(async () => {
  const userListData: User[] = await Axios.get('/user/recommend', {
    params: {
      current: 1,
      pageSize: 15
    }
  })
    .then(function (response) {
      return response.data
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
