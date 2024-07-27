// console.log(process);
console.log(process.argv); //node processDemo.js import
console.log(process.argv[3]); //node processDemo.js import -vv

//process.env
console.log(process.env); 
console.log(process.env.USERNAME); 

//pid\
console.log(process.pid); 

//cwd
console.log(process.cwd()); //current working directory 

//title
console.log(process.title); 

//memoryUsage()
console.log(process.memoryUsage()); 

//uptime()
console.log(process.uptime()); 

process.on('exit',(code)=>{
    console.log(`About exit code ${code}`); 
})

//exit()
process.exit(0);
console.log('hello program cannot print me because exit called '); 