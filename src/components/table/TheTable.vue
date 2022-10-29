<template>
  <div class="content-table">
    <table id="employeeList" class="table">
      <!-- table head -->
      <thead>
        <tr>
          <th
            class="justify-center no_padding column-tiny-width"
            prop-name="checkbox"
          >
            <input type="checkbox" />
          </th>
          <th
            class="text-align--left column-medium-width"
            prop-name="employeeCode"
          >
            Mã nhân viên
          </th>
          <th
            class="text-align--left column-fullName column-large-width"
            prop-name="fullName"
          >
            Tên nhân viên
          </th>
          <th
            class="text-align--left column-gender column-small-width"
            prop-name="gender"
          >
            Giới tính
          </th>
          <th
            class="text-align--center no_padding column-medium-width"
            prop-name="dateOfBirth"
          >
            Ngày sinh
          </th>
          <th class="text-align--left column-big-width" prop-name="idNumber">
            Số CMND
          </th>
          <th class="text-align--left column-large-width" prop-name="position">
            Chức danh
          </th>
          <th
            class="text-align--left column-large-width"
            prop-name="department"
          >
            Tên đơn vị
          </th>
          <th
            class="text-align--left column-medium-width"
            prop-name="bankNumber"
          >
            Số tài khoản
          </th>
          <th class="text-align--left column-large-width" prop-name="bankName">
            Tên ngân hàng
          </th>
          <th
            class="text-align--left no-right-border column-large-width"
            prop-name="status"
          >
            Chi nhánh TK ngân hàng
          </th>
          <th
            class="
              text-align--center
              no_padding
              table-anchor-right
              column-small-width
            "
            prop-name="function"
          >
            Chức năng
          </th>
        </tr>
      </thead>
      <!--  -->

      <!-- table body -->
      <div v-if="loading">
        <TheLoading />
        loading......
      </div>
      <tbody v-if="!loading">
        <tr v-for="employee in employees" :key="employee.EmployeeId">
          <td class="text-align--center no_padding column-tiny-width">
            <input type="checkbox" />
          </td>
          <td class="text-align--left column-medium-width">
            {{ employee.EmployeeCode }}
          </td>
          <td class="text-align--left column-large-width">
            {{ employee.EmployeeName }}
          </td>
          <td class="text-align--left column-small-width">
            {{ employee.GenderName }}
          </td>
          <td class="text-align--center no_padding column-medium-width">
            {{ formatDate(employee.DateOfBirth) }}
          </td>
          <td class="text-align--left column-big-width">
            {{ employee.IdentityNumber || "" }}
          </td>
          <td class="text-align--left column-large-width">
            {{ employee.PositionName }}
          </td>
          <td class="text-align--left column-large-width">
            {{ employee.DepartmentName }}
          </td>
          <td class="text-align--left column-medium-width">
            {{ employee.BankAccountNumber || "" }}
          </td>
          <td class="text-align--left column-large-width">
            {{ employee.BankName || "" }}
          </td>
          <td class="text-align--left no-right-border column-large-width">
            {{ employee.BankBranchName || "" }}
          </td>
          <td
            class="
              text-align--center
              no_padding
              table-anchor-right
              column-small-width
            "
          >
            <div class="table-combobox combobox no-right-border">
              <button href="" class="table-combobox-title button">Sửa</button>
              <div class="table-combobox-dropdown">
                <button
                  class="mi-icon mi-icon-small mi-table-icon-dropdown"
                ></button>
                <div class="table-combobox-dropdown-option">
                  <ul class="table-option-list">
                    <li class="duplicate-option">Nhân bản</li>
                    <li class="delete-option">Xoá</li>
                    <li class="disable-option">Ngưng sử dụng</li>
                  </ul>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
      <!--  -->
    </table>
  </div>
</template>
<script >
import TheLoading from "../loading/TheLoading.vue";
import { formatDate } from "./table";
export default {
  name: "TheTable",
  props: ["employees", "loading"],
  components: {
    TheLoading,
  },
  methods: {
    formatDate,
  },
};
</script>
