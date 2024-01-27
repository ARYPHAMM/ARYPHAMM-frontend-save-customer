<script setup>
import { authStore } from '@/stores/auth'
import { auth as intAuth } from '@/interfaces/user'
import helper from '@/helper/helper'
// eslint-disable-next-line no-unused-vars
const { reactive, ref, router, error, errors, fillErrors, existError } = helper()
const type = ref('password')
const auth = authStore()
const changeTypePas = () => {
  type.value = type.value == 'password' ? 'text' : 'password'
}
const user = reactive(intAuth)
const login =  () => {
   auth
    .login(user)
    .then(() => {
      // router.push({ name: 'web-customer' })
      let path = router.resolve({name: 'web-customer'}).path;
      window.location.href = path
     
    }).catch((er) => {
       
      fillErrors(er, error, errors,true)
    })
}
</script>
<template>
  <div class="container">
    <div class="row justify-content-center h-100vh d-flex align-items-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header bg-primary text-white">Login</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="email">User name:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="user.user_name"
                  placeholder="Enter user name"
                />
                <span
                  v-if="existError(errors, 'user_name')"
                  class="text-danger"
                  v-html="existError(errors, 'user_name')"
                >
                </span>
              </div>

              <div class="form-group">
                <label for="password">Password:</label>
                <div class="position-relative">
                  <input
                    :type="type"
                    class="form-control"
                    v-model="user.password"
                    placeholder="Password"
                  />

                  <i
                    v-on:click="changeTypePas"
                    :class="`fa  position-absolute show__password ${
                      type == 'password' ? 'fa-eye' : 'fa-times'
                    }`"
                    aria-hidden="true"
                  ></i>
                </div>
                <span
                  v-if="existError(errors, 'password')"
                  class="text-danger"
                  v-html="existError(errors, 'password')"
                >
                </span>
              </div>
              <div class="d-flex justify-content-end w-100">
                <button v-on:click="login" type="button" class="btn btn-primary">
                  <i class="fas fa-sign-in-alt"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
