<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div v-if="id && category.id">
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
                  >Họ
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập họ"
                    v-model="category.name"
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
const { route, ref, loadDetail, handleUpdate, router,error, errors, fillErrors, existError,$moment,isNumeric } = helper()
import { category as intCategory } from '@/interfaces/user'
const category = ref(intCategory)
let id = ref(route.params.id)

if (id.value) {
  loadDetail('get', `categories/${id.value}`).then((res) => {
    category.value = res.data.data
  })
}
else{
  if( route.query.name ) 
  {
    category.value.name = route.query.name
  }
}
const save = () => {
  let arr = [category.value]
  if(!id.value)
    arr.push('post', 'categories')
  else
    arr.push('put',`categories/${id.value}`)
  handleUpdate(...arr).then(() => {
    router.push({ name: 'web-category' })
  }).catch(er=>{
    fillErrors(er, error, errors,true)
  })
}
</script>
<style lang="scss" scoped></style>
