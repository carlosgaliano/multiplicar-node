

const argv = require('./config/yargs').argv;

const { crearArchivo, listar } = require('./multiplicar/multiplicar')
// console.log(argv.limite, argv.base);

let comandos = argv._[0];

switch (comandos) {
    case 'listar':
        listar(argv.base, argv.limite).then(tabla => {
            console.log(tabla);
        }).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo creado: ${archivo}`);
        }).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

        break;
}

// let base = 3;

// crearArchivo(base).then(resultado => {
//     console.log(resultado);

// }).catch(err => console.log(err));


























// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;

// const { crearArchivo } = require('./multiplicar/multiplicar')



// let base = 3;


// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);

// crearArchivo(base).then((archivo) => {
//     console.log(`Archivo creado: ${archivo}`);

// }).catch((err) => {
//     console.log(err);

// });


// let argv2 = process.argv;

// console.log(argv.base);
