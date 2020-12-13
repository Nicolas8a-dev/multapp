const opts = {
	base: {
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
};

const argv = require('yargs')
	.command('listar', 'Imprime en consola la tabla de mulitplicar', 
		opts
	)
	.command('crear', 'Crea en un archivo la tabla de mulitplicar', 
		opts
	)
    .help().argv;
    
    module.exports = {
        argv}  

