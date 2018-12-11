/*index.js*/


$(document).ready(function(){
		
	"use strict"

	/*$ is an alias for the entire JQuery API
	var resultList = jQuery("#resultList");*/

	
	var tableResults = $("#tableResults");
	tableResults.text("Table");
	
	console.log("what??");
	

	var squareResults = $("#squareResults");
	squareResults.text("Square");
	
	
	var cubeResults = $("#cubeResults");
	cubeResults.text(" Cube !");
	
	$("#cubeForm").on("submit", function(){
		
		var num = $("#numb").val();
		if(isNaN(num)){
			console.log("Valid number not entered by user");	
			cubeResults.text("Please enter a valid number and Try again!");
		}	
		else {
			console.log(num);
			findCube(num);
					
		}
		return false;
	});
	
	
	function findCube(num){
			cubeResults.empty();
			var title = $("<div> <p>Cube of " + num + " </p> </div>)"	);
			cubeResults.append(title);
			var square = num * num;
			var cube = num * square;
			console.log(cube);
			cubeResults.append(cube);
		
	}
			
	$("#squareForm").on("submit", function(){
		
		var num = $("#num").val();
		if(isNaN(num)){
			console.log("Valid number not entered by user");	
			squareResults.text("Please enter a valid number and Try again!");
		}	
		else {
			console.log(num);
			findSquare(num);
					
		}
		return false;
	});
	
	function findSquare(num){
			squareResults.empty();
			var title = $("<div> <p>Square of " + num + " </p> </div>)"	);
			squareResults.append(title);
			var square = num * num;
			console.log(square);
			squareResults.append(square);
		
	}
		
	$("#tablesForm").on("submit",function(){
		
		
		var num = $("#number").val();
		if(isNaN(num)){
			console.log("Valid number not entered by user");	
			tableResults.text("Please enter a valid number and Try again!");
		}		
		else {
		  tableResults.text("Calculating Table of " + num + "...");
		  displayResults(num);			
		  console.log("Valid number entered by user");		
		}
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
				
			var title = $("<div> <p>Table of " + num + " </p> </div>");	
			tableResults.append(title);
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