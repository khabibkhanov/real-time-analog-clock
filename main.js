function clock() {
  var weekday = new Array(7),
      day = new Date(),
      hour = day.getHours(),
      minute = day.getMinutes(),
      second = day.getSeconds(),
      date = day.getDate(),
      month = day.getMonth() + 1,
      year = day.getFullYear(),
           
      hourDeg = hour * 30 + minute * (360/720),
      minuteDeg = minute * 6 + second * (360/3600),
      secondDeg = second * 6,
      
      hourEl = document.querySelector('.hour-hand'),
      minuteEl = document.querySelector('.minute-hand'),
      secondEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');

      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";
  
      var day = weekday[day.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hourEl.style.transform = "rotate("+hourDeg+"deg)";
  minuteEl.style.transform = "rotate("+minuteDeg+"deg)";
  secondEl.style.transform = "rotate("+secondDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);