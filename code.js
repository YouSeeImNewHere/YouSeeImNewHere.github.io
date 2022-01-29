function openTab(evt, pllCase) {
	'use strict';
  // Declare all variables
	var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

  // Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	
  // Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(pllCase).style.display = "block";
	evt.currentTarget.className += " active";
}

function openSection(evt, sec) {
	'use strict';
    var sections, i;
	sections = document.getElementsByClassName("sections");
    for (i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }
    document.getElementById(sec).style.display = "block";
}

function colorText(str){
	var i;
	var returnStr = "";
	str = str.substr(4);
	for (i = 0; i < str.length; i++) {
		let color = str[i];
		if(color == "o"){
			let tempStr = "<font color='orange'>";
			
			for(i += 1; i < str.length; i++){
				if(str[i] == " " || str[i] == ")" || str[i] == "&"){
					i--;
					break;
				}
				tempStr += str[i];
			}
			returnStr += tempStr + "</font>";
		}
		else if(color == "r"){
			if(str[i + 1] == " ") {
				returnStr += "r ";
				i++;
			}
			else if(str[i + 1] == "'") {
				returnStr += "r'";
				i++;
			}
			else if(str[i + 1] == ")") {
				returnStr += "r)";
				i++;
			}
			else if(str[i + 1] == "2") {
				returnStr += "r2";
				i++;
			}
			else if(str[i + 1] == "&") {
				returnStr += "r&";
				i++;
			}
			else{
				let tempStr = "<font color='red'>";

				for(i += 1; i < str.length; i++){
					if(str[i] == " " || str[i] == ")" || str[i] == "&"){
						i--;
						break;
					}
					tempStr += str[i];
				}
				returnStr += tempStr + "</font>";
			}
		}
		else if(color == "b"){
			if(str[i + 1] == "r") {
				returnStr += "br>";
				i += 2;
			}
			else if(str[i + 1] == " ") {
				returnStr += "b ";
				i++;
			}
			else if(str[i + 1] == "'") {
				returnStr += "b'";
				i++;
			}
			else if(str[i + 1] == ")") {
				returnStr += "b)";
				i++;
			}
			else if(str[i + 1] == "s") {
				returnStr += "bs";
				i++;
			}
			else if(str[i + 1] == "&") {
				returnStr += "b&";
				i++;
			}
			else {
				let tempStr = "<font color='deepskyblue'>";
				
				for(i += 1; i < str.length; i++){
					if(str[i] == " " || str[i] == ")" || str[i] == "&"){
						i--;
						break;
					}
					tempStr += str[i];
				}
				returnStr += tempStr + "</font>";
			}
		}
		else{
			returnStr += color;
		}
	}
	switch(str[str.length - 1]){
		case "r":
			returnStr += "r";
			break;
		case "b":
			returnStr += "b";
			break;
		case "o":
			returnStr += "o";
			break;
	}
	return(returnStr);
}

let baseCases = [7, 29, 1, 5, 31, 21, 23, 26, 47, 33, 34, 36, 13, 51, 39, 28];

function getList(num){
	switch(num){
		case 7:
			return [7, 8, 11, 12];
			break;
		case 29:
			return [29, 30, 41, 42];
			break;
		case 1:
			return [1, 2, 3, 4, 17, 18, 19, 20];
			break;
		case 5:
			return [5, 6, 35, 37];
			break;
		case 31:
			return [31, 32, 43, 44];
			break;
		case 21:
			return [21, 22];
			break;
		case 23:
			return [23, 24];
			break;
		case 26:
			return [26, 27];
			break;
		case 47:
			return [47, 48, 49, 54, 53, 50, 9, 10];
			break;
		case 33:
			return [33, 45];
			break;
		case 34:
			return [34, 46];
			break;
		case 36:
			return [36, 38];
			break;
		case 13:
			return [13, 14, 15, 16];
			break;
		case 51:
			return [51, 52, 55, 56];
			break;
		case 39:
			return [39, 40];
			break;
		case 28:
			return [28, 57, 25];
			break;
	}
}

