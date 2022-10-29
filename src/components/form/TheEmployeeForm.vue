<template >
  <div class="formEmployee flex">
    <div class="formEmployee-container">
      <div class="container-header">
        <div class="container-header--left">
          <div class="container-header-title">Thông tin nhân viên</div>
          <div class="container-header-input">
            <input type="checkbox" name="header-name" id="" />
            <span class="checkbox-name">Là khách hàng</span>
          </div>
          <div class="container-header-input right">
            <input type="checkbox" name="header-name" id="" />
            <span class="checkbox-name">Là nhà cung cấp</span>
          </div>
        </div>

        <div class="container-header--right">
          <div class="mi-form-icon-help mi-icon mi-icon-big"></div>
          <div
            class="mi-form-icon-escape mi-icon mi-icon-big"
            @click="onClose"
          ></div>
        </div>
      </div>

      <div class="container-body">
        <div class="body--basic-info flex">
          <div class="info--notEmpty" id="form-required">
            <div class="info--notEmpty-top flex no-left">
              <div class="form-group-small flex no-left">
                <div class="employee-code flex">
                  <label for="employee-code" class="form-label employee-code"
                    >Mã nhân viên</label
                  >
                  <span class="form-message">*</span>
                </div>
                <input
                  v-model="formData.employeeCode"
                  type="text"
                  name="name"
                  id="txtEmployeeCode"
                  class="form-control-employee-code input"
                />
              </div>

              <div class="form-group-big flex no-left">
                <div class="full-name flex">
                  <label for="name" class="form-label name">Tên</label>
                  <span class="form-message">*</span>
                </div>
                <input
                  v-model="formData.employeeName"
                  type="text"
                  name="name"
                  id="txtFullName"
                  class="form-control-name input"
                />
              </div>
            </div>
            <div class="info--notEmpty-info-bottom">
              <div class="form-group flex combobox no-left">
                <div class="department flex">
                  <label for="department" class="form-label department"
                    >Đơn vị</label
                  >
                  <span class="form-message">*</span>
                </div>
                <select
                  name="department"
                  id="department"
                  v-model="formData.DepartmentId"
                  class="form-control-department input"
                >
                  <option value="">-- Chọn đơn vị --</option>
                  <option
                    v-for="(item, index) in department"
                    :key="index"
                    v-bind:value="item.DepartmentId"
                  >
                    {{ item.DepartmentName }}
                  </option>
                </select>
              </div>

              <div class="form-group flex no-left">
                <label for="position" class="form-label position"
                  >Chức danh</label
                >
                <input
                  v-model="formData.positionName"
                  type="text"
                  name="name"
                  id=""
                  class="form-control-position input"
                />
              </div>
            </div>
          </div>

          <div class="info--optional">
            <div class="info--optional-top flex">
              <div class="form-group-small flex no-left">
                <label for="" class="form-label date-Of-Birth">Ngày sinh</label>

                <div class="datepicker-wrapper">
                  <input
                    v-model="formData.dateOfBirth"
                    type="text"
                    placeholder="Ngày/Tháng/Năm"
                    class="form-control-employee input born-date"
                    onfocus="(this.type='date')"
                    id="txtDateOfBirth"
                  />
                </div>
              </div>

              <div class="form-group-big flex">
                <label for="gender" class="form-label form-label--gender"
                  >Giới tính</label
                >
                <ul class="gender-select flex">
                  <li class="gender-option flex">
                    <input
                      v-model="formData.gender"
                      type="radio"
                      name="gender"
                      id="radio-option-male"
                      class="male"
                      v-bind:value="1"
                    />
                    <div class="check"></div>
                    <label for="radio-option-male" class="male">Nam</label>
                  </li>
                  <li class="gender-option flex">
                    <input
                      v-model="formData.gender"
                      type="radio"
                      name="gender"
                      id="radio-option-female"
                      class="female"
                      v-bind:value="0"
                    />
                    <div class="check"></div>
                    <label for="radio-option-female" class="female">Nữ</label>
                  </li>
                </ul>
                <!-- <div>checked: {{formData.gender}}</div> -->
              </div>
            </div>

            <div class="info--optional-middle flex">
              <div class="form-group-big flex no-left">
                <label for="" class="form-label idNumber"> Số CMND </label>
                <input
                  v-model="formData.identityNumber"
                  type="text"
                  name="name"
                  id="txtIDNumber"
                  class="form-control-employee input"
                />
              </div>

              <div class="form-group-small flex">
                <label for="id-date" class="form-label form-label--id-date"
                  >Ngày cấp</label
                >
                <div class="datepicker-wrapper">
                  <input
                    v-model="formData.identityDate"
                    type="text"
                    placeholder="Ngày/Tháng/Năm"
                    class="form-control-employee input born-date"
                    onfocus="(this.type='date')"
                  />
                </div>
              </div>
            </div>

            <div class="form-group flex no-left">
              <label for="id-address" class="form-label id-address"
                >Nơi cấp</label
              >
              <input
                v-model="formData.identityPlace"
                type="text"
                name="name"
                id=""
                class="form-control-position input"
              />
              <!-- <span class="form-message"></span> -->
            </div>
          </div>
        </div>
        <div class="body--contact-info flex">
          <div class="contact-info-top">
            <div class="form-group-large flex">
              <label for="address" class="form-label address">Địa chỉ</label>
              <input
                v-model="formData.address"
                type="text"
                name="name"
                id=""
                class="form-control-contact input"
              />
            </div>
          </div>

          <div class="contact-info-middle">
            <div class="contact-info-middle--phone flex">
              <div class="form-group-medium flex">
                <label for="cellphone" class="form-label cellphone"
                  >ĐT di động</label
                >
                <input
                  v-model="formData.telephoneNumber"
                  type="text"
                  name="name"
                  id="txtPhoneNumber"
                  class="form-control-contact input"
                  placeholder="0912-345-678"
                />
              </div>

              <div class="form-group-medium flex">
                <label for="phone" class="form-label phone">ĐT cố định</label>
                <input
                  v-model="formData.phoneNumber"
                  type="text"
                  name="name"
                  id=""
                  class="form-control-contact input"
                  placeholder="(080)-43162"
                />
              </div>

              <div class="form-group-medium flex">
                <label for="email" class="form-label email">Email</label>
                <input
                  v-model="formData.email"
                  type="text"
                  name="name"
                  id="txtEmail"
                  class="form-control-contact input"
                  placeholder="abc@def.com"
                />
              </div>
            </div>

            <div class="contact-info-middle--bank flex">
              <div class="form-group-medium flex">
                <label for="bank-account" class="form-label bank-account"
                  >Tài khoản ngân hàng</label
                >
                <input
                  v-model="formData.bankAccountNumber"
                  type="text"
                  name="name"
                  id=""
                  class="form-control-contact input"
                  placeholder="19024-70518-3012"
                />
              </div>

              <div class="form-group-medium flex">
                <label for="bank-name" class="form-label bank-name"
                  >Tên ngân hàng</label
                >
                <input
                  v-model="formData.bankName"
                  type="text"
                  name="name"
                  id=""
                  class="form-control-contact input"
                  placeholder="Techcombank"
                />
              </div>

              <div class="form-group-medium flex">
                <label for="bank-address" class="form-label bank-address"
                  >Chi nhánh</label
                >
                <input
                  v-model="formData.bankBranchName"
                  type="text"
                  name="name"
                  id=""
                  class="form-control-contact input"
                  placeholder="Hàng Đậu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-footer">
        <btnCommon
          :classBtn="'cancel button btnEsc'"
          :text="'Huỷ'"
          @click="onClose"
        />
        <div class="add-employee flex">
          <btnCommon :classBtn="'add-to-table button'" :text="'Cất'" />
          <btnCommon
            :classBtn="'add-to-database button'"
            :text="'Cất và thêm'"
            @click="handleClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url("../form/TheEmployeeForm.vue");
</style>
<script>
// import axios from "axios";
import btnCommon from "@/components/control/btnCommon.vue";
import { getData, postData } from "@/utils/axios-common";

export default {
  name: "TheEmployeeForm",
  props: ["onClose"],
  components: {
    btnCommon,
  },
  data() {
    return {
      department: {},
      formData: {},
      employeeURL: "https://amis.manhnv.net/api/v1/Employees",
      departmentURL: "https://amis.manhnv.net/api/v1/Departments",
    };
  },

  methods: {
    // Gửi dữ liệu lên Database khi nha
    handleClick() {
      console.log("formData: ", this.formData);
      postData(this.employeeURL, this.formData);
    },

    // Gọi hàm getData để lấy dữ liệu department
    getData,
    // Gán dữ liệu về Department cho combobox trong form
    setData() {
      this.getData(this.departmentURL).then((res) => (this.department = res));
    },
  },
  mounted() {
    // Get thông tin Department và gán cho combobox trong fomr
    this.setData();
  },
  watch() {},
};
</script>