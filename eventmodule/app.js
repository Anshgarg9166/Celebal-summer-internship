const EventEmitter = require('events');
const emitter = new EventEmitter(); // eventemitter is a class

//first we need to register a listener 
emitter.on('messageLogged',function(){
    console.log('Listener called');
})

//emit() - used to make a noise,produce signalling
//Raise an event 
emitter.emit('messageLogged');   

//order is important here firest we need to register then raise an event