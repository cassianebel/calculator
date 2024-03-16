const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.btn'));
buttons.map( button => {
  button.addEventListener('click', (e) => {
      if (e.target.innerText === '×') {
        display.value += '*';
        return
      }
      if (e.target.innerText === '÷') {
        display.value += '/';
        return
      }
      display.value += e.target.innerText;
  })
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
  if (display.value !== "") {
    try {
      console.log(display.value);
      display.value = eval(display.value);
    } catch {
      display.value = "ERROR";
    }
  }
});

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
  display.value = "";
});

const themeToggler = document.getElementById('theme-toggler');
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
    }
    localStorage.setItem('theme', theme);
});

window.onload = () => {
    let savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.add(savedTheme + '-theme');
};