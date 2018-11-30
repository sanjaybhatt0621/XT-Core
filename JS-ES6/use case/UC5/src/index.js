/**
 * Reg: If a function is called with a same value again and again, that calue must be cached and you have returned from cache
 */

'use strict'
console.log('script connected')

var  cachingData  =  [];

function  getX(a) {
    if (cachingData.includes(a)) {
        alert('Already cached');
    }  else {
        cachingData.push(a);
    }
}