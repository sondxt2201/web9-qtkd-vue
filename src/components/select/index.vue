<template>
  <select
    name=""
    id="department"
    v-model="department.DepartmentName"
    class="form-control-department input"
  >
    <option value="">-- Chọn đơn vị --</option>
    <option v-for="(item, index) in department" :key="index">
      {{ item.DepartmentName }}
    </option>
  </select>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";

defineProps({
  url: String,
});

const state = reactive({
  department: [],
});

onMounted(() => {
  axios
    .get("https://amis.manhnv.net/api/v1/Departments")
    .then((response) => {
      console.log("department:", response.data);
      state.department = response.data;
    })
    .catch((e) => {
      console.log(e);
    });
});
</script>

<style>
</style>