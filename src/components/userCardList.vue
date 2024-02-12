<template>
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
    <van-empty v-if="userList.length < 1" description="" />
  </div>
</template>
<script setup name="userCardList" lang="ts">
defineProps(['userList'])
</script>
