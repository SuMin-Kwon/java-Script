// function.js

function plus() {
    let l1 = document.getElementById('num1'); // input의 num1인 id의 요소를 가져옴
    let l2 = document.getElementById('num2');
    let result = document.getElementById('result'); 
    result.value = sum (parseInt(l1.value), parseInt(l2.value)); // result의 value값에 넣어줌
}

function sum(v1, v2) {
    return v1 + v2; // string 더하면 concatenate.
}
console.log(sum('10', 20));

var fnc = function (v1, v2) {
    return v1 + v2;
}

console.log(fnc(10));
// 값을 하나만 넣어도 에러는 나지 않음 nan이라고 뜸
console.log(fnc(10, 20, 30));
// 값이 더 많이 넣어도 에러가 아니고 앞에 변수 값만큼 실행함