<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div v-if="id && product.id">
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
                    v-model="product.name"
                  />
                  <span
                    v-if="existError(errors, 'name')"
                    class="text-danger"
                    v-html="existError(errors, 'name')"
                  >
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Danh mục
                </label>
                <div class="col-sm-9">
                    <select v-on:change="loadSubCategories();product.sub_category_id = ''" class="form-control" v-model="product.category_id">
                      <option value="" >Chọn</option>
                      <option :value="item.id" v-html="item.name" :key="index" v-for="item,index in categories"></option>
                     
                    </select>
                  <span
                    v-if="existError(errors, 'category_id')"
                    class="text-danger"
                    v-html="existError(errors, 'category_id')"
                  >
                  </span>
                </div>
              </div>
              <div v-if="product.category_id != ''" class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Danh mục con
                </label>
                <div class="col-sm-9">
                    <select class="form-control" v-model="product.sub_category_id">
                      <option value="" >Chọn</option>
                      <option :value="item.id" v-html="item.name" :key="index" v-for="item,index in sub_categories"></option>
                     
                    </select>
                  <span
                    v-if="existError(errors, 'sub_category_id')"
                    class="text-danger"
                    v-html="existError(errors, 'sub_category_id')"
                  >
                  </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Mô tả
                </label>
                <div class="col-sm-9">
                
                    <textarea class="form-control" name="" id="" rows="3" placeholder="Nhập mô tả"
                    v-model="product.description"></textarea>
               
                   <span
                  v-if="existError(errors, 'description')"
                  class="text-danger"
                  v-html="existError(errors, 'description')"
                >
                   </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Giá
                </label>
                <div class="col-sm-9">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Nhập giá"
                    v-model="product.price"
                  />
                  <span class="d-block text-danger" v-if="product.price" v-html="(product.price?parseInt(product.price).toLocaleString() : '')"></span>
                  <span
                    v-if="existError(errors, 'price')"
                    class="text-danger"
                    v-html="existError(errors, 'price')"
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
import { product as intProduct } from '@/interfaces/user'
const product = ref(intProduct)
let id = ref(route.params.id)
const categories = ref([])
const sub_categories = ref([])
loadDetail('get', `categories?no_pagi=true`).then((res) => {
  categories.value = res.data.data.data
})
const loadSubCategories = () => {
  loadDetail(
    'get',
    `sub-categories?no_pagi=true&category_id=` + product.value.category_id
  ).then((res) => {
    sub_categories.value = res.data.data.data
  })
}
if (id.value) {
  loadDetail('get', `products/${id.value}`).then((res) => {
    product.value = res.data.data
    if (product.value.sub_category) {
      product.value.category_id = product.value.sub_category.category_id
      loadSubCategories()
    }
  })
} else {
  if (route.query.name) {
    product.value.name = route.query.name
  }
}
const save = () => {
  let arr = [product.value]
  if (!id.value) arr.push('post', 'products')
  else arr.push('put', `products/${id.value}`)
  handleUpdate(...arr)
    .then(() => {
      router.push({ name: 'web-product' })
    })
    .catch((er) => {
      fillErrors(er, error, errors, true)
    })
}
</script>
<style lang="scss" scoped></style>
