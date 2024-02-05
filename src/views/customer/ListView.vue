<template>
  <!-- ============================================================== -->
  <div class="page-breadcrumb">
    <div class="row">
      <div class="col-12 d-flex no-block align-items-center">
        <h4 class="page-title">Khách hàng</h4>
        <!-- <div class="ms-auto text-end">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Library</li>
            </ol>
          </nav>
        </div> -->
      </div>
    </div>
  </div>
  <!-- ============================================================== -->
  <!-- End Bread crumb and right sidebar toggle -->
  <!-- ============================================================== -->
  <!-- ============================================================== -->
  <!-- Container fluid  -->
  <!-- ============================================================== -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="form-group">
            <input
              type="text"
              class="form-control border-dark"
              placeholder="Tìm kiếm (Họ tên, số điện thoại)"
              v-model="search"
              v-on:keyup="debouncedSearch"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title mb-0"></h5>
            <RouterLink class="btn btn-primary" :to="{ name: 'web-edit-customer',query:checkSearch() }">
              <i class="fa fa-plus" aria-hidden="true"></i> Thêm mới</RouterLink
            >
          </div>
         <div class="table-responsive">
           <table class="table ">
            <thead>
              <tr>
                <th scope="col"><b>Số điện thoại</b></th>
                <th scope="col"><b>Họ tên</b></th>
                <th scope="col"><b>Giới tính</b></th>
                <th scope="col"><b>Năm sinh</b></th>
                <th scope="col"><b>Người nhập</b></th>
                <th scope="col"><b>Mô tả</b></th>
                <th scope="col"><b>Thời gian nhập</b></th>
                <th scope="col"><b>Thời gian cập nhật</b></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr :key="index" v-for="(item, index) in customerStore().getItems">
                <td scope="row">
                  {{ item.phone_number }}
                </td>
                <td>{{ item.last_name }} {{ item.first_name }}</td>
                <td>
                  {{
                    item.gender == 'male'
                      ? 'Nam'
                      : item.gender == 'female'
                        ? 'Nữ'
                        : 'Không xác định'
                  }}
                </td>
                <td>
                  <span v-if="item.date_of_birth">
                    {{ dateFormat(item.date_of_birth) }}
                  </span>
                </td>
                <td>
                  <span v-if="item.user">
                    {{item.user.user_name}}
                  </span>
                </td>
                <td>
                  <span v-if="item.note">
                    {{item.note}}
                  </span>
                </td>
          
                <td>
                  <span v-if="item.created_at">
                    {{dateTimeFormat(item.created_at)}}
                  </span>
                </td>
                <td>
                  <span v-if="item.updated_at">
                    {{dateTimeFormat(item.updated_at)}}
                  </span>
                </td>
               
                <td>
                  <div v-if="current_user.id == item.user_id">
 <RouterLink
                    class="btn"
                    :to="{ name: 'web-edit-customer', params: { id: item.id } }"
                  >
                    <i class="fas fa-edit text-warning"></i>
                  </RouterLink>
                  <button @click="deleteItem(item)" class="btn">
                    <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                  </button>
                  </div>
                 
                </td>
              </tr>
              <tr v-if="!customerStore().getItems.length && search != ''">
                <td class="text-center" colspan="5">Không tìm thấy dữ liệu</td>
              </tr>
            </tbody>
          </table>
         </div>
          <PaginationWeb @handlePage="handlePagination" :pagination1="getPagination">
          </PaginationWeb>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { customerStore } from '@/stores/customer'
import PaginationWeb from '../../components/PaginationWeb.vue'
import helper from '@/helper/helper'
import {authStore} from '../../stores/auth'
const current_user = authStore().getUser
const { computed, dateFormat, RouterLink, ref, debounce, showSuccessMsg, confirmPopup,dateTimeFormat,isNumeric } = helper()
const { fetchItems, removeItem } = customerStore()
const handlePagination = (page, value) => {
  fetchItems({ page: page, ...value })
}
const deleteItem = (item) => {
  confirmPopup().then(() => {
    removeItem(item.id).then((res) => {
      showSuccessMsg(res.data.data)
    })
  })
}
const search = ref('')
handlePagination(1)
const getPagination = computed(() => {
  return customerStore().getPagination
})
const debouncedSearch = computed(() => debounce(handleSearch, 200))
const handleSearch = () => {
  if (search.value.trim() !== '') {
    setTimeout(() => {
      handlePagination(1, { phone_number: search.value, full_name: search.value })
    }, 500)
  } else {
    handlePagination(1)
  }
}
const checkSearch = ()=>{
  if(search.value && isNumeric(search.value))
   return {phone_number: search.value}
  return {}
}
</script>
