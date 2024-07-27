import path from  'path';
import url from 'url';

const filePath = './dir1/dir2/test.txt';

// /baseName()
console.log(path.basename(filePath));

// dirname()
console.log(path.dirname(filePath));

// extname()
console.log(path.extname(filePath));

//parse
console.log(path.parse(filePath));

const __filename =url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname,__filename);

//join()
const filepath2 = path.join(__dirname,'dir1','dir2','text.txt');
console.log(filepath2);

//resolve()
const filepath3 = path.resolve(__dirname,'dir1','dir2','text.txt');
console.log(filepath3); //dekama ekai