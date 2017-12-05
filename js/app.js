
document.getElementById("btn").addEventListener("click", cont);
document.getElementById("text").addEventListener("keyup", contCaracteres);
document.getElementById("text").addEventListener("keyup", btnEvent);
window.addEventListener("load", btnEvent);
//document.getElementById("text").addEventListener('keyup', autosize);
document.getElementById("text").addEventListener("input",autosize);

//funciones para botón
function btnEvent(event) {
  var contTextwett = document.getElementById("text").value;
  if(contTextwett === ""){
    return disableBtn();
  } else if (contTextwett === " ") {
    return disableBtn();
  }
};

function disableBtn(){
  document.getElementById("btn").disabled = true;
  document.getElementById("btn").style.backgroundColor = "lightgrey";
  document.getElementById("btn").style.color = "grey";
};
function undisableBtn() {
  contador.style.font="black";
  document.getElementById("btn").disabled = false;
  document.getElementById("btn").style.backgroundColor = "rgb(107,208,240)";
  document.getElementById("btn").style.color = "white";
};

function cont (event){
  var contTextwett = document.getElementById("text").value;
  //if (twittContText === ""){
    //document.getElementById("button").disabled = true;
    //document.getElementById("button").style.backgroundColor = "lightgrey";
    //document.getElementById("button").style.color = "grey";
//  } else {
    var addP = document.createElement("p");
    addP.setAttribute("id","show_twitt");
    var twittContText = document.getElementById("text").value;
    addP.innerText=twittContText;
    var addP1 = document.createElement("p");
    addP1.innerText = clock();
    addP1.setAttribute("id","time");

    var addDiv= document.createElement("div");
    var twitterConteiner = document.createElement("section");
    addDiv.appendChild(addP);
    addDiv.appendChild(addP1);
    addDiv.classList.add("twitt");
    twitterConteiner.appendChild(addDiv);
    twitterConteiner.classList.add("secc-bloque");
    twitterConteiner.setAttribute("id","show_twitt");
    var insert1 = document.getElementsByClassName("main-container");
    insert1[0].appendChild(twitterConteiner);
    document.body.appendChild(insert1[0]);
    //Borrar el contenido de la caja de text y el contador
    text.value="";
    contador.textContent=140;
    document.getElementById("text").setAttribute("rows", "4");
    disableBtn();
      //}
};
// Función que realiza el conteo de caracteres
function contCaracteres (event){
  var maxCaracteres=140;
  var caracteresTotal=0;
  //textLength muestra el conteo de caracteres
  var lengthTexto=document.getElementById("text").value.length;
  //totalLength muestra la resta de los caracteres insertados
  caracteresTotal=maxCaracteres-lengthTexto;
  document.getElementById("contador").innerText=caracteresTotal;
  if (caracteresTotal === 140){
    document.getElementById("contador").style.color="black";
    return disableBtn();
  }else if(caracteresTotal<0){
    document.getElementById("contador").style.color="grey";
    return disableBtn();
  }
  else if(caracteresTotal<=20 && caracteresTotal>10){
    document.getElementById("contador").style.color="blue";
    return undisableBtn();
  }
  else if(caracteresTotal<=10 && caracteresTotal>=0 ){
    document.getElementById("contador").style.color="red";
    return undisableBtn();
  }
  else {
    document.getElementById("contador").style.color="black";
    //document.getElementById("button").style.backgroundcolor="rgb(107,208,240)";
    return undisableBtn();
  }
};

//función para agrandar caja con texto
function autosize(event){
  var el = document.getElementById("text");
  //setTimeout(function(){
    el.style.cssText = 'height:auto; padding:10px';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
//  }, 0);
};

//función reloj

function clock(){
  var day = new Date();
  hour = day.getHours();
  minutes = day.getMinutes();
  var dateTime = "AM";
  //cambia a PM cuando han pasado 12 hrs
  if(hour === 12){
    dateTime = "PM";
  } else if(hour > 12){
    dateTime = "PM";
    hour = hour-12;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var clockSet = hour + ":" + minutes+ " " +dateTime;
  return clockSet;
};

