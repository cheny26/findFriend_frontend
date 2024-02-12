<template>
  <UserCardList :userList="userList" />
</template>
<script setup lang="ts" name="searchResult">
import { type User } from '@/types/index'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Axios from '@/plugins/myAxios'
import qs from 'qs'
import UserCardList from '@/components/userCardList.vue'
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
