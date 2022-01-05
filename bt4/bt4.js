function tinhToan() {
  // Get the value of the input field with id="numb"
  var chieuDaiValue = document.getElementById("chieuDai").value * 1;
  var chieuRongValue = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDaiValue * chieuRongValue;
  var chuVi = (chieuDaiValue + chieuRongValue) * 2;
  //console.log({ x, y });
  document.getElementById("xuatChuVi").innerText =
    "Chu Vi Của HCN Này là : " + chuVi.toLocaleString("en-US");
  document.getElementById("xuatDienTich").innerText =
    "Diện Tích Của HCN Này là : " + dienTich.toLocaleString("en-US");
}
