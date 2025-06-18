var os = require('os');

//Endianness
console.log('Endianness :'+ os.endianness());
// LE in output means longterm support

//Os type
console.log("Type :" + os.type());

//OS platform
console.log('Platform :'+ os.platform());

//Total System Memory
console.log('Total system Memory :' + os.totalmem() + ' bytes');

//Total Free Memory
console.log('Free Memory :'+ os.freemem()/1024 + ' mbytes');