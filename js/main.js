const billinput = document.querySelector(".bill-input");
const peapleInput = document.querySelector(".people-input");
const tipPerson = document.getElementById("tip-amount");
const TotalPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const tip_custom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset")

resetBtn.addEventListener("click",reset)
billinput.addEventListener("input", billinputRun);
peapleInput.addEventListener("input", peapleinputRun)
tip_custom.addEventListener("input",tipCustom)
tips.forEach(tip=>{
    tip.addEventListener("click",handleActive)
})

billinput.value = '0.0';
peapleInput.value = '1';


let billValue = 0.0;
let peapleValue = 1;
let tipValue = 0.15;

function reset(){
    billinput.value = '0.0';
    billinputRun()
    peapleInput.value = '1';
    peapleinputRun()
    tip_custom.value = '';
}

function billinputRun(){
    billValue = parseFloat(billinput.value);
    calculateTips()
}
function peapleinputRun(){
    peapleValue = parseFloat(peapleInput.value);
    if (peapleValue < 1) {
        let error = document.createElement('p');
        error.className = 'error'
        error.textContent = 'Don`t be Zero';
        error.style.color = 'red';
        error.style.width = 'auto'
        peapleInput.style.border = '2px solid red';
        document.querySelector(".peapleLabel").appendChild(error)
    }else{
        document.querySelector(".error").remove()
        peapleInput.style.border = 'none';
    }
}
function tipCustom() {
    tipValue = parseFloat(tip_custom.value / 100);
    
    tips.forEach(tip=>{
        tip.classList.remove("active-tip")
    })
    calculateTips()
}
function handleActive(even){
    tips.forEach(tip=>{
        tip.classList.remove("active-tip")
        if(even.target.innerHTML == tip.innerHTML){
            even.target.classList.add("active-tip")
            tipValue = parseFloat(tip.innerHTML) / 100;
        }
    })
    calculateTips()
}
function calculateTips(){
    if(peapleValue >= 1){
        let tipAmount = (billValue * tipValue) / peapleValue;
        let total = (billValue * tipAmount) / peapleValue;
        tipPerson.innerHTML = "$" + tipAmount.toFixed(2);
        TotalPerson.innerHTML = "$" + total.toFixed(2);
    }
}