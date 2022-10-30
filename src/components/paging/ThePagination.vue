<template>
  <div class="main-page-footer">
    <div class="footer-left">
      Tổng:
      <span> </span>
      <b style="font-size: 16px"> {{ total }}</b>
    </div>
    <div class="footer-right footer-paging">
      <div class="paging-combobox combobox">
        <div class="paging-combobox-title">Số bản ghi/trang</div>
        <select
          v-bind:value="filters.pageSize"
          @change="handleClick"
          class="paging-combobox-input"
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      <!-- Pagination -->
      <div class="paging-navigation">
        <span class="paging-navigation-title">
          bản ghi
          <b style="color: #000; font-size: 16px">{{ dataPagination }}</b>
          -
          <b style="color: #000; font-size: 16px">{{ totalDataPagination }}</b>
        </span>
        <button
          data-type="previous"
          @click="handleClick"
          class="mi-icon mi-icon-big paging-navigation-button pre-page"
        ></button>

        <button
          data-type="next"
          @click="handleClick"
          class="mi-icon mi-icon-big paging-navigation-button next-page"
        ></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/layout/mainpage.css");
</style>

<script setup>
import { computed } from "vue";

const props = defineProps(["total", "setFilter", "totalPage", "filters"]);

const totalDataPagination = computed(() =>
  props.filters.pageSize && props.filters.pageNumber
    ? props.filters.pageSize * props.filters.pageNumber > props.totalData
      ? props.totalData
      : props.filters.pageSize * props.filters.pageNumber
    : 0
);

const dataPagination = computed(() => {
  return totalDataPagination.value - props.filters.pageSize;
});
const handleClick = (e) => {
  props.setFilter((filters) => {
    if (e.currentTarget.value) {
      filters.pageSize = e.currentTarget.value;
    }
    switch (e.currentTarget.dataset.type) {
      case "next":
        if (filters.pageNumber < props.totalPage) filters.pageNumber += 1;
        break;
      case "previous":
        if (filters.pageNumber > 1) {
          filters.pageNumber -= 1;
        }
        break;

      default:
        break;
    }
  });
};
</script>