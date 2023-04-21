const domain = "gay"

function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num, bool = false){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		if (bool == false) {
			document.getElementById("output-value").innerText=getFormattedNumber(num);
		} else {
			document.getElementById("output-value").style.fontSize = "large";
			document.getElementById("output-value").innerText=num;
		}
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
function openCloak(graph) {
	var urle = "https://" + domain//+ document.domain;
	// if (graph) {
	// 	urle += "/QualityIndex.html";
	// } else {
	// 	urle += "/PerformanceIndex.html";
	// }
	win = window.open();
	win.document.body.style.margin = '0';
	win.document.body.style.height = '100vh';
	var iframe = win.document.createElement('iframe');
	iframe.style.border = 'none';
	iframe.style.width = '100%';
	iframe.style.height = '100%';
	iframe.style.margin = '0';
	iframe.src = urle;
	console.log(iframe.src)
	win.document.body.appendChild(iframe)
	window.close();
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else if(this.id=="empty1"){
			if(!output){//if output has a value
				printOutput("Loading Perfomance Mode...", true);
				openCloak(false);
			}
		}
		else if(this.id=="empty2"){
			if(!output){//if output has a value
				printOutput("Loading Quality Mode....", true);
				openCloak(true);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
