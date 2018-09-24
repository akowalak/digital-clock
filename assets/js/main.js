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

	function lessThanTen() {
		function isLessThanTen() {
			if (hours < 10) {
				hours = "0" + hours;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}
		}
		isLessThanTen();

		hrAndMin.innerHTML = hours + ":" + minutes;
		sec.innerHTML = seconds; 
	}

	function whichMonth() {
		var monthsOfTheYear = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		var currentMonth = monthsOfTheYear[month];
		monthDateYear.innerHTML = currentMonth + " " + date + " " + year;
		
	}
}