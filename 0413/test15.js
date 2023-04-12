//test15.js
'use strict';
let text1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcde';
let text2 = '   ABC   BCDEF   GHI   JKLM......  ABC.... OPQ ';

// demo.innerHTML = text1;
// demo.innerHTML = text1.length;
// demo.innerHTML = text1.substring(0,10);
// demo.innerHTML = text1.slice(10);
// demo.innerHTML = text1.substr(10);
// demo.innerHTML = text1.replace('abc','opq');
// demo.innerHTML = text2.replaceAll('ABC','opq');
// demo.innerHTML = text1.toUpperCase();
// demo.innerHTML = text2.toLowerCase();
// demo.innerHTML = text2.concat('안녕',1234);
// demo.innerHTML = concat('안녕',1234); //오류
// demo.innerHTML = text2.trim() + "abc";
// demo.innerHTML = text2.trimEnd() + "abc";
// demo.innerHTML = text2.replaceAll(" ", "");
// demo.innerHTML = text1.charAt(0);
// demo.innerHTML = text1.charCodeAt(26);
// demo.innerHTML = mbc;

// let mbc = text2.split('ABC');
// let temp ='';
// for(let item of mbc){
//   console.log(item);
//   temp+=item;
// }
// demo.innerHTML = temp;

let telTemp = '010-3423-2704';
let tels=telTemp.split('-');
let title = ['지역번호','국번호','전화번호'];

tels.forEach((tel, i) => {
  let str = title[i]+ " : "+ tel + '<br/>';
  demo.innerHTML += str;
});

// demo.innerHTML = text1.indexOf('a');
// demo.innerHTML = text2.indexOf('A');

// demo.innerHTML = text2.search('t');
// demo.innerHTML = text1.search('D');
demo.innerHTML = text1.includes(' ABC');

let price = 100;
let vat = 0.25;
let total = price * (1+vat);

//let str = "총금액 : " + total + "원";
let str = `총금액 : ${price * (1+vat)}원`;    //EL표기법(Expression Language) => `${}` 꺽쇠임
demo.innerHTML = str;
