function spamChecker(str) {
  let checkline = str.toLowerCase();
  if (checkline.indexOf("spam") >= 0) {
    alert("true");
    return true;
  } else {
    alert("false");
    return false;
  }
}

let line = prompt("Введите строку");
spamChecker(line);
