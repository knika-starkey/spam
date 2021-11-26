function spamChecker(str) {
  let checkline = str.toLowerCase();
  let arrold = str.split(" ");
  let arrnew = checkline.split(" ");
  let newline = "";
  for (let i = 0; i < arrold.length; i++) {
    if (arrnew[i] == "spam") arrold[i] = "***";
    newline += arrold[i] + " ";
  }
  return newline;
}
let line = prompt("Введите строку");
alert(spamChecker(line));
