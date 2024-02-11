<template>
  <van-form @submit="onSubmit">
    <van-field label="性别" v-if="editUser.editKey === '性别'">
      <template #input>
        <van-radio-group v-model="editUser.editValue" direction="horizontal">
          <van-radio name="0">男</van-radio>
          <van-radio name="1">女</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-cell-group v-else inset>
      <van-field
        v-model="editUser.editValue"
        :label="editUser.editKey"
        :placeholder="editUser.editValue"
        :rules="[{ required: true, message: `请填写${editUser.editKey}` }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
<script setup name="userEidt" lang="ts">
import Axios from '@/plugins/myAxios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const editUser = ref({
  editKey: route.query.editKey,
  editValue: route.query.editValue,
  editColumn: route.query.editColumn
})

const onSubmit = async () => {
  const res = await Axios.post('/user/update', {
    id: 1,
    [editUser.value.editColumn as string]: editUser.value.editValue
  })
  console.log(res)
  router.back()
}
</script>
