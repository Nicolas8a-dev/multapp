const argv = require('./config/yargs').argv;

const colors = require('colors/safe');


const { crearArchivo, listarTabla } = require('./multiplicar/mult');

let comando = argv._[0];

switch (comando) {
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;

	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then((file) => console.log(`Archivo creado: `, colors.green(file)))
			.catch((e) => console.log(e));
		break;
	default:
		console.log('Comando no reconocido');
}

// for(let b = 1; b <= 10; b++) {
//     for(let i = 1; i <= 10; i++) {
//         data += `${b} * ${i} = ${b * i}\n`
//     }
//     fs.writeFile(`tablas/tabla-${b}.txt`, data, e=> {
//         if (e) throw e;

//     })
//     data = ''
// }

// console.log('Tus tablas fueron creadas')

// crearArchivo(b)
//     .then( file => console.log(`Archivo creado: ${file}`))
//     .catch( e => console.log(e))
