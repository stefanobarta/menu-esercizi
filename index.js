var scommesseArr = [1, 1, 1, 1];
var risultati = [1, "X", 2];
var giusti = [];
var ris = 0;
function inizio() {
  var eta = document.getElementById("eta").value;
  if (eta >= 18) {
    window.location.replace("index2.html");
  } else {
    alert("non puoi giocare se sei minorenne");
  }
}

function gioco() {
  scommesseArr[0] = document.querySelector(
    'input[name="scommessa1"]:checked'
  ).value;
  scommesseArr[1] = document.querySelector(
    'input[name="scommessa2"]:checked'
  ).value;
  scommesseArr[2] = document.querySelector(
    'input[name="scommessa3"]:checked'
  ).value;
  scommesseArr[3] = document.querySelector(
    'input[name="scommessa4"]:checked'
  ).value;
  for (i = 0; i < 4; i++) {
    ris = Math.floor(Math.random() * 3);
    if (ris == 1) {
      giusti[i] = "X";
    } else {
      if (ris == 0) giusti[i] = 1;
      else {
        giusti[i] = 2;
      }
    }
  }

  document.body.append("\n");

  for (i = 0; i < 4; i++) {
    document.body.append(giusti[i] + "    ");
  }
  if (
    scommesseArr[0] == giusti[0] &&
    scommesseArr[1] == giusti[1] &&
    scommesseArr[2] == giusti[2] &&
    scommesseArr[3] == giusti[3] &&
    scommesseArr[4] == giusti[4]
  )
    alert("tutti i risultati sono giusti, hai vinto!!!!!");
  else {
    alert("purtroppo hai perso");
  }
}

function esegui() {
  console.log(scommessa1Value);
}
