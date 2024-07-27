import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('Hellow ' + name);
}

function goodByeHandler(name){
    console.log('good bye '+name);
}


//registerevent listener 
myEmitter.on('greet' , greetHandler);
myEmitter.on('goodbye' , goodByeHandler);

//emit event 
myEmitter.emit('greet' , 'vidura');
myEmitter.emit('goodbye' , 'ishara');

// Error Handling 
myEmitter.on('error', (err)=>{
    console.log('An error' , err);

});

//simulate error 
myEmitter.emit('error', new Error('something to wrong ff'));