
//code using callbacks function
// const fs = require('fs');

// function readFileCallback(filePath, callback) {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) return callback(err);
//     callback(null, data);
//   });
// }

// readFileCallback('example.txt', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File contents:', data);
// });

// code with promise and async await
const fs = require('fs').promises;

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileAsync('example.txt');
readFileAsync('example2.txt');
