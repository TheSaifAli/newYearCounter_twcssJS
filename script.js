const daysEl = document.querySelector("#daysEl");
const hoursEl = document.querySelector("#hoursEl");
const minuteEl = document.querySelector("#minuteEl");
const secondEl = document.querySelector("#secondEl");

const newYearTime = new Date("Jan ,2024 00:00:00").getTime();

const updateCounter =()=>{
    const now = new Date().getTime();
    const gap = newYearTime-now;

    const sec = 1000;
    const min = sec*60;
    const hour = min*60;
    const day = hour*24;

    const d = Math.floor(gap/day);
    const h = Math.floor((gap%day)/hour);
    const m = Math.floor ((gap%hour)/min);
    const s = Math.floor((gap%min)/sec);

    daysEl.textContent = d;
    hoursEl.textContent = h;
    minuteEl.textContent = m;
    secondEl.textContent = s;
    setTimeout(updateCounter,1000);
}

updateCounter();