OLL = [
			"01: (R rU'&nbsp;bU') (R'2&nbsp;F&nbsp;R&nbsp;rF') U2 (R'&nbsp;F&nbsp;R&nbsp;rF')",
			"02: F (R&nbsp;U&nbsp;R'&nbsp;bU') rF' f (R&nbsp;U&nbsp;R'&nbsp;bU') rf'",
			"03: f (R&nbsp;U&nbsp;R'&nbsp;bU') rf' bU' F (R&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"04: f (R&nbsp;U&nbsp;R'&nbsp;bU') rf' U F (R&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"05: (r'&nbsp;U2) (R&nbsp;U&nbsp;R'&nbsp;U) r",
			"06: (r&nbsp;rU'&nbsp;bU') (R'&nbsp;bU'&nbsp;R&nbsp;bU'&nbsp;r')",
			"07: (r&nbsp;U&nbsp;R'&nbsp;U) (R&nbsp;rU'&nbsp;bU'&nbsp;r')",
			"08: (r'&nbsp;bU'&nbsp;R&nbsp;bU') (R'&nbsp;U2&nbsp;r)",
			"09: (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F) (R2&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"10: (R&nbsp;U&nbsp;R'&nbsp;oU) (R'&nbsp;F&nbsp;R&nbsp;rF') (R&nbsp;rU'&nbsp;bU' R')",
			"11: (r'&nbsp;R2&nbsp;U&nbsp;R'&nbsp;U) (R&nbsp;rU'&nbsp;bU'&nbsp;R'&nbsp;U) oM'",
			"12: oM' (R'&nbsp;bU'&nbsp;R&nbsp;bU') (R'&nbsp;U2&nbsp;R&nbsp;bU') M",
			"13: f (R&nbsp;U) (R2&nbsp;bU') (R'&nbsp;U&nbsp;R&nbsp;bU') of'",
			"14: (R' F)&nbsp;(R&nbsp;U&nbsp;R'&nbsp;rF'&nbsp;R) (F&nbsp;bU'&nbsp;rF')",
			"15: (r'&nbsp;bU'&nbsp;r) (R'&nbsp;bU'&nbsp;R&nbsp;U) (r'&nbsp;U&nbsp;r)",
			"16: (r&nbsp;U&nbsp;r') (R&nbsp;U&nbsp;R'&nbsp;bU') (r&nbsp;bU'&nbsp;r')",
			"17: (l&nbsp;bU'&nbsp;l') f (R2&nbsp;B&nbsp;R'&nbsp;U&nbsp;R'&nbsp;bU'&nbsp;rf')",
			"18: (r&nbsp;U&nbsp;R'&nbsp;U) (R&nbsp;rU'&nbsp;bU'&nbsp;r') (r'&nbsp;bU'&nbsp;R&nbsp;bU') (R'&nbsp;U2&nbsp;r)",
			"19: (r'&nbsp;R&nbsp;U) (R&nbsp;U&nbsp;R'&nbsp;bU'&nbsp;r) (R'2&nbsp;F&nbsp;R&nbsp;rF')",
			"20: (r&nbsp;U&nbsp;R'&nbsp;bU') oM'2 U (R&nbsp;bU'&nbsp;R'&nbsp;bU') oM'",
			"21: (R&nbsp;rU'&nbsp;bU') (R'&nbsp;bU'&nbsp;R&nbsp;U&nbsp;R'&nbsp;bU') (R&nbsp;bU'&nbsp;R')",
			"22: (R&nbsp;rU'&nbsp;bU') (R'2&nbsp;bU') (R2&nbsp;bU') (R'2&nbsp;bU') (rU'&nbsp;R)",
			"23: (R2&nbsp;oD') (R&nbsp;rU'&nbsp;bU'&nbsp;R'&nbsp;oD) (R&nbsp;rU'&nbsp;bU'&nbsp;R)",
			"24: (r&nbsp;U&nbsp;R'&nbsp;bU') (r'&nbsp;F&nbsp;R&nbsp;rF')",
			"25: rF' (r&nbsp;U&nbsp;R'&nbsp;bU') (r'&nbsp;F&nbsp;R)",
			"26: (R&nbsp;rU'&nbsp;bU') (R'&nbsp;bU'&nbsp;R&nbsp;bU'&nbsp;R')",
			"27: (R&nbsp;U&nbsp;R'&nbsp;oU) (R&nbsp;rU'&nbsp;bU'&nbsp;R')",
			"28: (r&nbsp;U&nbsp;R'&nbsp;bU') (r'&nbsp;R&nbsp;U) (R&nbsp;bU'&nbsp;R')",
			"29: (R&nbsp;U&nbsp;R'&nbsp;bU') (R&nbsp;bU'&nbsp;R'&nbsp;rF'&nbsp;bU'&nbsp;F) (R&nbsp;U&nbsp;R')",
			"30: f (R&nbsp;U) (R2&nbsp;bU'&nbsp;R'&nbsp;U) (R2&nbsp;bU'&nbsp;R') rf'",
			"31: (r'&nbsp;rF'&nbsp;rU&nbsp;rF) (r&nbsp;bU'&nbsp;r'&nbsp;bU'&nbsp;r)",
			"32: (R&nbsp;U) (rB'&nbsp;bU') (R'&nbsp;U&nbsp;R&nbsp;B&nbsp;R')",
			"33: (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F&nbsp;R&nbsp;rF')",
			"34: (R&nbsp;U&nbsp;R2&nbsp;bU') (R'&nbsp;F) (R&nbsp;U&nbsp;R&nbsp;bU'&nbsp;oF')",
			"35: (R&nbsp;rU'&nbsp;bU') (R'2&nbsp;F&nbsp;R&nbsp;rF') (R&nbsp;rU'&nbsp;bU'&nbsp;R')",
			"36: (R'&nbsp;bU'&nbsp;R&nbsp; bU') (R'&nbsp;U&nbsp;R&nbsp;U) (l&nbsp;bU'&nbsp;R'&nbsp;U)",
			"37: F (R&nbsp;bU'&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;rF')",
			"38: (R&nbsp;U&nbsp;R'&nbsp;U) (R&nbsp;bU'&nbsp;R'&nbsp;bU') (R'&nbsp;F&nbsp;R&nbsp;rF')",
			"39: (R&nbsp;U&nbsp;R'&nbsp;rF'&nbsp;bU'&nbsp;F) U (R&nbsp;U2&nbsp;R')",
			"40: (R'&nbsp;F) (R&nbsp;U&nbsp;R'&nbsp;bU') rF' (U&nbsp;R)",
			"41: (R&nbsp;U&nbsp;R'&nbsp;oU) (R&nbsp;rU'&nbsp;bU'&nbsp;R') F (R&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"42: (R'&nbsp;bU'&nbsp;R&nbsp;bU') (R'&nbsp;U2&nbsp;R) F (R&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"43: (rB'&nbsp;bU') (R'&nbsp;U&nbsp;R&nbsp;B)",
			"44: f (R&nbsp;U&nbsp;R'&nbsp;bU') rf'",
			"45: F (R&nbsp;U&nbsp;R'&nbsp;bU') rF'",
			"46: (R'&nbsp;bU') (R'&nbsp;F&nbsp;R&nbsp;rF') (U&nbsp;R)",
			"47: rb' (bU'&nbsp;R'&nbsp;U&nbsp;R)2 b",
			"48: F (R&nbsp;U&nbsp;R'&nbsp;bU')2 rF'",
			"49: (R&nbsp;rB') (R'2&nbsp;F&nbsp;R2&nbsp;B) (R'2&nbsp;rF'&nbsp;R)",
			"50: (r'&nbsp;U) (r2&nbsp;bU'&nbsp;r'2&nbsp;bU') (r2&nbsp;U&nbsp;r')",
			"51: f ( R&nbsp;U&nbsp;R'&nbsp;bU')2 rf'",
			"52: (R'&nbsp;rF'&nbsp;bU'&nbsp;F&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;oU&nbsp;R)",
			"53: (r'&nbsp;U2) (R&nbsp;U&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;U&nbsp;r)",
			"54: (r&nbsp;rU'&nbsp;bU') (R'&nbsp;bU'&nbsp;R&nbsp;U) (R'&nbsp;bU'&nbsp;R&nbsp;bU'&nbsp;r')",
			"55: (r&nbsp;rU'&nbsp;bU'&nbsp;R'&nbsp;bU') (r'&nbsp;R2&nbsp;U&nbsp;R'&nbsp;bU') (r&nbsp;bU'&nbsp;r')",
			"56: (r&nbsp;U&nbsp;r') (U&nbsp;R&nbsp;bU'&nbsp;R')2 (r&nbsp;bU'&nbsp;r)",
			"57: (R&nbsp;U&nbsp;R'&nbsp;bU') oM' (U&nbsp;R&nbsp;bU'&nbsp;r')"
        ];
	
PLL = [
			"01: oM'2 U oM U2 oM' U oM'2 <br>&nbsp;OR&nbsp;<br> (R&nbsp;bU'&nbsp;R) (U&nbsp;R)2 (U'&nbsp;R'&nbsp;bU'&nbsp;R'2')",
			"02: oM'2 bU' oM  U2 oM' bU' oM'2 <br> OR <br> (R2&nbsp;U) (R&nbsp;U) (R'&nbsp;bU')2 (R'&nbsp;U&nbsp;R')",
			"03: oM'2 U oM'2 U2 oM'2 U oM'2",
			"04: oM' U (oM'2&nbsp;U)2 oM' U2 oM'2  bU'",
			"05: x' R2 oD2 (R'&nbsp;bU'&nbsp;R) oD2 (R'&nbsp;U&nbsp;R')",
			"06: x' (R&nbsp;bU'&nbsp;R) oD2 (R'&nbsp;U&nbsp;R) oD2 R'2",
			"07: x' (R&nbsp;bU'&nbsp;R'&nbsp;oD) (R&nbsp;U&nbsp;R'&nbsp;oD') (R&nbsp;U&nbsp;R'&nbsp;oD) (R&nbsp;bU'&nbsp;R'&nbsp;oD')",
			"08: (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;rF) (R2&nbsp;bU'&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;rF')",
			"09: (R'&nbsp;bU'&nbsp;rF') (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F) (R2&nbsp;bU'&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;U&nbsp;R)",
			"10: (R'&nbsp;U&nbsp;R'&nbsp;d') (R'&nbsp;rF'&nbsp;R2&nbsp;bU') (R'&nbsp;U&nbsp;R'&nbsp;F&nbsp;R&nbsp;F)",
			"11: F (R&nbsp;bU'&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R'&nbsp;rF') (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F&nbsp;R&nbsp;rF')",
			"12: z (U'&nbsp;R&nbsp;oD') (R2&nbsp;U&nbsp;R'&nbsp;bU') (R2&nbsp;U) (oD&nbsp;R')",
			"13: (R&nbsp;U&nbsp;R'&nbsp;bF') (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F) (R2&nbsp;bU' R'&nbsp;bU')",
			"14: (R'&nbsp;U2) (R&nbsp;rU'&nbsp;bU') (R'&nbsp;F&nbsp;R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;rF'&nbsp;R2&nbsp;bU')",
			"15: (R&nbsp;bU'&nbsp;R'&nbsp;bU') (R&nbsp;U&nbsp;R&nbsp;oD) (R'&nbsp;bU'&nbsp;R&nbsp;oD') (R'&nbsp;U2&nbsp;R'&nbsp;bU')",
			"16: (R'2&nbsp;bu'&nbsp;R&nbsp;rU'&nbsp;R) (U&nbsp;R'&nbsp;u) (R2&nbsp;f&nbsp;R'&nbsp;rf')",
			"17: (R&nbsp;U&nbsp;R') y' (R2&nbsp;ru'&nbsp;R&nbsp;bU') (R'&nbsp;U&nbsp;R'&nbsp;u&nbsp;R2)",
			"18: (R2&nbsp;u&nbsp;R') (U&nbsp;R'&nbsp;bU'&nbsp;R&nbsp;bu') (R'2&nbsp;rF'&nbsp;rU&nbsp;rF)",
			"19: (R'&nbsp;d'&nbsp;F) (R2&nbsp;U) (R'&nbsp;U) (R&nbsp;rU'&nbsp;R&nbsp;bu'&nbsp;R'2)",
			"20: (R'&nbsp;U&nbsp;R&nbsp;bU') (R'&nbsp;rF'&nbsp;bU') (F&nbsp;R&nbsp;U&nbsp;R'&nbsp;F) (R'&nbsp;rF'&nbsp; R&nbsp;bU'&nbsp;R)",
			"21: (R&nbsp;U&nbsp;R'&nbsp;oU) (R&nbsp;U&nbsp;R'&nbsp;bF') (R&nbsp;U&nbsp;R'&nbsp;bU') (R'&nbsp;F) (R2&nbsp;bU'&nbsp;R'&nbsp;U2) (R&nbsp;bU'&nbsp;R')"
        ];

function OLLcases(){
	var i;
	for(i = 0; i < baseCases.length; i++){
		var j;
		let list = document.getElementById(baseCases[i] + " cases");

		var cases = getList(baseCases[i]);

		for(j = 0; j < cases.length; j++){
			let x = cases[j];
			let str = "<div class=\"seperate\"> <img src=\"OLL/" + x + ".png\" alt=\"OLL case " + x + "\" title=\"OLL case " + x + "\" class=\"img\" /> <h3 id=\"OLL" + x + "\"> " + colorText(OLL[x -1]) + "</h3> </div>";
			let li = document.createElement("li");
			li.innerHTML = str;
			list.appendChild(li);
		}
	}
}

function PLLcases(){
	var i;
	let list = document.getElementById("PLL cases");
	
	for(i = 1; i < 22; i++){
		
		let str = "<div class=\"seperate\"> <img src=\"PLL/" + i + ".png\" alt=\"PLL case " + i + "\" title=\"PLL case " + i + "\" class=\"img\"/> <h3 id=\"PLL" + i + "\">" + colorText(PLL[i -1]) + "</h3> </div>";
		let li = document.createElement("li");
        li.innerHTML = str;
        list.appendChild(li);
	}
}

function AllCases(){
	var i;
	let list = document.getElementById("All cases");
	
	for(i = 1; i < OLL.length + 1; i++){
		
		let str = "<div class=\"seperate\"> <img src=\"OLL/" + i + ".png\" alt=\"OLL case " + i + "\" title=\"OLL case " + i + "\" class=\"img\"/> <h3 id=\"OLL" + i + "\">" + String(i).padStart(2, '0') + ": " + colorText(OLL[i -1]) + "</h3> </div>";
		let li = document.createElement("li");
        li.innerHTML = str;
        list.appendChild(li);
	}
	
	for(i = 1; i < 22; i++){
		
		let str = "<div class=\"seperate\"> <img src=\"PLL/" + i + ".png\" alt=\"PLL case " + i + "\" title=\"PLL case " + i + "\" class=\"img\"/> <h3 id=\"PLL" + i + "\">" + String(i).padStart(2, '0') + ": " + colorText(PLL[i -1]) + "</h3> </div>";
		let li = document.createElement("li");
        li.innerHTML = str;
        list.appendChild(li);
	}
	
}
