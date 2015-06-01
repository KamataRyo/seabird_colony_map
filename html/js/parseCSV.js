/*CSVパーサー*/
var path ='./csv/colonies.csv';
var target = "#dataset";


var req = new XMLHttpRequest();


req.open('GET',path, true);
req.onload = function(){
	document.write(this.responseText+'A');
};
