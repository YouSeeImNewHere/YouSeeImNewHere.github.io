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
	
	for (i = 0; i < str.length; i++) {
		let color = str[i];
		if(color == "o"){
			let tempStr = "<font color='orange'>";
			
			for(i += 1; i < str.length; i++){
				if(str[i] == " " || str[i] == ")"){
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
			else{
				let tempStr = "<font color='red'>";

				for(i += 1; i < str.length; i++){
					if(str[i] == " " || str[i] == ")"){
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
			else {
				let tempStr = "<font color='deepskyblue'>";
				
				for(i += 1; i < str.length; i++){
					if(str[i] == " " || str[i] == ")"){
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
			"01: (R rU' bU') (R'2 F R rF') U2 (R' F R rF')",
			"02: F (R U R' bU') rF' f (R U R' bU') rf'",
			"03: f (R U R' bU') rf' bU' F (R U R' bU') rF'",
			"04: f (R U R' bU') rf' U F (R U R' bU') rF'",
			"05: (r' U2) (R U R' U) r",
			"06: (r rU' bU') (R' bU' R bU' r')",
			"07: (r U R' U) (R rU' bU' r')",
			"08: (r' bU' R bU') (R' U2 r)",
			"09: (R U R' bU') (R' F) (R2 U R' bU') rF'",
			"10: (R U R' oU) (R' F R rF') (R rU' bU' R')",
			"11: (r' R2 U R' U) (R rU' bU' R' U) oM'",
			"12: oM' (R' bU' R bU') (R' U2 R bU') M",
			"13: f (R U) (R2 bU') (R' U R bU') of'",
			"14: (R' F) (R U R' rF' R) (F bU' rF')",
			"15: (r' bU' r) (R' bU' R U) (r' U r)",
			"16: (r U r') (R U R' bU') (r bU' r')",
			"17: (l bU' l') f (R2 B R' U R' bU' rf')",
			"18: (r U R' U) (R rU' bU' r') (r' bU' R bU') (R' U2 r)",
			"19: (r' R U) (R U R' bU' r) (R'2 F R rF')",
			"20: (r U R' bU') oM'2 U (R bU' R' bU') oM'",
			"21: (R rU' bU') (R' bU' R U R' bU') (R bU' R')",
			"22: (R rU' bU') (R'2 bU') (R2 bU') (R'2 bU') (rU' R)",
			"23: (R2 oD') (R rU' bU' R' oD) (R rU' bU' R)",
			"24: (r U R' bU') (r' F R rF')",
			"25: rF' (r U R' bU') (r' F R)",
			"26: (R rU' bU') (R' bU' R bU' R')",
			"27: (R U R' oU) (R rU' bU' R')",
			"28: (r U R' bU') (r' R U) (R bU' R')",
			"29: (R U R' bU') (R bU' R' rF' bU' F) (R U R')",
			"30: f (R U) (R2 bU' R' U) (R2 bU' R') rf'",
			"31: (r' rF' rU rF) (r bU' r' bU' r)",
			"32: (R U) (rB' bU') (R' U R B R')",
			"33: (R U R' bU') (R' F R rF')",
			"34: (R U R2 bU') (R' F) (R U R bU' oF')",
			"35: (R rU' bU') (R'2 F R rF') (R rU' bU' R')",
			"36: (R' bU' R  bU') (R' U R U) (l bU' R' U)",
			"37: F (R bU' R' bU') (R U R' rF')",
			"38: (R U R' U) (R bU' R' bU') (R' F R rF')",
			"39: (R U R' rF' bU' F) U (R U2 R')",
			"40: (R' F) (R U R' bU') rF' (U R)",
			"41: (R U R' oU) (R rU' bU' R') F (R U R' bU') rF'",
			"42: (R' bU' R bU') (R' U2 R) F (R U R' bU') rF'",
			"43: (rB' bU') (R' U R B)",
			"44: f (R U R' bU') rf'",
			"45: F (R U R' bU') rF'",
			"46: (R' bU') (R' F R rF') (U R)",
			"47: rb' (bU' R' U R)2 b",
			"48: F (R U R' bU')2 rF'",
			"49: (R rB') (R'2 F R2 B) (R'2 rF' R)",
			"50: (r' U) (r2 bU' r'2 bU') (r2 U r')",
			"51: f ( R U R' bU')2 rf'",
			"52: (R' rF' bU' F bU') (R U R' oU R)",
			"53: (r' U2) (R U R' bU') (R U R' U r)",
			"54: (r rU' bU') (R' bU' R U) (R' bU' R bU' r')",
			"55: (r rU' bU' R' bU') (r' R2 U R' bU') (r bU' r')",
			"56: (r U r') (U R bU' R')2 (r bU' r)",
			"57: (R U R' bU') oM' (U R bU' r')"
        ];
	
PLL = [
			"01: oM'2 U oM U2 oM' U oM'2 <br> OR <br> (R bU' R) (U R)2 (U' R' bU' R'2')",
			"02: oM'2 bU' oM  U2 oM' bU' oM'2 <br> OR <br> (R2 U) (R U) (R' bU')2 (R' U R')",
			"03: oM'2 U oM'2 U2 oM'2 U oM'2",
			"04: oM' U (oM'2 U)2 oM' U2 oM'2  bU'",
			"05: x' R2 oD2 (R' bU' R) oD2 (R' U R')",
			"06: x' (R bU' R) oD2 (R' U R) oD2 R'2",
			"07: x' (R bU' R' oD) (R U R' oD') (R U R' oD) (R bU' R' oD')",
			"08: (R U R' bU') (R' rF) (R2 bU' R' bU') (R U R' rF')",
			"09: (R' bU' rF') (R U R' bU') (R' F) (R2 bU' R' bU') (R U R' U R)",
			"10: (R' U R' d') (R' rF' R2 bU') (R' U R' F R F)",
			"11: F (R bU' R' bU') (R U R' rF') (R U R' bU') (R' F R rF')",
			"12: z (U' R oD') (R2 U R' bU') (R2 U) (oD R')",
			"13: (R U R' bF') (R U R' bU') (R' F) (R2 bU' R' bU')",
			"14: (R' U2) (R rU' bU') (R' F R U R' bU') (R' rF' R2 bU')",
			"15: (R bU' R' bU') (R U R oD) (R' bU' R oD') (R' U2 R' bU')",
			"16: (R'2 bu' R rU' R) (U R' u) (R2 f R' rf')",
			"17: (R U R') y' (R2 ru' R bU') (R' U R' u R2)",
			"18: (R2 u R') (U R' bU' R bu') (R'2 rF' rU rF)",
			"19: (R' d' F) (R2 U) (R' U) (R rU' R bu' R'2)",
			"20: (R' U R bU') (R' rF' bU') (F R U R' F) (R' rF' R bU' R)",
			"21: (R U R' oU) (R U R' bF') (R U R' bU') (R' F) (R2 bU' R' U2) (R bU' R')"
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
		
		let str = "<div class=\"seperate\"> <img src=\"OLL/" + i + ".png\" alt=\"OLL case " + i + "\" title=\"OLL case " + i + "\" class=\"img\"/> <h3 id=\"OLL" + i + "\">" + colorText(OLL[i -1]) + "</h3> </div>";
		let li = document.createElement("li");
        li.innerHTML = str;
        list.appendChild(li);
	}
	
	for(i = 1; i < 22; i++){
		
		let str = "<div class=\"seperate\"> <img src=\"PLL/" + i + ".png\" alt=\"PLL case " + i + "\" title=\"PLL case " + i + "\" class=\"img\"/> <h3 id=\"PLL" + i + "\">" + colorText(PLL[i -1]) + "</h3> </div>";
		let li = document.createElement("li");
        li.innerHTML = str;
        list.appendChild(li);
	}
	
}