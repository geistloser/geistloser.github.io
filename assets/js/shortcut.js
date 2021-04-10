var a = document.getElementsByTagName("a")[0];
window.addEventListener("keydown", function(e) {
	var x = e.keyCode;
	if (x === 73) {
		a.click();
	} 
});