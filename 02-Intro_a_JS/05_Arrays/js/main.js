// var arrays = []; // esta vacio

// var valores = ['hola','mascota','comida','adios'];

// for(var i = 0; i < valores.length; i++){
//     alert(valores[i]);
// }

//-----------------------------------------------------
// var mascota, mascota1, mascota2, cadenaMascota;
// var arrayMascotas=[];

// mascota = prompt('Ingresa el nombre de tu mascota1:');
// mascota1 = prompt('Ingresa el nombre de tu mascota2:');
// mascota2 = prompt('Ingresa el nombre de tu mascota3:');

// if(mascota === '' || mascota1 === "" || mascota2 === ''){
//     alert('Por favor rellena el campo correctamente:');
// }
// else{
//     arrayMascotas.push(mascota, mascota1);
//     arrayMascotas.push(mascota2);

//     cadenaMascota = `Las mascota de luis se llaman ${arrayMascotas[0]},${arrayMascotas[1]}, ${arrayMascotas[2]} y el las quiere mucho`;

//     alert(cadenaMascota);
// }

//------------------------------------------------------------------------
/* 
1. Crear un arreglo de 6 platillos
2.Mediante un ciclo for, mostrar todos los platillos
3.Mediante un for o  if, mostrar solo la valor 3 y 5 
4.Mediante un for o if, mostrar los elementos impares
5.Mediante un for o if, mostrar los elementos pares*/

//creando el arreglo
var platillos =[
'Tamal',//0
'Tacos',//1
'Enchiladas',//2
'Quesadillas',//3
'Tostadas',//4
'Garnachas'];//5
// //paso 1
// for(var i=0; i<platillos.length; i+=1){
//     console.log(platillos[i])
// }

//paso1
// for(var k=0; k<6; k++){
//     if(platillos[k] === platillos[3] || platillos[k] === platillos[5]){
//         console.log(platillos[k]);
//     }
// }

//paso2
// for(var i=1; i<6; i+=2){
//     console.log(platillos[i])
// }

//segunda forma de resolverlo
// for(var i=0; i<6; i++){
//     if(i%2 !=0){
//         console.log(platillos[i])

//     }

// }
//pares

for(i=0; i<6; i++){
    if(i/2){
        console.log(platillos[i])
    }

}