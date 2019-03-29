let peliculas = ['ALIEN', 'BRAVE', 'TITANIC', 'DUMBO', 'FORREST GUMP', 
'THE GODFATHER', 'CASABLANCA', 'TODO SOBRE MI MADRE', 'RELATOS SALVAJES', 'GRAVITY'];
let vidas = 7;
let letras = document.getElementsByClassName("letter");
document.getElementById("vidas").innerHTML = vidas;

let incorrectas = [];
let correctas = [];
let aAdivinar = [];
let guionesJuntos = [];

//Escucha cuando el usuario cliquea play y le muesta los guiones en la pantalla
document.getElementById("play").addEventListener("click", function(){






//selector random de películas
const random = Math.floor(Math.random()*10);
let seleccionada = peliculas[random];



//separa las letras (para poder compararlas con lo que cliquee el usuario)
//crea un Array igual de largo que la palabra y lo llena de guiones
let letrasSeparadas = Array.from(seleccionada);
let largo = letrasSeparadas.length;
let aAdivinar =[""];
for(let i = 1; i< largo+1; i++){
	aAdivinar.push( "_ ");
}

//Junta los guiones para que en pantalla no se muestre la coma que separa los elementos del Array
let guionesJuntos = aAdivinar.join(" ");
console.log('la pelicula es ' + guionesJuntos);
//Si el título incluye un espacio, lo agrega
for (var i=0; i<letrasSeparadas.length; i++){
if (letrasSeparadas[i] === " ") {
aAdivinar[i+1] = "&nbsp;" ;//&nbsp; es el espacio porque " " no puede ser un elemento en un Array 
}
}







	document.getElementById("titulo").innerHTML = guionesJuntos;
    console.log(letrasSeparadas);
    console.log(seleccionada.length);
    console.log(seleccionada);
    document.getElementById("play").removeAttribute("id");





//Escucha lo que cliquea el usuario y cerifica si son las letras correctas o no
document.addEventListener('click', function(e){ 		
 	console.log(e.target.id);
 	let letraCliqueada = e.target.id;
 	let acierto = seleccionada.includes(letraCliqueada);
 	
 	if(!acierto){ 			
 		vidas--;
 		document.getElementById("vidas").innerHTML = vidas;
 		console.log(vidas);
 		incorrectas.push(letraCliqueada);
 		console.log(incorrectas);
 		document.getElementById("incorrectas").innerHTML = incorrectas;
 		if(vidas === 0){
 			alert('perdiste');
 		}
 	}else{
		for (var i=0; i<letrasSeparadas.length; i++){
			if(letrasSeparadas[i]===letraCliqueada){
				aAdivinar[i+1] = letraCliqueada;
				correctas.push(letraCliqueada);
 		 		guionesJuntos = aAdivinar.join(" ");
				console.log('guiones :' + guionesJuntos);
 				console.log('aAdivinar: ' + aAdivinar);
 				console.log(i); 		
				}
			}

 		guionesJuntos = aAdivinar.join(" ");
		console.log('guiones :' + guionesJuntos);
 		document.getElementById("titulo").innerHTML = guionesJuntos;

 		let noAdivinada = guionesJuntos.includes("_ ");
 		if(!noAdivinada){
 			setTimeout (function(){ alert("ganaste"); }, 700);
 		}
 		}
 	});





});

