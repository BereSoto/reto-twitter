function count (event){
  var maxLength=139;
  var totalLength=0;
  //textLength muestra el conteo de caracteres
  var textLength=document.getElementById("text").value.length;
  //totalLength muestra la resta de los caracteres insertados
  totalLength=maxLength-textLength;
  document.getElementById("counter").innerText=totalLength;
}
