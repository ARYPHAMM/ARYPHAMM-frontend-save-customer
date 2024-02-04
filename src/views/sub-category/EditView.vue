<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div v-if="id  && subCategory.id">
            <h3 class="p-1">Cập nhật</h3>
          </div>
          <div v-else>
            <h3 class="p-1">Thêm mới</h3>
          </div>
          <form class="form-horizontal">
            <div class="card-body">
              <h4 class="card-title"></h4>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Tên
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên"
                    v-model="subCategory.name"
                  />
                  <span
                    v-if="existError(errors, 'name')"
                    class="text-danger"
                    v-html="existError(errors, 'name')"
                  >
                  </span>
                </div>
              </div>
            </div>
            <div class="border-top">
              <div class="card-body">
                <button v-on:click="save" type="button" class="btn btn-primary">Lưu</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import helper from '@/helper/helper'
const { route, ref, loadDetail, handleUpdate, router, error, errors, fillErrors, existError } =
  helper()
import { subCategory as intCategory } from '@/interfaces/user'
let id = ref(route.params.id)
const q = ref({
  category_id: route.params.category_id
})
let subCategory = ref(intCategory)
subCategory.value.category_id = q.value.category_id || ''
if (id.value) {
  loadDetail('get', `sub-categories/${id.value}`).then((res) => {
    subCategory.value = {...res.data.data}
  })
} else {
  if (route.query.name) {
    subCategory.value.name = route.query.name
  }
}
const save = () => {
  let arr = [subCategory.value]
  if (!id.value) arr.push('post', 'sub-categories')
  else arr.push('put', `sub-categories/${id.value}`)
  handleUpdate(...arr)
    .then(() => {
      router.push({ name: 'web-sub-category',params:{id:q.value.category_id} })
    })
    .catch((er) => {
      fillErrors(er, error, errors, true)
    })
}
</script>
<style lang="scss" scoped></style>
