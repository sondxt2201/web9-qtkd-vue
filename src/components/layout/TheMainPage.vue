<template>
  <div class="main-page-container">
    <!--  -->
    <!--  -->
    <div class="main-page-header">
      <div class="main-page-header-title">Nhân viên</div>
      <button
        class="main-page-header-button button button-add"
        @click="addEmployeeBtn"
      >
        Thêm mới nhân viên
      </button>
    </div>

    <!--  -->
    <!--  -->
    <div class="main-page-content">
      <!-- main-page-content -->
      <!-- toolbar -->
      <div class="content-toolbar">
        <input
          type="text"
          class="toolbar-input input"
          placeholder="Tìm theo mã, tên nhân viên"
        />

        <button class="mi-icon mi-icon-medium mi-toolbar-icon-search"></button>
        <button class="mi-icon mi-icon-big mi-toolbar-icon-refresh"></button>
      </div>
      <!--  -->

      <!-- table -->
      <TheTable :employees="data.res?.Data" :loading="data.loading" />
      <!--  -->

      <!-- main-page-content -->
    </div>

    <!--  -->
    <!--  -->
    <!-- footer -->
    <ThePagination
      :setFilter="setFilter"
      :total="data.res?.TotalRecord"
      :totalPage="data.res?.TotalPage"
      :filters="filters"
    />
  </div>
  <TheEmployeeForm :onClose="addEmployeeBtn" v-show="formVisiable" />
</template>

<script setup>
import TheTable from "../table/TheTable.vue";
import TheEmployeeForm from "../form/TheEmployeeForm.vue";
import ThePagination from "../paging/ThePagination.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { getEmployees } from "@/utils/axios-common";

// defineProps(["loading"]);
const formVisiable = ref(false);

const addEmployeeBtn = () => {
  formVisiable.value = !formVisiable.value;
};

const data = reactive({
  loading: false,
  res: undefined,
});

const filters = reactive({});

const setFilter = (set) => set(filters);

onMounted(() => {
  filters.pageNumber = 1;
  filters.pageSize = 10;
});

watch(filters, () => {
  getEmployees.call(data, filters);
});

// deleteData()
</script>

