/*index.js*/


$(document).ready(function(){
		
	"use strict"

	/*$ is an alias for the entire JQuery API
	var resultList = jQuery("#resultList");*/
	var tableResults = $("#tableResults");
	tableResults.text("This is from jQuery. ");
		
	$("#tablesForm").on("submit",function(){
		
		var num = $("#number").val();
				
		console.log("1 num");		
			tableResults.text("Calculating Table of " + num + "...");
			
			
			displayResults(num);			
				
		console.log("2");		
		
		return false;
	});	
	
	
	function displayResults(num){
	   
			tableResults.empty();
			console.log("in displayResults");
			var table = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10]
			
			/*for(var i in table){
				
				console.log("in for loop");
				var p = num * table[i];
				console.log(p);
				var productString = num + " X " + table[i] + " = " +p;
				console.log(productString);
				
				var newResult = $("<div class= 'result'>" + 
					"<div class= 'title' >" + productString +" </div>" +
				"</div>");
				
				tableResults.append(newResult);
			}*/
				
				
			$.each(table,function(i){
				var p = num * table[i];
				console.log(p);
				var productString = num + " X " + table[i] + " = " +p;
				console.log(productString);
				var newResult = $("<div class= 'result'>" + 
					"<div class= 'title' >" + productString +" </div>" +
				"</div>");
				
				tableResults.append(newResult);
			});
				
						
	}
	
})