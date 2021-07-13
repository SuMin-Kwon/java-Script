//tableList.js

let data = [{
    name: '이름',
    eng: '영어',
    math: '수학'
}, {
    name: '홍길동',
    eng: '100',
    math: '90'
}, {
    name: '김민수',
    eng: '90',
    math: '95'
}];

createTable();

// -------------------------------------------------------
function createTable2() {
    let all = "<table border='1'>";
    for (let row of data) {
        all += '<tr>';
        for (let field in row) {
            all += "<td>" + row[field] + "</td>";
        }
        all += "</tr>";
    }
    // all += '<tr><td>이름</td><td>영어</td><td>수학</td></tr>';
    // all += '<tr><td>홍길동</td><td>100</td><td>90</td></tr>';
    // all += '<tr><td>박기자</td><td>90</td><td>80</td></tr>'
    all += '</table>';
}
// -------------------------------------------------------

document.write(all);

function createTable() {
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1');
    for (let row of data) {
        let trTag = document.createElement('tr');
        for (let field in row) {
            let tdTag = document.createElement('td');
            if (field == 'name')
                tdTag.style.backgroundColor="darkgray";  // style 속성지정
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text); // td 하나 만든거
            trTag.appendChild(tdTag);
        }
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
}