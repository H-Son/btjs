function trungBinh() {
  // Get the value of the input field with id="numb"
  var num1value = document.getElementById("num1").value * 1;
  var num2value = document.getElementById("num2").value * 1;
  var num3value = document.getElementById("num3").value * 1;
  var num4value = document.getElementById("num4").value * 1;
  var num5value = document.getElementById("num5").value * 1;
  var result = (num1value + num2value + num3value + num4value + num5value) / 5;
  //console.log({ y });
  // document.write("tien luong la :" + c);
  document.getElementById("xuatTrungBinh").innerText =
    "Trung Bình Của Các Số Trên là : " + result;
}
