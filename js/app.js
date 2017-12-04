
document.getElementById("button").addEventListener("click", content);
/*document.getElementById("text").addEventListener("click", content);
document.getElementById("text").addEventListener("click", content);*/ ambos sirve para el conteo de caracteres

function content (event){
 var createP = document.createElement("p");
 newP.setAttribute("id","third_container");/* solamente llamara al contenedor */
 //Guarda el valor que se ingresa a twittCont
 var twittContainer = document.getElementsByName("text").value;
 /*newP.innerText = twittCont;*/
 document.getElementById("twitt").innerHTML=twittContainer;
 //newP = document.createTextNode(twittContainer);
 //newP.appendChild(twittContainer);
 var createDiv = document.createElement("div");
 var twittCont = document.createElement("section");
 createDiv.appendChild(createP);
 createDiv.classList.add("twitt");
 twittCont.appendChild(createDiv);
 twittCont.classList.add("twitt_section");
 twittCont.setAttribute("id","third_container");
 document.body.appendChild(twittCont);
}
document.getElementById("text").addEventListener("keypress", count);