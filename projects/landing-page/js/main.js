//DOM structure
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name '),
  answer = document.getElementById('answer');

//Run Section
showTime();
setBGImage();

//Functions section
function showTime() {
  let today = new Date();
  let hours = today.getHours(),
    minutes = today.getMinutes(),
    seconds = today.getSeconds();

  time.innerHTML = `${addZero(hours)}<span>:</span>${addZero(
    minutes
  )}<span>:</span>${addZero(seconds)}`;

  setTimeout(showTime, 1000);
}

function addZero(value) {
  return (value < 10 ? '0' : '') + value;
}

function setBGImage() {
  let today = new Date();
  let hours = today.getHours();

  if (hours < 12) {
    document.body.style.backgroundImage = 'url("img/morning.jpg")';
    greeting.textContent = 'Good morning';
  } else if (hours < 18) {
    document.body.style.backgroundImage = 'url("img/day.jpg")';
    greeting.textContent = 'Good day';
  } else {
    document.body.style.backgroundImage = 'url("img/night.jpg")';
    greeting.textContent = 'Good evening';
    document.body.style.color = 'white';
  }
}
