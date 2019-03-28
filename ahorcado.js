let peliculas = ['ALIEN', 'BRAVE', 'MOTHER', 'DUMBO', 'FROZEN'];
let vidas = 7;
let letras = document.getElementsByClassName("letter");
document.getElementById("vidas").innerHTML = vidas;
//selector random de películas
const random = Math.floor(Math.random()*5);
let seleccionada = peliculas[random];
let incorrectas = [];
//separa las letras (para poder compararlas con lo que cliquee el usuario)
//crea unAarray igual de largo que la palabra y lo llena de guiones
let letrasSeparadas = Array.from(seleccionada);
let largo = letrasSeparadas.length;
let aAdivinar =[""];
for(let i = 1; i< largo+1; i++){
	aAdivinar.push( "_ ");
}

//Junta los guiones para que en pantalla no se muestre la coma que separa los elementos del Array
let guionesJuntos = aAdivinar.join(" ");
console.log('la pelicula es ' + guionesJuntos);

//Escucha cuando el usuario cliquea play y le muesta los guiones en la pantalla
document.getElementById("play").addEventListener("click", function(){	 
	document.getElementById("titulo").innerHTML = guionesJuntos;
    console.log(letrasSeparadas);
    console.log(seleccionada.length);
    console.log(seleccionada);
    document.getElementById("play").removeAttribute("id");
});

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
 		lugar = letrasSeparadas.indexOf(letraCliqueada)+1;
 		aAdivinar[lugar] = letraCliqueada;
 		let guionesJuntos = aAdivinar.join(" ");
 		console.log('aAdivinar: ' + aAdivinar);
 		console.log(lugar);
 		document.getElementById("titulo").innerHTML = guionesJuntos  ;
 		}
 	});
 
