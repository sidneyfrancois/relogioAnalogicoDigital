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

  let hhDigital = document.getElementById('hour');
	let mmDigital = document.getElementById('minutes');
	let ssDigital = document.getElementById('seconds');
	let ampm = document.getElementById('ampm');
	let h = day.getHours();
	let m = day.getMinutes();
	let s = day.getSeconds();

	var dayTime = h >= 12 ? 'PM' : 'AM'; 
		  
	h = (h < 10) ? "0" + h : h
	m = (m < 10) ? "0" + m : m
	s = (s < 10) ? "0" + s : s


	hhDigital.innerHTML = h;
	mmDigital.innerHTML = m;
	ssDigital.innerHTML = s;
	ampm.innerHTML = dayTime;
})