<template lang="">
  <div
    v-if="this.pagination1.total != 0 && this.pagination1.last_page > 1"
    id="pagination"
    class="mt-1 mb-1 d-flex align-items-center justify-content-center"
  >
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :disabled="active == 1"
          v-on:click="handlePage(active - 1)"
        >
          <a
            class="cursor-poninter page-link glyphicon glyphicon-chevron-left color-purple h-100 d-block"
            href="#"
          >
            {{ "<" }}
          </a>
        </li>
        <li class="page-item" v-if="active - 4 > 0 ? true : false">
          <a class="cursor-poninter page-link" :disabled="true"> ... </a>
        </li>
        <li
          class="page-item"
                      :class="index == active ? 'active' : ''"

          :key="index"
          v-for="index in this.pagination1.last_page"
        >
          <a
            v-on:click="handlePage(index)"
            class="cursor-poninter page-link"
            :disabled="index == active"
            v-if="checkPage(index, active)"
            v-html="index"
          ></a>
        </li>
        <li
          class="page-item"
          v-if="active + 4 < this.pagination1.last_page ? true : false"
        >
          <a class="cursor-poninter page-link" :disabled="true"> ... </a>
        </li>
        <li
          :disabled="this.pagination1.page == this.pagination1.last_page"
          v-on:click="handlePage(active + 1)"
          class="page-item"
        >
          <a
            class="cursor-poninter page-link glyphicon glyphicon-chevron-right color-purple h-100 d-block"
            href="#"
          >
            {{ ">" }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["pagination1"],
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    pagination1: function (newVal, oldVal) {
      this.active = this.pagination1.page;
    },
  },
  methods: {
    handlePage(page) {
      if (page <= this.pagination1.last_page && page != 0) {
        this.$emit("handlePage", page);
      }
    },
    checkPage(page, currentPage) {
      if (currentPage <= 4 && page <= 7) {
        return true;
      }
      if (page >= currentPage - 3 && page <= currentPage + 3) {
        return true;
      }
      return false;
    },
  },
  created() {
    this.active = this.pagination1.page;
  },
};
</script>
<style lang=""></style>
