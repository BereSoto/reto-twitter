
function count (event){
  var maxLength=139;
  var totalLength=0;
  //textLength muestra el conteo de caracteres
  var textLength=document.getElementById("text").value.length;
  //totalLength muestra la resta de los caracteres insertados
  totalLength=maxLength-textLength;
  document.getElementById("counter").innerText=totalLength;
}

document.getElementById("button").addEventListener("click", createCont);
document.getElementById("text").addEventListener("keypress", count);

function createCont (event){
  var newP = document.createElement("p");

  //Guarda el valor que se ingresa a twittCont

  var twittContText = document.getElementById("text").value;
  newP.innerText=twittContText;
  var newP1 = document.createElement("p");
  newP1.innerText = clock();
  var newDiv= document.createElement("div");
  var contTwitt = document.createElement("section");
  newP.setAttribute("id","newtwitt");
  newP1.setAttribute("id","time");
  newDiv.appendChild(newP);
  newDiv.appendChild(newP1);
  newDiv.classList.add("twitt");
  contTwitt.appendChild(newDiv);
  contTwitt.setAttribute("id","show_twitt");
  contTwitt.classList.add("block_seccion");
  var insert1 = document.getElementsByClassName("container");
  insert1[0].appendChild(contTwitt);
  document.body.appendChild(insert1[0]);
  //Borrar el contenido de la caja de text
};

