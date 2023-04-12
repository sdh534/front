'use strict';

//오늘 날짜를 전역변수로 선언
const today = new Date();
const year = today.getFullYear(); //연도 4자리 
const month = today.getMonth()+1; //월(기존월보다 -1)
const date = today.getDate(); //일
const hour = today.getHours();//시
const minute = today.getMinutes();//분
const seconds = today.getSeconds();//초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + seconds;

//표준날짜
function fCheck1(){
  console.log("표준 날짜: "+ today);
  demo.innerHTML = today;
}
//편집날짜
function fCheck2(){
  console.log("편집 날짜: "+ yymmdd);
  demo.innerHTML = yymmdd;
}
//편집날짜(요일)
function fCheck3(){
  let str = today.getDay();
  let week = ['일','월','화','수','목','금','토'];
  demo.innerHTML = week[str] + "요일";
}
//해당 달의 마지막 날짜 
function fCheck4(){
  let mon = prompt("마지막 날짜를 출력할 년-월을 입력하세요 (yyyy-mm)");
  let temp = mon.split("-");
  let yy = temp[0];
  let mm = temp[1];

  let str = new Date(yy,mm,0); //new Date(년,월,일,시,분,초)0을 넣으면 이 달의 시작을 기준으로 날짜를 잘라옴 

  let strDate = "해당 월의 마지막 일자?" + yy + "-" + mm + "-" + str.getDate();

  demo.innerHTML = strDate;
}

