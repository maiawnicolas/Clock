const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio =  setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = s;
})