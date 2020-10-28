const argv = require ('yargs') //Este paquete de npm tiene como principal funcion "declarar comandos"
    .command('listar', 'Imprime en consola la tabla de multiplicar', { //Primer comando necesita 3 parámetros (1. Qué voy hacer "listar"/2. Descripción de lo que voy hacer
        base: {                                                     // /3. Declarar variables o procesos que hará nuestro comando)
            demand: true, //Esto signifíca que debe ser obligatorio
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Crea un archivo de la tabla de multiplicar', { 
        base: {                                                     
            demand: true, 
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;
const { alias } = require('yargs');
const multiplicar = require('./Multiplicacion/multiplicacion'); //Requerimiento


let comando = argv._[0]

let base = argv.base;
let limite = argv.limite;

switch(comando){
    case 'listar':
       
        multiplicar
            .listarTabla(base, limite)
            .then()
            .catch(error => console.log(`Ocurrió un error: ${error}`));
    break;
    case 'crear':
        multiplicar
            .crearArchivo(base, limite) //Llamamos a nuestra funcion pública con el parámetro (número de la tabla que queremos multiplicar) 
            .then(archivo => console.log(`El archivo ${archivo} ha sido generado con éxito`)) // Este es considerado como el resolve 
            .catch(error => console.log(`Ocurrió un error: ${error}`)); //Este es considerado como el reject
    break;
    default:
        console.log('Comando no reconocido');
}

/*
multiplicar
.crearArchivo('abc') //Llamamos a nuestra funcion pública con el parámetro (número de la tabla que queremos multiplicar) 
.then(archivo => console.log(`El archivo ${archivo} ha sido generado con éxito`)) // Este es considerado como el resolve 
.catch(error => console.log(`Ocurrió un error: ${error}`)); //Este es considerado como el reject
*/

































/*
let base = 5;
let tabla = '';

for(let i=1; i<=10; i++){
    //console.log(base +'X' + i + '=' + (base*i)); // 1era version
    tabla += `${base}X${i}=${base*i}\n`;
    //console.log(`${base}X${i}=${base*i}`);         // 2da version meter variables y strings juntos
}   
            //Nombre archivo/Contenido/Función hacer cuando algo anda mal
fs.writeFile(`Tablas_Multi/tabla-${base}.txt`, tabla, (err) =>{
    if(err){ 
        throw err;//Throw(lanzar) ayuda a que si hay un error va a disparar el error sin tronar el siguiente bloque de código
        console.log(`El archivo tabla-${base}.txt ha sido generado con éxito`)
    }
});


//let nombre = 'Alan'; //Let es una forma más recomendad de declarar una variable


2 x 1=2
2 x 2=4
2 x 3=6
2 x...
*/