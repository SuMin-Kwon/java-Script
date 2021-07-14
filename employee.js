// employee.js
// json -> obj : JSON.parse()
let json = `[{"id":1,"first_name":"Adan","last_name":"Radwell","email":"aradwell0@rambler.ru","gender":"Female"},
{"id":2,"first_name":"Royce","last_name":"Nineham","email":"rnineham1@furl.net","gender":"Agender"},
{"id":3,"first_name":"Geoffrey","last_name":"Henighan","email":"ghenighan2@nih.gov","gender":"Agender"},
{"id":4,"first_name":"Nicolas","last_name":"Worg","email":"nworg3@etsy.com","gender":"Bigender"},
{"id":5,"first_name":"Rudy","last_name":"Khidr","email":"rkhidr4@arstechnica.com","gender":"Female"},
{"id":6,"first_name":"Meryl","last_name":"Dorber","email":"mdorber5@flickr.com","gender":"Non-binary"},
{"id":7,"first_name":"Elysha","last_name":"Durrance","email":"edurrance6@umich.edu","gender":"Genderqueer"},
{"id":8,"first_name":"Anthea","last_name":"Walrond","email":"awalrond7@sciencedirect.com","gender":"Female"},
{"id":9,"first_name":"Rob","last_name":"Jacob","email":"rjacob8@t.co","gender":"Genderfluid"},
{"id":10,"first_name":"Ruben","last_name":"Streight","email":"rstreight9@uiuc.edu","gender":"Non-binary"}]`;

let data = JSON.parse(json);
console.log(data); // [{}, {}, {}, {}, {} ..... {}]

let tableTag = document.createElement('table');
tableTag.setAttribute('border', '1');

let caption = document.createElement('caption');
caption.appendChild(document.createTextNode('회원리스트'));
tableTag.appendChild(caption);

createHeader2(); // 타이틀보여주기.

for (let row of data) { // 데이터..(tr)
    let trTag = document.createElement('tr');
    trTag.setAttribute('id', row.id);     // tr을 id값으로 찾아올 용도. 
    trTag.onmouseover = changeColor; // click event가 발생할때 실행할 function이름.
    trTag.onmouseout = originColor;
    trTag.onclick = showDetail;

    for (let field in row) { // 필드..(td)
        let tdTag = document.createElement('td');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    // <td><button>삭제</button></td> 버튼을 추가.
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    tableTag.appendChild(trTag);
}
document.getElementById('show').appendChild(tableTag);
// ----------- < 화면 만들어서 보여주는 부분 > -----------------------



function modRow(){
    let id = document.getElementById('eid').value;  // 찾는 ID 항목 id의 value속성
    
    let findTr = document.getElementById(id);      
    console.log(findTr.childNodes[1].childNodes[0].nodeValue);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value;
}

function addRow() { // 사용자의 입력값을 받아서 테이블에 한라인 추가.
    let id = document.getElementById('eid').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let ary = [id, first_name, last_name, email, gender];

    let trTag = document.createElement('tr');
    trTag.onmouseover = changeColor; // click event가 발생할때 실행할 function이름.
    trTag.onmouseout = originColor;
    for (let f of ary) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(f);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    let btn = document.createElement('button');
    btn.onclick = deleteRow;
    let text = document.createTextNode('삭제');
    btn.appendChild(text);
    let tdTag = document.createElement('td');
    tdTag.appendChild(btn);
    trTag.appendChild(tdTag);

    document.getElementsByTagName('table')[0].appendChild(trTag);

}

function showDetail() {
    //alert('detail');
    let inputs = document.getElementsByTagName('input'); // document.querySelectorAll();
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    }

    // let id = this.childNodes[0].childNodes[0].nodeValue;
    // let fn = this.childNodes[1].childNodes[0].nodeValue;
    // let ln = this.childNodes[2].childNodes[0].nodeValue;
    // let em = this.childNodes[3].childNodes[0].nodeValue;
    // let ge = this.childNodes[4].childNodes[0].nodeValue;

    // document.getElementById('eid').value = id;
    // document.getElementById('first_name').value = fn;
    // document.getElementById('last_name').value = ln;
    // document.getElementById('email').value = em;
    // document.getElementById('gender').value = ge;

    // let inputs = document.querySelectorAll('input');
    // console.log(inputs);
    // for (let i = 0; i < this.childNodes.length - 1; i++) {
    //     inputs[i].value = this.childNodes[i].childNodes[0].nodeValue;
    // }
}

function deleteRow(e) { // 한라인 삭제.
    //alert('delete');
    e.stopPropagation();        
    // 데이터 삭제...id를 기준으로 데이터 삭제.
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue;
    console.log(id);
    this.parentNode.parentNode.remove();

    // 살제 데이터 삭제.
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == parseInt(id)) { // 6 == '6' > true. 
            data.splice(i, 1); //delete data[i]; // 배열메소드..splice()
            break;
        }
    }
    console.log(data);

}

function originColor() { // 색변경.
    this.style.backgroundColor = '';
}

function changeColor() { // 색변경.
    this.style.backgroundColor = 'yellow';
}

function createHeader2() {
    let titles = ['id', 'first_name', 'last_name', 'email', 'gener', '삭제'];
    let tr = document.createElement('tr');
    for (let field of titles) { // 배열일 경우에는 for..of
        let td = document.createElement('th');
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}

function createHeader() {
    let row = data[0]; // {id:?, first_name:?, last_name: ? , }
    let tr = document.createElement('tr');
    for (let field in row) {
        let td = document.createElement('th');
        let text = document.createTextNode(field);
        td.appendChild(text);
        tr.appendChild(td);
    }
    tableTag.appendChild(tr);
}