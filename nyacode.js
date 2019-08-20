let x=require('./javascript/NyaCode');
console.log(x);

let NyaCode=x();

// nyacode.encode("lalala");
let p=NyaCode.encode("la唔la");
let q=NyaCode.decode(p);

console.log(p);
console.log(q);

/*
 * R belongs to [65,90], i.e. [A,Z]
 * code might be [32,126]
 * (R + code) belongs to [97,216]
 * = R + 32 + (code-32)
 */