// Update Clock
function updateClock() {
 const now = new Date();
 const hours = String(now.getHours()).padStart(2, '0');
 const minutes = String(now.getMinutes()).padStart(2, '0');
 const seconds = String(now.getSeconds()).padStart(2, '0');
 const time = `${hours}:${minutes}:${seconds}`;

 const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
 const date = now.toLocaleDateString(undefined, options);

 document.getElementById('time').textContent = time;
 document.getElementById('date').textContent = date;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize clock immediately

// Change Theme
function setTheme(theme) {
 const body = document.body;
 const clockContainer = document.getElementById('clockContainer');

 if (theme === 'light') {
  body.style.backgroundColor = '#f0f0f0';
  clockContainer.style.backgroundColor = '#ffffff';
  clockContainer.style.color = '#000000';
 } else if (theme === 'dark') {
  body.style.backgroundColor = '#000000';
  clockContainer.style.backgroundColor = '#000000';
  clockContainer.style.color = '#ffffff';
 } else if (theme === 'neon') {
  body.style.backgroundColor = '#1b1b3a';
  clockContainer.style.backgroundColor = '#1b1b3a';
  clockContainer.style.color = '#39ff14';
 }
}
