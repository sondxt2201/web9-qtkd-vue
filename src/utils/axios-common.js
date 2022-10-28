import axios from "axios";

// Thực hiện GET API
function getData(url) {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

// Thực hiện POST API
function postData(url, dat) {
  axios
    .post(url, dat)
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
}

export { getData, postData };
