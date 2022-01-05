function tongKySo() {
  // Get the value of the input field with id="numb"
  var numValue = document.getElementById("num").value * 1;
  var kySo1 = numValue % 10;
  var kySo2 = Math.floor(numValue / 10);
  var result = kySo1 + kySo2;
  //console.log({ z });
  document.getElementById("xuatTong").innerText =
    "Tổng ký số của số trên là : " + result;
}
