<template>
  <form action="/">
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
  <van-divider>已选择标签</van-divider>
  <div v-if="activeIds.length === 0">暂无标签</div>
  <van-space wrap>
    <van-tag
      v-for="(tag, id) in activeIds"
      :key="id"
      closeable
      size="medium"
      type="primary"
      @close="close(id)"
    >
      {{ tag }}
    </van-tag>
  </van-space>

  <van-divider>请选择标签</van-divider>
  <van-tree-select
    v-model:active-id="activeIds"
    v-model:main-active-index="activeIndex"
    :items="tagList"
  />
  <div style="margin: 20px">
    <van-button type="primary" size="large" @click="handerSearch">搜索</van-button>
  </div>
</template>
<script setup lang="ts" name="search">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const close = (id: number) => {
  activeIds.value.splice(id, 1)
}

const activeIds = ref([])
const activeIndex = ref(0)
const originTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' }
    ]
  },
  {
    text: '方向',
    children: [
      { text: 'Java', id: 'Java' },
      { text: 'vue', id: 'vue' },
      { text: 'Python', id: 'Python' }
    ]
  },
  {
    text: '年级',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' }
    ]
  }
]
const tagList = ref(originTagList)
const searchText = ref('')
const onSearch = () => {
  let temp = 0
  tagList.value = originTagList.map((parentTag) => {
    const tempChildren = [...parentTag.children]
    const tempParentTag = { ...parentTag }
    tempParentTag.children = tempChildren.filter((item) => item.text.includes(searchText.value))
    if (tempParentTag.children.length !== 0) {
      activeIndex.value = temp
    }
    temp++
    return tempParentTag
  })
}

const onCancel = () => {
  searchText.value = ''
  tagList.value = originTagList
}

const handerSearch = () => {
  router.push({
    name: 'searchResult',
    query: {
      activeIds: activeIds.value
    }
  })
}
// 监听搜索文本的变化，清空时也还原tagList
watch(searchText, () => {
  if (searchText.value.length == 0) {
    onCancel()
  }
})
</script>
