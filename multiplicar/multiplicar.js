
const fs = require('fs');


let listar = (base, limite) => {
    return new Promise((resolver, reject) => {

        let tablaNueva = [];
        let tablaLimitante = "";
        let tabla = "";

        if (!Number(base)) {
            reject(`la base: ${base} no es un numero.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite: ${limite} no es un numero.`);
            return;
        }

        fs.readFile(`./tabla/tabla-${base}.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(`La tabla con base ${base} no existe.`);
                return;
            } else {
                let va = 0;

                tablaNueva = data.split('\n');
                tablaNueva.pop();

                for (let i = 0; i < limite; i++) {
                    tablaLimitante += tablaNueva[i] + "\n";
                }

                console.log(tablaLimitante);




            };
        });

    })
}





let crearArchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {
        let numero = base;
        
        

        if (!Number(base) || !Number(limite)) {
            //console.log("no es numero");
            reject(`El valor ${base} no es un numero.`);
            return;

        } else {
            let tabla = "";
            for (let i = 1; i <= limite; i++) {
                tabla += (`${base} x ${i}  = ${i * base}\n`)
            }
            fs.writeFile(`./tabla/tabla-${base}.txt`, tabla, (err) => {
                if (err) throw err;
                console.log(`El archivo tabla-${base}.txt se creo satisfactoriamente`);
            });
        }
    })
}

module.exports = {
    crearArchivo,
    listar
}
































// const fs = require('fs');



// let crearArchivo = async (base) => {
//     return new Promise((resolver, reject) => {

//         if(!Number(base)){
//             reject(`:-. ${base} no es un numero.`);
//             return;
//         }

//         let data = '';

//         for (let i = 0; i < 11; i++) {
//             data += `${base} x ${i} = ${base * i}\n`;
//         }

//         fs.writeFile(`./03-bases-node/tabla/tabla-${base}.txt`, data, (err) => {
//             if (err) reject(err);
//             resolver(`tabla-${base}.txt`);
//             // console.log('El archivo se gurado satisfactoriamente');
//         })
//     })
// }
// //console.log(module);

// module.exports = {
//     crearArchivo
// }