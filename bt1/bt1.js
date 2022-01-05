function salary() {
  // Get the value of the input field with id="numb"
  var ngayLamValue = document.getElementById("day").value;
  var ngayCongvalue = 100000;
  var result = ngayCongvalue * ngayLamValue;
  //console.log("tien luong la:", c);
  // document.write("tien luong la :" + c);
  document.getElementById("xuatTienLuong").innerText =
    "Tiền Lương Nhân Viên Này là : " + result.toLocaleString("en-US") + " VND";
}
