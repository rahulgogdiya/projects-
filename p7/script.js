const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonth = ["jan","feb","mar","apr","may","jun","july","augu","sepet","octo","nov","dec"];

date.innerHTML = (today.getDate()<10?"0":"")+today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();