import { defineStore } from "pinia";
import helper from "@/helper/helper";
// eslint-disable-next-line no-unused-vars
const { $axios, $qs, showErrorMsg } = helper();
import { authStore } from "@/stores/auth";
export const categoryStore = defineStore({
  id: "category",
  state: () => ({
    items: [],
    item: "",
    filter: {
      search: "",
    },
    pagination: {
      page: 1,
      lastPage: 0,
      last_page: 0,
      perPage: 0,
      total: 0,
      total_current: 0,
    },
  }),
  getters: {
    getItems: (state) => state.items,
    getItem: (state) => state.item,
    getPagination: (state) => state.pagination,
    getFilter: (state) => state.filter,
  },
  actions: {
    async fetchItems(filter = {}, path = "categories") {
      try {
        const response = await $axios({
          method: "get",
          url: path + "?" + $qs.stringify(filter),
          headers: {
            Authorization: `Bearer ${authStore().token}`,
          },
        });
        this.items = response.data.data.data;
        delete filter["page"];
        this.setFilter(filter);
        this.setPagination(response.data.data);
        return response;
      } catch (error) {
        return Promise.reject(false);
      }
    },
    async fetchItem(id, path = "ctv") {
      try {
        const response = await $axios({
          method: "get",
          url: path + `/${id}/category`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authStore().token}`,
          },
        });
        this.item = response.data.data;
        return response;
      } catch (error) {
        return Promise.reject(false);
      }
    },
    async removeItem(id, path = "categories") {
      try {
        const response = await $axios({
          method: "delete",
          url: path + `/${id}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authStore().token}`,
          },
        });
        this.items = this.items.filter(item=>item.id !== id)
        return response;
      } catch (error) {
        return Promise.reject(false);
      }
    },
    setPagination(pagination) {
      delete pagination["data"];
      this.pagination = {
        ...pagination,
        page: pagination.page,
      };
    },
    setFilter(filter) {
      for (var k in this.filter) {
        this.filter[k] = filter[k];
      }
    },
  },
});
