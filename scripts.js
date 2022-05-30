const hr = document.querySelector(".hand.hours");
const mn = document.querySelector(".hand.minutes");
const sc = document.querySelector(".hand.seconds");
setInterval(() => {
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * 6;
	let ss = day.getSeconds() * 6;
	hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
	mn.style.transform = `rotateZ(${mm}deg)`;
	sc.style.transform = `rotateZ(${ss}deg)`;
})