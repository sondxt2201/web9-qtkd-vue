function formatDate(dob) {
  try {
    if (dob !== "" && dob !== null) {
      let d = new Date(dob);
      //Lấy ra ngày
      var date = d.getDate();
      // Lấy ra tháng
      var month = d.getMonth() + 1;
      // Lấy ra năm
      var year = d.getFullYear();
      // Trả về giá trị là ngày/tháng/năm
      return `${date} / ${month} / ${year}`;
      // this.employees.DateOfBirth = dob;
    } else {
      dob = "";
    }
  } catch (error) {
    console.log(error);
  }
}

export { formatDate };
