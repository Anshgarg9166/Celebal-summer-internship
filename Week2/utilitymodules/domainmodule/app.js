var EventEmitter = require("events").EventEmitter;
var domain = require("domain");
var emitterl = new EventEmitter();
// Create a domain
var domain1 = domain.create();
domain1.on('error', function(err) {
console.log("domaini handled this error ("+err.message+")");
})
// Explicit binding
domain1.add(emitter1);
emitter1.on('error',function(err) €
console. log("listener handled this error ("+ en.message+")");
7):
emitter1. emit ('error', new Error ('To be handled by listener'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error ('To be handled by domain1'));

//Deprecation: It is crucial to note that the domain module has been deprecated in newer versions of Node.js (as of v20 and later).