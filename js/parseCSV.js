/*CSVパーサー*/
var path ='./csv/colonies.csv';
var target = "#dataset";
var csvList;
var insert = '';
		$("body").append("<h3>aaa</h3>");

$.ajax({
	url: path,
	success: function(data){
	csvList = $.csv()(data);
	for (var i = 1; i < csvList.length; i++) {
		insert += "<li>" + csvList[i][0] + "</li>";
	};
	$(target).append(insert);
	}
});