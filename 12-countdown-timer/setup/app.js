const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveway = document.querySelector('.giveaway');
const deadline = document.querySelectorAll('.deadline-format h4');
const deadlines = document.querySelector('.deadline');

const tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempDays = tempDate.getDay();


const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
let date = futureDate.getDate();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let days = weekdays[futureDate.getDay()];
let month = months[futureDate.getMonth()];
let year = futureDate.getFullYear();

giveway.textContent = `giveaway ends on ${days}, ${date} ${month} ${year}, ${hours}:${minutes} am`;

const futureTime = futureDate.getTime();

function RemainingFutureDate(){
  const currenttime= new Date().getTime();
  const t = futureTime - currenttime;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let day = Math.floor(t/oneDay);
  let hours = Math.floor((t%oneDay)/oneHour);
  let minutes = Math.floor((t%oneHour)/oneMinute);
  let sec = Math.floor((t % oneMinute)/1000);
 
  const values = [day,hours,minutes,sec];

  function format(item){
    if(item<10){
      return item =`0${item}`;
    }else{
      return item;
    }

  }
  deadline.forEach((element , index)=> {
    element.innerHTML = format(values[index]);
  });

  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;

  }
  
}
//RemainingFutureDate();

let countdown = setInterval(RemainingFutureDate,1000);
