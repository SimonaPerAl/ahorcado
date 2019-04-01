
let peliculas = ['ALIEN', 'BRAVE', 'TITANIC', 'DUMBO', 'FORREST GUMP', 
'THE GODFATHER', 'CASABLANCA', 'TODO SOBRE MI MADRE', 'RELATOS SALVAJES', 'GRAVITY'];
vidas = 7;
document.getElementById("vidas").innerHTML = vidas;
//PUEDE QUE ESTAS DOS SEAN REDUNDANTES
//let correctas = [];
//let incorrectas = [];
//reset();

//Escucha cuando el usuario cliquea play y le muesta los guiones en la pantalla
document.getElementById("play").addEventListener("click", function(e){
    if(e.target.id ==="play"){
        document.getElementById("play").removeAttribute("id");
    }
reset();

console.log('vidas: ' + vidas);  
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

//Si el título incluye un espacios, los agrega
for (var i=0; i<letrasSeparadas.length; i++){
if (letrasSeparadas[i] === " ") {
aAdivinar[i+1] = "&nbsp;" ;//&nbsp; es el espacio porque " " no puede ser un elemento en un Array 
}
}

	document.getElementById("titulo").innerHTML = guionesJuntos;
    console.log('letras separadas: '+ letrasSeparadas);
    console.log('largo de la seleccionada: ' + seleccionada.length);
    console.log('seleccionada: ' + seleccionada);


//Escucha lo que cliquea el usuario y cerifica si son las letras correctas o no
document.addEventListener('click', function(e){ 
if(e.target.id === "play"){
	reset
}
	let letraCliqueada = e.target.id;
 	console.log('letra cliqueada: '+ letraCliqueada);
 	let acierto = seleccionada.includes(letraCliqueada);
 	//HAY QUE HACER QUE ESTA PARTE DEL CÓDIGO USE RESET CUAND EL USUARIO VUELVE A CLIQUEAR PLAY
 if (!acierto){ 			
 		vidas--;
 		document.getElementById("vidas").innerHTML = vidas;
 		console.log('vidas : '+vidas);
 		incorrectas.push(letraCliqueada);
 		document.getElementById("incorrectas").innerHTML = incorrectas;
 		console.log('letras incorrectas: ' + incorrectas);
 		if(vidas === 0){
 			alert('perdiste');
 			reset();
 		}
 	}else{
		for (var i=0; i<letrasSeparadas.length; i++){
			if(letrasSeparadas[i]===letraCliqueada){
				aAdivinar[i+1] = letraCliqueada;
				correctas.push(letraCliqueada);
				}
			}
//HERE
 		guionesJuntos2 = aAdivinar.join(" ");
		console.log('guiones 2:' + guionesJuntos2);
 		document.getElementById("titulo").innerHTML = guionesJuntos2;

 		let noAdivinada = guionesJuntos2.includes("_ ");
 		if(!noAdivinada){
 			setTimeout (function(){ alert("ganaste"); }, 700);
 			reset()
 		}
 		}
 	});

});


function reset(){
	vidas = 7;
	aAdivinar = [];
	incorrectas = [];
	correctas = [];
	guionesJuntos2 = [];
	guionesJuntos = [];
console.log('reseteo');
}
