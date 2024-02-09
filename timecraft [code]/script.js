// localStorage.setItem

const wrapper=document.getElementById('wrapper');
const clockContainer=document.querySelector('.clock-container');
const hands=document.querySelectorAll('[hand]');



const toggleElement=document.querySelector('input');
const sunIcon=document.querySelector('#sun');
const moonIcon=document.querySelector('#moon');
const modeManager=document.querySelector('#current-mode');
const bottomLine=document.querySelectorAll('h1');

clockContainer.style.cssText='background-color:white';
if(window.outerWidth<=500){
    modeManager.style.cssText='box-shadow: 0px 0px 3px black;transform: translateX(2.3rem); background-color: black;';
}
else{
    modeManager.style.cssText='box-shadow: 0px 0px 3px black;transform: translateX(3.3rem); background-color: black;';
}

function handleMode(){
    if(toggleElement.checked){
        wrapper.style.cssText='background-color: #343a40';
        toggleElement.style.cssText='background-color: black;box-shadow: 0px 0px 3px white;';
        sunIcon.style.cssText='color:#1d3557';
        moonIcon.style.cssText='color:#1d3557';
        bottomLine[0].style.cssText='color:white;text-shadow: 0px 0px 10px white;';
        bottomLine[1].style.cssText='color:white;text-shadow: 0px 0px 10px white;';
        modeManager.style.cssText='box-shadow: 0px 0px 3px white;transform: translateX(0.2rem); background-color: white;';
        clockContainer.style.cssText='box-shadow: 0 0 20px 5px white; border-color:white; background-color: black';
        hands[0].style.cssText='background-color:white; box-shadow: 0 0 10px 1px white';
        hands[1].style.cssText='background-color:white; box-shadow: 0 0 10px 1px white';
    }
    else{
        wrapper.style.cssText='background-color: #e5e5e5';
        toggleElement.style.cssText='background-color: white;box-shadow: 0px 0px 3px black;';
        sunIcon.style.cssText='color:#ffb703';
        moonIcon.style.cssText='color:#ffb703';
        bottomLine[0].style.cssText='color:black;text-shadow: 0px 0px 10px black;';
        bottomLine[1].style.cssText='color:black;text-shadow: 0px 0px 10px black;';
        if(window.outerWidth<=500){
            modeManager.style.cssText='box-shadow: 0px 0px 3px black;transform: translateX(2.3rem); background-color: black;';
        }
        else{
            modeManager.style.cssText='box-shadow: 0px 0px 3px black;transform: translateX(3.3rem); background-color: black;';
        }
        clockContainer.style.cssText='box-shadow: 0 0 30px rgba(0, 0, 0, 0.7); border-color:black; background-color:white';
        hands[0].style.cssText='background-color:black; box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.7)';
        hands[1].style.cssText='background-color:black; box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.7)';
    }
}

function handleMode02(){
    if(toggleElement.checked){
        toggleElement.checked=false;
        handleMode();
    }
    else{
        toggleElement.checked=true;
        handleMode();
    }
}




const hourHand=document.querySelector('.hour-hand');
const minuteHand=document.querySelector('.minute-hand');
const secondHand=document.querySelector('.second-hand');

function printTime(){
    const currentTime=new Date();

    const seconds=currentTime.getSeconds();
    const secondDegree=((seconds/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`;

    const minute=currentTime.getMinutes();
    const minuteDegree=((minute/60)*360)+((seconds/60)*6)+90;
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`;

    const hour=currentTime.getHours();
    const hourDegree=((hour/12)*360)+((minute/60)*30)+90;
    hourHand.style.transform=`rotate(${hourDegree}deg)`;

}

setInterval(printTime,1000);