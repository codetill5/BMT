
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

var a;
function searchpop() {
	
	if(a==1){
	document.getElementById("show-search").style.display="block";
	return a=0;	
	}
	
	else{
		document.getElementById("show-search").style.display="none";
	return a=1;	
	}
}

var b;
function onClickActive(){
	
	if(b==1){
   var element = document.getElementById("liTwo");
   element.classList.add("activer");
		return b=0;
	}
	else{
		var element = document.getElementById("liTwo");
   element.classList.remove("activer");
		return b=1;
	}
}

