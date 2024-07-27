// import fs from 'fs'

//readfile() -callback

// fs.readFile('./test.txt','utf8',(err,data)=>{
//     if (err) throw err;
//     console.log(data); //node fsDemo.js
// })


// //readfileSync() - Synchronous 

// const dataa = fs.readFileSync('./test.txt','utf8');
// console.log(dataa); //node fsDemo.js



import fs from 'fs/promises';

//readfile() - promise .then()
// fs.readFile('./test.txt','utf8')
//  .then((data) => console.log(data)) //import fs from 'fs/promises';
//  .catch((err) => console.log(err)); //node fsDemo.js

//readFile() - Async/Await
const readFileZ = async()=>{
    try{
        const data =await fs.readFile('./test.txt','utf8');
        console.log(data); //node fsDemo.js
    }
    catch(error){
        console.log(error);
    }
}

// readFileZ();

//Write File 
const writeFileZ = async()=>{
    try {
        await fs.writeFile('./test.txt','HELLO I AM WRITE FROM FS DEMO.JS');
        console.log('File written to ...');
    } catch (error) {
        console.log(error);
    }
}

// writeFileZ();
// readFileZ();

//Append Files 
const appendFilez = async()=>{
    try {
        await fs.appendFile('./test.txt','\n I am Appended Text');
        console.log('File Appended to ...');
    } catch (error) {
        console.log(error);
    }
}

writeFileZ();
appendFilez();
readFileZ();