const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'Conten-type': 'application/json' });

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        // res.write('Hola Mundo');
        res.end();
    })
    .listen(8080);

console.log('Esuchando el puerto 8080');