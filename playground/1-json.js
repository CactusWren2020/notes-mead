const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
 
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data); 

//1 fs.readFileSync reads the file and puts it into a buffer
const dataBuffer = fs.readFileSync('1-json.json');
//2. put the buffer into a JSON string
const dataJSON = dataBuffer.toString();
//3. parse the JSON into an object
const data = JSON.parse(dataJSON);
console.log(data);

//4. modify the object
data.name = 'Carson';
data.age = '29';
//5. turn the object into JSON
const dataJSON1 = JSON.stringify(data);
//6. writeFileSync to write the modified object into the file
fs.writeFileSync('1-json.json',   dataJSON1);
