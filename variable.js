// variable.js

let age = 10;       // var도 변수선언, 같은 변수를 두번이상 사용 가능(단점: 헷갈릴수 있슴)
console.log(age);

age = 20;   
console.log(age);

const PI = 3.1415;      // const : 상수 선언, 재할당이 불가능.
// PI = 3.2;

{
    let age = 30;
    console.log(age);   // {} : 블럭 , 블럭안에서는 변수 재할당이 가능함
}
console.log(age);

let v1;             // undefined
v1 = 'Hello';       // string
v1 = 100.45;        // number
v1 = true;          // boolean
v1 = null;          // object
v1 = [ 1, 2, 3 ];   // object (배열도 오브젝트)
v1 = { name : 'Hong', 
        age : 20 ,
        score : 80
    }               // object
v1 = function(a, b){
    return a + b ;
}                   // function

console.log(typeof v1);     // typeof : 변수타입
console.log(v1 (10,20));

v1 = 10 > 20;       // boolean 값이 됨
v1 = null;          // 0, null, false => 거짓 , 값이 있으면 참
if ('Hello'){
    console.log('참입니다');
}else {
    console.log('거짓입니다');
}