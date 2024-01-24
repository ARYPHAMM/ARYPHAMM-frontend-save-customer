import { defineStore } from 'pinia'
import helper from '@/helper/helper'
// import { initAuth } from "@/interface/Auth";
// eslint-disable-next-line no-unused-vars
const { $axios, showErrorMsg, $swal, getHostOrigin, showSuccessMsg } = helper()
export const authStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {},
    is_staff: false,
    token: window.localStorage.getItem('token'),
    errors: null
  }),
  getters: {
    getUser: (state) => state.user,
    getToken() {
      // autocompletion ✨
      return this.token
    },
    getErrors: (state) => state.errors,
    // isStaff: (state) => state.is_staff,
    isLogin: (state) => (Object.keys(state.user).length > 0 ? true : false)
  },
  actions: {
    async fetchUser(path = 'auth/me') {
      try {
        const response = await $axios({
          method: 'get',
          url: path,
          headers: {
            Authorization: `Bearer ${this.token}`
          }
        })
        this.user = {...response.data.data}
        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async login(auth, path = 'login') {
      try {
        const response = await $axios({
          method: 'post',
          url: path,
          data: auth,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.token = response.data.data.token
        this.errors = []
        localStorage.setItem('token', this.token)
        return response
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async logout(path = 'auth/logout') {
      const token = this.token
      this.token = ''
      this.user = {}
      localStorage.setItem('token', this.token)
      try {
        const response = await $axios.delete(path, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
          }
        })
        return response
      } catch (error) {
        // showErrorMsg(error);
        return Promise.reject(error)
      }
    }
  }
})
