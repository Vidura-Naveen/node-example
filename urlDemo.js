import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world'

//URL object
const urlobj = new URL(urlString);
console.log(urlobj);
console.log(url.format(urlobj));

//import.meta.url - file url
console.log(import.meta.url);

//fileUrlToPath()
console.log(url.fileURLToPath(import.meta.url));

console.log(urlobj.search);

const param = new URLSearchParams(urlobj.search);
console.log(param.get('q'));
param.append('limit','5');
param.append('gg','8');
param.delete('limit');
console.log(param);
