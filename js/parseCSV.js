/*CSVパーサー*/
var path ='./csv/colonies.csv';
var target = "#dataset";
var req = new XMLHttpRequest();

req.open('GET',path, false);
req.send(null);
