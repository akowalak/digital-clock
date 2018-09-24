window.onload = function() {
	loadClock();
}

function loadClock() {
	var hrAndMin = document.getElementById("hrs-mins"),
	sec = document.getElementById("sec"),
	monthDateYear = document.getElementById("d-m-y"),
	weekDay = document.getElementById("day-paragraph"),

	time = new Date(),
	hours = time.getHours(),
	minutes = time.getMinutes(),
	seconds = time.getSeconds(),
	month = time.getMonth(),
	date = time.getDate(),
	year = time.getFullYear(),
	day = time.getDay();
}