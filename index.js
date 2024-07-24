//npm init
//node index

// console.log("hellow world");

// const {generateRandomNumber,celsiusToFahranight} = require('./utill');
// console.log(`RandomNumber : ${generateRandomNumber()}`);
// console.log(`C To F : ${celsiusToFahranight(50)}`);

// import { getPosts } from "./postController.js"; // package.json eke "type": "module", kiyala demmain passe mehema import karanna puluwan nettam uda widiyata manually
// console.log(getPosts()); // postController eke default netuwa 

import  getPosts , {getPostLength}  from "./postController.js"; // package.json eke "type": "module", kiyala demmain passe mehema import karanna puluwan nettam uda widiyata manually
console.log(getPosts()); // postController eke default demmama import {getPosts} kiyala warahan one ne
console.log(` Post Length : ${getPostLength()}`);