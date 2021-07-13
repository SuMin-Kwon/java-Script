// event.js

console.log(this);

function changeValue() {
    // id = "num3" 의 value 속성을 읽어와서 그 값의 upperCase 변환.
    let elem = document.getElementById('num3').value;
    //console.log(elem);
    //console.log(elem.toUpperCase());
    document.getElementById('num3').value = elem.toUpperCase();
}
// [] : 배열
let obj = {
    name: "Hong",
    hobby: ["running", "eating", "sleeping"],
    pet: [{
            dog: "똥순이"
        },
        {
            cat: "야옹이"
        },
        {
            cockroach: "바퀴"
        }
    ]
}
console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]);
console.log(obj.pet[0].dog); //obj 중 pet의첫번째의 dog라는 필드의 값을 가져옴
console.log(obj.pet[1].cat);

// 요소를 생성.

let fruits = ['Apple', 'Orange', 'Mango', 'Melon'];

function addFruit() {
    let addVal = document.getElementById('add').value;
    fruits[fruits.length] = addVal;
    document.getElementById('add').value = null;
    removeFromDoc();    //리스트안에서 계속 추가만 되도록 하기 위해서 지워줌
    createElements();
}

function createElements() {
    //let ulTag = document.getElementsByTagName('ul'); // for 안에 안넣어줘도됨, 가져오는거라서
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');

    for (let fruit of fruits) {
        let liTag = document.createElement('li');
        let fru = document.createTextNode(fruit);
        liTag.appendChild(fru);
        ulTag.appendChild(liTag);
    }
    document.body.appendChild(ulTag);
}

// ul 지우기
function removeFromDoc() {
    if (document.getElementById('fruit')) { // document.getElementById('fruit') => null
        document.getElementById('fruit').remove(); // <ul id='fruit'></ul>
    }
}


// let ulTag = document.getElementsByTagName('ul'); // document ul태그의 요소를 찾아옴
// let liTag = document.createElement('li');   // <li></li>, 태그 생성
// let apple = document.createTextNode('Apple');
// liTag.appendChild(apple); // liTag안에 apple이라는 값을 담음
// ulTag[0].appendChild(liTag); // <ul><li>Apple</li></ul>

// liTag = document.createElement('li');
// let orange = document.createTextNode('Orange');
// liTag.appendChild(orange);
// ulTag[0].appendChild(liTag);

// liTag = document.createElement('li');
// orange = document.createTextNode('과일');
// liTag.appendChild(orange);
// ulTag[1].appendChild(liTag);