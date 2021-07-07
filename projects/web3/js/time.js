 window.setInterval(function clock(){
	var fullDate = new Date(); 
	var hours = fullDate.getHours(); 
	var minutes = fullDate.getMinutes(); 
	var second = fullDate.getSeconds(); 
	var date = fullDate.getDate(); 
	var month = fullDate.getMonth(); 
	var fullYear = fullDate.getFullYear(); 
	var str = document.getElementById('clock');
	if(hours < 10){
		hours = "0" + hours; 
	}

	if(minutes < 10){
		minutes = "0" + minutes; 
	}

	if(second < 10){
		second = "0" + second; 
	}


	switch(month){ 
		case 0: month = "Января"; break; 
		case 1: month = "Февраля"; break; 
		case 2: month = "Марта"; break; 
		case 3: month = "Апреля"; break; 
		case 4: month = "Мая"; break; 
		case 5: month = "Июня"; break; 
		case 6: month = "Июля"; break; 
		case 7: month = "Августа"; break; 
		case 8: month = "Сентября"; break; 
		case 9: month = "Октября"; break; 
		case 10: month = "Ноября"; break; 
		case 11: month = "Декабря"; break; 
	}

	if (date < 10){ 
		date = "0" + date; 
	} 
	
	str.innerHTML = hours + ":" 
					+ minutes + ":" 
					+ second + "  " 
					+ date + " " 
					+ month + " " 
					+ fullYear + "г."; 	
	}, 1000);