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
      <TheTable> </TheTable>
      <!--  -->

      <!-- main-page-content -->
    </div>

    <!--  -->
    <!--  -->
    <!-- footer -->
    <div class="main-page-footer">
      <div class="footer-left">Tổng:<b style="font-size: 16px"> 20</b></div>
      <div class="footer-right footer-paging">
        <div class="paging-combobox combobox">
          <span class="paging-combobox-title">Số bản ghi/trang</span>
          <input type="text" class="paging-combobox-input" />
          <div class="footer-combobox-dropdown">
            <div class="mi-icon mi-icon-small mi-footer-icon-dropdown"></div>
            <div class="footer-combobox-dropdown-option combobox">
              <ul class="footer-option-list combobox-list">
                <li class="10-row">10</li>
                <li class="20-row">20</li>
                <li class="30-row">30</li>
                <li class="50-row">50</li>
                <li class="100-row">100</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="paging-navigation">
          <span class="paging-navigation-title">
            <b style="color: #000; font-size: 16px">1</b> -
            <b style="color: #000; font-size: 16px">9</b> bản ghi</span
          >
          <button
            class="
              mi-icon mi-icon-big
              paging-navigation-button
              pre-page
              disabled
            "
          ></button>
          <button
            class="mi-icon mi-icon-big paging-navigation-button next-page"
          ></button>
        </div>
      </div>
    </div>
  </div>
  <TheEmployeeForm :onClose="addEmployeeBtn" v-show="formVisiable" />
</template>

<script>
import TheTable from "../table/TheTable.vue";
import TheEmployeeForm from "../form/TheEmployeeForm.vue";

import { ref } from "vue";

export default {
  name: "TheMainPage",
  components: {
    TheTable,
    TheEmployeeForm,
  },

  setup() {
    const formVisiable = ref(false);
    const addEmployeeBtn = () => {
      formVisiable.value = !formVisiable.value;
    };

    return { formVisiable, addEmployeeBtn };
  },
};
</script>

