<template>
  <!-- ============================================================== -->
  <div class="page-breadcrumb">
    <div class="row">
      <div class="col-12 d-flex no-block align-items-center">
        <h4 class="page-title">Danh mục</h4>
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
              placeholder="Tìm kiếm (Tên danh mục con)"
              v-model="search"
              v-on:keyup="debouncedSearch"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title mb-0"></h5>
            <RouterLink
              class="btn btn-primary"
              :to="{ name: 'web-edit-sub-category', query: checkSearch(),params:{...q } }"
            >
              <i class="fa fa-plus" aria-hidden="true"></i> Thêm mới</RouterLink
            >
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col"><b>Tên</b></th>
                  <th scope="col"><b>Thời gian nhập</b></th>
                  <th scope="col"><b>Thời gian cập nhật</b></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr :key="index" v-for="(item, index) in subCategoryStore().getItems">
                  <th scope="row">
                    {{ item.name }}
                  </th>
           
                  <td>
                    <span v-if="item.created_at">
                      {{ dateTimeFormat(item.created_at) }}
                    </span>
                  </td>
                  <td>
                    <span v-if="item.updated_at">
                      {{ dateTimeFormat(item.updated_at) }}
                    </span>
                  </td>
                  <td>
                    <div>
                      <RouterLink
                        class="btn"
                        :to="{ name: 'web-edit-sub-category', params: { id: item.id,...q }  }"
                      >
                        <i class="fas fa-edit text-warning"></i>
                      </RouterLink>
                      <button @click="deleteItem(item)" class="btn">
                        <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="!subCategoryStore().getItems.length && search != ''">
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
import { subCategoryStore } from '@/stores/sub_category'
import PaginationWeb from '../../components/PaginationWeb.vue'
import helper from '@/helper/helper'
const {
  computed,
  RouterLink,
  ref,
  debounce,
  showSuccessMsg,
  confirmPopup,
  dateTimeFormat,
  route
} = helper()
const { fetchItems, removeItem } = subCategoryStore()
const q = ref({
  category_id: route.params.id
})
const handlePagination = (page, value) => {
  fetchItems({ page: page, ...value,...q.value })
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
  return subCategoryStore().getPagination
})
const debouncedSearch = computed(() => debounce(handleSearch, 200))
const handleSearch = () => {
  if (search.value.trim() !== '') {
    setTimeout(() => {
      handlePagination(1, {  name: search.value })
    }, 500)
  } else {
    handlePagination(1)
  }
}
const checkSearch = () => {
  if (search.value) return { name: search.value }
  return {}
}
</script>
