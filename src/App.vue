<script setup>
// eslint-disable-next-line no-unused-vars
import { RouterLink, RouterView } from 'vue-router'
import HeaderMenu from './components/HeaderMenu.vue'
import LeftMenu from './components/LeftMenu.vue'
import { authStore } from '@/stores/auth'
</script>
<template>
    <!-- ============================================================== -->
    <div class="preloader">
      <div class="lds-ripple">
        <div class="lds-pos"></div>
        <div class="lds-pos"></div>
      </div>
    </div>
    <!-- ============================================================== -->
  <div v-if="!authStore().isLogin">
    <RouterView />
  </div>
  <div v-else
  
  id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebartype="full"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
  >
    <!-- <Header></Header> -->
    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->

   
      <HeaderMenu></HeaderMenu>
      <LeftMenu></LeftMenu>
      <div class="page-wrapper">
        <RouterView />
        <footer class="footer text-center">
         
        </footer>
      </div>
  </div>
</template>
<style scoped></style>
