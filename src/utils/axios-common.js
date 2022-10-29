import axios from "axios";

const client = axios.create({
  baseURL: "https://amis.manhnv.net/api/v1",
});

// Get thông tin phân trang
function getEmployees(filters) {
  this.loading = true;
  client
    .get(
      `/Employees/filter?pageSize=${filters.pageSize}&pageNumber=${filters.pageNumber}`
    )
    .then((response) => {
      this.res = response.data;
    })
    .finally(() => {
      this.loading = false;
    })
    .catch((e) => {
      console.log(e);
    });
}

// Thực hiện GET API

function getData(url) {
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((e) => {
      console.log(e);
    });
}

// Thực hiện POST API
function postData(url, dat) {
  client
    .post(url, dat)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

export { getData, postData, getEmployees };
