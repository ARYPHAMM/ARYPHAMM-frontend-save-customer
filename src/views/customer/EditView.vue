<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div v-if="id && customer.id">
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
                    v-model="customer.last_name"
                  />
                   <span
                  v-if="existError(errors, 'last_name')"
                  class="text-danger"
                  v-html="existError(errors, 'last_name')"
                >
                </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Tên đêm và tên
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên đêm và tên"
                    v-model="customer.first_name"
                  />
                    <span
                  v-if="existError(errors, 'first_name')"
                  class="text-danger"
                  v-html="existError(errors, 'first_name')"
                >
                    </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Số điện thoại
                </label>
                <div class="col-sm-9">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập số điện thoại"
                    v-model="customer.phone_number"
                  />
                   <span
                  v-if="existError(errors, 'phone_number')"
                  class="text-danger"
                  v-html="existError(errors, 'phone_number')"
                >
                   </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Giới tính</label
                >
                <div class="col-md-9">
                  <div class="form-check">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio-stacked"
                      v-model="customer.gender"
                      value="male"
                    />
                    <label class="form-check-label mb-0" for="customControlValidation1">Nam</label>
                  </div>
                  <div class="form-check">
                    <input
                      type="radio"
                      class="form-check-input"
                      name="radio-stacked"
                      v-model="customer.gender"
                      value="female"
                    />
                    <label class="form-check-label mb-0" for="customControlValidation1">Nữ</label>
                  </div>
                   <span
                  v-if="existError(errors, 'gender')"
                  class="text-danger"
                  v-html="existError(errors, 'gender')"
                >
                   </span>
                </div>
              </div>
              <div class="form-group row">
                <label for="fname" class="col-sm-3 text-end control-label col-form-label"
                  >Ngày sinh
                </label>
                <div class="col-md-9">
                  <input
                    type="date"
                    class="form-control date-inputmask"
                    placeholder="Enter Date"
                    v-model="customer.date_of_birth"
                  />
                  <span
                  v-if="existError(errors, 'date_of_birth')"
                  class="text-danger"
                  v-html="existError(errors, 'date_of_birth')"
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
                    v-model="customer.note"></textarea>
               
                   <span
                  v-if="existError(errors, 'note')"
                  class="text-danger"
                  v-html="existError(errors, 'note')"
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
import { customer as intCustomer } from '@/interfaces/user'
const customer = ref(intCustomer)
let id = ref(route.params.id)

if (id.value) {
  loadDetail('get', `customers/${id.value}`).then((res) => {
    customer.value = res.data.data
    customer.value.date_of_birth = $moment(customer.value.date_of_birth).format("YYYY-MM-DD");
  })
}else{
  if( route.query.phone_number && isNumeric(route.query.phone_number)) 
  {
    customer.value.phone_number = route.query.phone_number
  }
}
const save = () => {
  let arr = [customer.value]
  if(!id.value)
    arr.push('post', 'customers')
  else
    arr.push('put',`customers/${id.value}`)
  handleUpdate(...arr).then(() => {
    router.push({ name: 'web-customer' })
  }).catch(er=>{
    fillErrors(er, error, errors,true)
  })
}
</script>
<style lang="scss" scoped></style>
