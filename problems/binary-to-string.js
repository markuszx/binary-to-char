function binaryToString(binaryBlob) {
  // Your code here
  let asciiString = "";
  for (let i = 0; i < binaryBlob.length; i += 8) {
    const byte = binaryBlob.slice(i, i + 8);
    const asciiChar = String.fromCharCode(parseInt(byte, 2));
    asciiString += asciiChar;
  }
  return asciiString;
  


}

/* Comment in the code below to run local tests */
console.log(binaryToString('010000010100001001000011')); // 'ABC'
console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;
