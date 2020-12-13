const fs = require('fs');
const colors = require('colors');
 
let listarTabla = (base, limite =10) => {
	console.log('============================='.white);
	console.log(`Tabla del ${base}`.red);
	console.log('============================='.white);
	for (let i = 1; i <= limite; i++) {
		console.log( `${base} * ${i} = ${base * i}`);
	}
}


let crearArchivo = (base, limite=10) => {
	console.log('============================='.white);
	console.log(`Archivo creado con la tabla del ${base}`.green);
	console.log('============================='.white);
	return new Promise((res, rej) => {

        if ( !Number(base)) {
            rej('No es un numero perro mk')
            return
        }
		let data = '';
		for (let i = 1; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}
		fs.writeFile(`tablas/tabla-${base}.txt`, data, (e) => {
            if (e) rej(e)
            res(`El archivo tabla-${base}.txt`)

		});
	});
};

module.exports = {crearArchivo, listarTabla};