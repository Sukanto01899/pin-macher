const genarateBtn = document.getElementById('genarate-btn');
const genarateScreen = document.getElementById('genarator-screen');
const keys = document.getElementById('keys');
const matcherScreen = document.getElementById('matcher-screen');
const checkPin = document.getElementById('submit');

genarateBtn.addEventListener('click', function pinGenarate(){
    const randomNumber = Math.round(Math.random() * 1000000);
    const randomNumberText = randomNumber + '';
    if(randomNumberText.length === 6){
        genarateScreen.value = randomNumber;
    }else{
        pinGenarate();
    }
})


keys.addEventListener('click', (e)=>{
    if(e.target.matches('button')){
        const action = e.target
        if(action.dataset.action == 'num'){
            matcherScreen.value += action.innerText
        }else if(action.dataset.action == 'clear'){
            matcherScreen.value = '';
        }else if(action.dataset.action == 'remove'){
            let screenValue = matcherScreen.value
            let valueToArr = screenValue.split('');
            valueToArr.pop()
            matcherScreen.value = valueToArr.join('')
        }
    }
})

checkPin.addEventListener('click', ()=>{
    if(matcherScreen.value === ''){
        alert('please enter pin')
    }
    else if(genarateScreen.value === matcherScreen.value){
        alert('ok')
    }else if(genarateScreen.value === '' ){
        alert('Please generate pin first')
    }
    else{
        alert('wrong')
        matcherScreen.value = '';
    }
})