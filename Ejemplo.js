console.log(eval(new String("2 + 2")));
console.log('\n');
console.log(eval("2 + 2"));


var nombre = "Hola Mundo";
console.log(nombre)

var variable = "nombre";

let nombre2;
nombre2 = "Camilo";

const apellido = "Roncha";

console.log(variable, nombre2, apellido)

let nombrecompleto2 = "Sebastian Vanegas";
let nombreCompleto2 = "Camilo Rocha";
console.log(nombrecompleto2, nombreCompleto2)

let _1654 = "Hola";
let $gsdsga = " ";
let a1654 = "Mundo";

console.log(_1654, $gsdsga, a1654);

let x, y;
x = 7;
y = 14;

var bandera = true;

var simbolo = Symbol("Mi simbolo");
var z;

console.log(bandera, simbolo, z)

var objeto = {
    nombre: "Mauricio",
    apellido: "Rojas",
    telefono: 3222916128
}
var autos = ["BMW", "Audi", "Volvo"];
var Y = null;

console.log(objeto["nombre"])
console.log(objeto.nombre)

//Este tipo de funciones se llaman funciones declaradas, ya que se usa la palabra function.

function miEjemplo(){
    return "Que se dice";
}
console.log(miEjemplo());

//Existen funciones de tipo expresión, las cuales se definen a traves de la declaración de una variable asignandole como valor una funcion

let x1 = function (a,b){return a +b};
let resultado5 = x1(1,2);
console.log(resultado5)

// la anterior se conoce como función anonima dado que no se nombre la función, pero en dado caso de querer hace una funcion recursiva se hace necesario
// funcion recursiva: se llama asi misma
const factorial = function fac(n){
    return n < 2 ? 1 : n * fac( n-1);
};
console.log (factorial(3));

//Funciones flecha

const sumarFuncionFlecha = (num1,num2)=> num1+num2;{
resultado6 = sumarFuncionFlecha(3,5);
}
console.log(resultado6)

//Funcion para restar numeros


//Declarada
function miResta(d,f){
    console.log("resta"+(d-f) );
}
function miResta(num1, num2){
    let resultado;
    resultado = num1 - num2;
    return resultado;
    }
console.log (miResta (3,2));
//Expresada
let y1 = function (d,f){return d-f};
let resultado3 = y1(1,2);
console.log(resultado3)
//flecha
const restarFuncionFlecha = (num1,num2)=> num1-num2;{
    resultado9 = restarFuncionFlecha(3,5);
    }
    console.log(resultado9)

//Expresada

let w = function (numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
};
console.log(w(8)); 
console.log(w(9));

let persona = {        ///Objeto literal
  nombre: "Mauricio",
  apellido: "Rojas",
  telefono: 3222916128,
  email: "marojass@udistrital.edu.co",
  edad: 19,
  nombreCompleto: function (){return this.nombre + " " + this.apellido} ///Funcion anonima, no tiene nombre
}
console.log(persona.nombreCompleto())
console.log(persona["nombreCompleto"]())
console.log(persona.nombre);
console.log(persona["nombre"])

let persona3 = new Object (); ///New (Instanciar)
persona3.nombre = "Mauricio"; ///Clave = Valor
persona3.apellido = "Rojas";

persona.tel = 2348950823;

for (nombrePropiedad in persona){ ///nombrePropiedad Es la variable iteradora en persona
  console.log(nombrePropiedad);
  console.log(persona[nombrePropiedad])
}

let personaString = JSON.stringify(persona); ///Objeto en cadena
console.log(personaString);


function PersonaReal (nombre = "Juan", apellido, email){
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function(){
    return this.nombre + " " + this.apellido; ///Concatenación = Es cuando una cadena (Casi siempre de texto) Se une con otra
  }
}
let padre = new PersonaReal();
console.log(padre);

var cliente1 = {
  nombre: "Mauricio",
  edad: 30,
  saludar: function() { return("Hola " + cliente1.nombre);}
    };
    console.log(cliente1.saludar());


function fSaludar (nombre){
  return("Hola " + nombre);
};
var cliente2 = {
  saludar: fSaludar
};
console.log(cliente2.saludar("Yulieth"));
  
let constructor = function (precio){   ///CLOSURE (CIERRE) ambito local
  var miObjeto = {
    precioBase: precio,
    iva: 1.21,
    calcularIva: function(){
      return(this.precioBase*this.iva);
    }
  };
  return miObjeto;    ///ambito local
};
precio1 = constructor(100);
console.log(precio1.calcularIva());

/**
 * Closure
 */
function miFuncion(){
  let count = 1
  function contador(){
    return(count)
  }
  return contador()
}
console.log(miFuncion())
count

var xf = 10;
function foo(){
  var yf = 20;
  function bar(){
    var zf = 15;
    var output = xf + yf + zf;
    return output;
  }
  return bar;
}
console.log(foo());


