function quyDoi() {
  // Get the value of the input field with id="numb"
  var tienUSDValue = document.getElementById("tienUSD").value * 1;
  var tienVNDValue = 23500;
  var result = tienUSDValue * tienVNDValue;
  //console.log("tien luong la:", c);
  document.getElementById("xuatQuyDoi").innerText =
    "Số Tiền Quy Đổi là : " + result.toLocaleString("en-US") + " VND";
}
