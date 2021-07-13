// employee.js
//json -> obj : JSON.parse()

let json = `[{"id":1,"first_name":"Catina","last_name":"Pringley","email":"cpringley0@epa.gov","gender":"Bigender"},
{"id":2,"first_name":"Victoir","last_name":"Garz","email":"vgarz1@army.mil","gender":"Male"},
{"id":3,"first_name":"Salomone","last_name":"Alesio","email":"salesio2@prnewswire.com","gender":"Agender"},
{"id":4,"first_name":"Shirl","last_name":"Andre","email":"sandre3@ovh.net","gender":"Bigender"},
{"id":5,"first_name":"Ganny","last_name":"Edelston","email":"gedelston4@symantec.com","gender":"Agender"},
{"id":6,"first_name":"Caty","last_name":"Dzenisenka","email":"cdzenisenka5@yale.edu","gender":"Bigender"},
{"id":7,"first_name":"Naomi","last_name":"Winsper","email":"nwinsper6@comcast.net","gender":"Genderfluid"},
{"id":8,"first_name":"Laurella","last_name":"Thurlow","email":"lthurlow7@flickr.com","gender":"Polygender"},
{"id":9,"first_name":"Giacomo","last_name":"Douche","email":"gdouche8@com.com","gender":"Agender"},
{"id":10,"first_name":"Willette","last_name":"Currington","email":"wcurrington9@cnet.com","gender":"Bigender"}]`;

let obj = JSON.parse(json);
console.log(obj); // [ {}, {}, {}, {} ....... {} ]

for (let row of obj) {
    console.log(row);
}

let all = "<table border='1'>";
all += '<tr><th>ID</th><th>이름</th><th>성</th><th>이메일</th><th>성별</th></tr>';
for (let row of obj) {
    all += '<tr>';
    for (let field in row) {
        all += "<td>" + row[field] + "</td>";
    }
    all += "</tr>";
}
all += '</table>';
document.write(all);