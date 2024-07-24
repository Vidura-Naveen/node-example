import http from 'http';
import fs from 'fs/promises';
import  url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`DIR Name ${__dirname} , File Name ${__filename}`);
console.log('DIR Name ${__dirname} , ${__filename}');

const PORT = process.env.PORT; // browser eke http://localhost:8000/ gahala yanna

// const server = http.createServer((req,res) => {
//     // res.write('hello world');
//     // res.end('hello world');

//     // res.setHeader('Content-Type', 'text/html');
//     // res.statusCode= 404;
//     // res.end('<h1> hello world </h1>');

//     // res.writeHead(500 ,{'Content-Type':'application/json'}); // package.json eke "start": "node server.js" demmama "npm start' walin server eka on karanna puluwan
//     // res.end(JSON.stringify({Message : 'Server Error'}));
//     //npm i -D nodemon  ---- meken tama node_modules folder eka hadanne eke okkoma node module tiyanawa

//     // res.writeHead(200 ,{'Content-Type':'text/html'}); // package.json eke "start": "node server.js" demmama "npm start' walin server eka on karanna puluwan
//     // res.end('<h1> hello world </h1>');
//     // console.log(req.url);
//     // console.log(req.method);


//     try {
//         if(req.method === 'GET'){
//             if(req.url === '/'){
//                 res.writeHead(200 ,{'Content-Type':'text/html'}); 
//                 res.end('<h1> Home Page </h1>');
//             }
//             else if (req.url === '/about'){
//                 res.writeHead(200 ,{'Content-Type':'text/html'}); 
//                 res.end('<h1> About </h1>');
//             }
//             else {
//                 res.writeHead(404 ,{'Content-Type':'text/html'});
//                 res.end('<h1> not found </h1>');
//             }
//         } else{
//             throw new Error("method Not Allowed");
//         }
//     } catch (error) {
//         res.writeHead(500 ,{'Content-Type':'text/plain'}); 
//         res.end('Server Error');
//     }
// });

const server = http.createServer(async(req,res) => {
    try {

        if(req.method === 'GET'){
            let filePath;

            if(req.url === '/'){
                filePath= path.join(__dirname,'public','index.html')
            }
            else if (req.url === '/about'){
                filePath= path.join(__dirname,'public','about.html')
            }
            else {
                res.writeHead(404 ,{'Content-Type':'text/html'}); //me parana widiya
                res.end('<h1>Not Found </h1>'); //me parana widiya
            }

            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type','text/html');
            res.write(data);
            res.end();

        } else{
            throw new Error("method Not Allowed");
        }
    } catch (error) {
        res.writeHead(500 ,{'Content-Type':'text/plain'}); 
        res.end('Server Error');
    }

});


server.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`) 
});