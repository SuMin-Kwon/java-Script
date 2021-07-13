// object.js

let s1 = {
    sno: 1000,
    sname: 'Park',
    sscore: 90
}

let field = 'sscore';
console.log(s1.sno);
console.log(s1['sname']); // [] 필드의 값을 읽어옴
console.log(s1[field]);

// 필드의 값을 반복문을 통해서 출력하기

// for in  :  object의 필드정보를 읽어올때 쓰임 ( for .. in )
for (let field in s1) {
    console.log(field); // s1이 가진 필드의 이름들만 출력해옴
}
for (let field in s1) {
    console.log(field + ',' + s1[field]); // 필드와 값을 함께 출력
}

// 배열일 경우에 반복문 for .. of
let numbers = [10, 32, 55, 27, 99];
let sum = 0;
for(let num of numbers){
    sum += num;
}
console.log('결과값 : '+ sum);

//for (let i = 0; i < numbers.length; i++) {
//    console.log(numbers[i]);
//}

let s2 = {
    sno : 1002,
    sname : 'Hong',
    sscore : 88
}
let s3 = {
    sno : 1003,
    sname : 'Kwon',
    sscore : 80
}

console.log('---------------------------');
// s1, s2, s3를 배열에 담기
let students = [s1, s2, s3];
for (let student of students){  // 배열의 갯수만큼 반복.
    for(let field in student){  // object 의 필드 반복.
        console.log(field + ' => ' + student[field]);
    }
}
console.log('---------------------------');
