let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icon');
let iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener("click",function(){

    if (iconMenu.getAttribute("src") == "images/menu.svg") {
        iconMenu.setAttribute("src","images/close.svg");
    }else{
        iconMenu.setAttribute("src","images/menu.svg");
    }

   menu.classList.toggle('active');
});

// IMC

const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
        let classification = ''
        if (imc < 18.5) {
            classification = 'Abaixo do peso'
        } else if (imc < 25) {
            classification = 'Peso normal'
        } else if (imc < 30) {
            classification = 'Acima do peso'
        } else if (imc < 35) {
            classification = 'Obesidade grau I'
        } else if (imc < 41) {
            classification = 'Obesidade grau II'
        } else {
            classification = 'Obesidade grau III'
        }

        resultado.innerHTML = `IMC: ${imc} (${classification})` 
        } else {
            resultado.innerHTML = 'Preencha os campos!'
        }
    
    }

// Água

const resultado_agua = document.querySelector('#resultado_agua')
const peso_agua = document.querySelector('#peso_agua')

const calcAGUA = () => {
    if (peso_agua.value !== '') {
        const agua = (peso_agua.value*35/1000).toFixed(2)
        

        resultado_agua.innerHTML = `Você deve ingerir ${agua} litros de água por dia.` 
        } else {
            resultado_agua.innerHTML = 'Preencha os campos!'
        }
}


// Cronometro

function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }

//   Taxa Basal

const resultado_basal = document.querySelector('#resultado_basal')
const peso_basal = document.querySelector('#peso_basal')
const altura_basal = document.querySelector('#altura_basal')
const idade_basal = document.querySelector('#idade_basal')

const calcTAXA = () => {
    if (peso_basal.value !== '' && altura_basal.value !== '' && idade_basal.value !== '') {
        const taxa = (66+(13.8*peso_basal.value)+(5*altura_basal.value)-(6.8*idade_basal.value)).toFixed(2)
        

        resultado_basal.innerHTML = `Sua taxa basal é de: ${taxa}.` 
        } else {
            resultado_basal.innerHTML = 'Preencha os campos!'
        }
}

// Crono

window.onload = ()=>{
    h=0; m=0; s=0; mls=0; timeStarted=0;
    time = document.getElementById("time");
    btnStart = document.getElementById("btn-start");
    btnStop = document.getElementById("btn-stop");
    btnReset = document.getElementById("btn-reset");
    Event();   
}

function Event(){
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
}

function write(){
    let ht, mt, st, mlst;
    mls++;

    if(mls > 99){ s++; mls=0;}
    if(s > 59){ m++; s=0;}
    if(m > 59){h++; m=0;}
    if(h > 24) h=0;

    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

   time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start(){
    write();
    timeStarted = setInterval(write, 10);
    btnStart.removeEventListener("click", start);
}

function stop(){
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);

}

function reset(){
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00.00";
    h = 0; m = 0; s = 0; mls = 0;
    btnStart.addEventListener("click", start);
}








