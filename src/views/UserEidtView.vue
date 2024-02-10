<template>
  <van-form @submit="onSubmit">
    <van-field label="性别" v-if="editUser.editKey === '性别'">
      <template #input>
        <van-radio-group v-model="editUser.originValue" direction="horizontal">
          <van-radio name="0">男</van-radio>
          <van-radio name="1">女</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-cell-group v-else inset>
      <van-field
        v-model="editUser.originValue"
        :label="editUser.editKey"
        :placeholder="editUser.originValue"
        :rules="[{ required: true, message: `请填写${editUser.editKey}` }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit"> 提交 </van-button>
    </div>
  </van-form>
</template>
<script setup name="userEidt" lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const editUser = ref({
  editKey: route.query.editKey,
  originValue: route.query.originValue,
  eidtColumn: route.query.eidtColumn
})
const onSubmit = (values: any) => {
  console.log('submit', values, editUser.value.originValue)
}
</script>
