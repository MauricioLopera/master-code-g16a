//Definicion de clases de POO
class Vehiculo {
    constructor(marca, modelo, valor, color){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Valor = valor;
        this.Color = color;
        this.Estado = function (estado){
            if(estado == 1){
                return 'El vehiculo se apagó';
            }
            else{
                return 'El vehiculo se encendio';
            }
        }
    }
}

//creamos copia de la clase Vehiculo
let vehiculo1 = new Vehiculo ('Toyota', 2022, 230000, 'Blanco');
let vehiculo2 = new Vehiculo ('Nissan', 2021, 200000, 'Negro');
let vehiculo3 = new Vehiculo ('Chevrolet', 2023, 150000, 'Plateado');

console.log(vehiculo1.Marca);
console.log(vehiculo2.Marca);
console.log(vehiculo1.Estado(1));
console.log(vehiculo2.Estado(0));

let arregloVehiculos = [vehiculo1, vehiculo2, vehiculo3];

function obtenerNombre (objeto){
    return objeto.Marca;
}

//Obtener propiedades con Map
let nombresVehiculos = arregloVehiculos.map(obtenerNombre);

console.log(nombresVehiculos);

function filtroValor (objeto){
    if(objeto.Valor <= 200000){
        return objeto;
    }
}

//Filtral propiedades con Filter
let filtroVehiculos = arregloVehiculos.filter(filtroValor);

console.log(filtroVehiculos);

//Crear una aplicacion que permita obtner la nota promedio de cada estudiante de un profesor y la nota promedio del grupo completo.
// 1. Se requiere que cada alumno tenga: Nombre completo y sus calificaciones.
// 2. Se requiere que el profesor indique cuantos estudiantes va a ingresar.
// 3. Se requiere que el profesor indique cuantas notas digitara para cada alumno.
// 4. Imprimir con Alert el promedio de cada estudiante.
// 5. Imprimir con Alert el promedio general del grupo.