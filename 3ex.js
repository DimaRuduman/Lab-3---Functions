'use strict';

const ipToNumber = (ip= '127.0.0.1') =>{
const parts = ip.split ('.')
const numbers = parts.map(Number);
return numbers.reduce((result, byte) => (result << 8) | byte, 0);
}
































//'use strict';
//
//const ipToNumber = (ip = '127.0.0.1') => {
//  const numbers = ip.split('.').map(Number);
//
//  return numbers.reduce((result, byte) => (result << 8) | byte, 0);
//};
//
//console.log(ipToNumber('127.0.0.1'));
//console.log(ipToNumber('10.0.0.1'));
//console.log(ipToNumber('192.168.1.10'));
//console.log(ipToNumber('165.225.133.150'));
//console.log(ipToNumber('0.0.0.0'));
//console.log(ipToNumber('8.8.8.8'));
//
//