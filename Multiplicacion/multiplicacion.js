const fs = require ('fs'); //Aquí importamos el paquete de manipulación de archivos


/* FUNCION TIPO FLECHA: Esto es una función asincrona, significa que es más rápida de ejecutar, pero va a seguir ejecutando líneas de código sin importarle si hay otras funciones. Es casi igual a 
var crearArhivo = function (){};*/
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {// Es una forma de decir, corre la promesa, pero te prometo que cuando termines seguimos con "crearArchivo"
        let tabla = '';

        if(!Number(base)){
            reject('Favor de insertar un número válido')
            return;
        }

        if(!Number(limite)){
            reject('Favor de insertar un númeor valido');
            return;
        }

        for(let i=1; i<=limite; i++){
            tabla += `${base}X${i}=${base*i}\n`;
        } 
        
        fs.writeFile(`Tablas_Multi/tabla-${base}.txt`, tabla, (err) =>{
            if(err){ 
                reject (err);
                }else{
                    resolve(`tabla-${base}.txt`);
                }
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise ((resolve, reject) =>{
        if(!Number(base)){
            reject('Favor de insertar un número válido');
            return;
        }

        if(!Number(limite)){
            reject('Favor de insertar un númeor valido');
            return;
        }

        for(let i=0; i<=limite; i++){
            console.log(`${base}X${i}=${base*i}`);
        }
    });
}
module.exports = {
    crearArchivo,
    listarTabla
};