var path = require('path');

//Normalization 
console.log('Normalization : '+ path.normalize('/test/test1//2slash/1slash//tab/..'));
// it is useed to normalize the path remove the error and extra thingd

//Join
console.log('Joint path: '+ path.join('/test','test1','2slashes/1slash','tab','..'));
//used to concantenate the path

//Resolve
console.log('resolve: '+path.resolve('app.js'));
// gave full path to the file

//Extension name
console.log('Extension: '+path.extname('app.js'));
//gave the name of file extension
