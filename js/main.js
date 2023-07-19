document.querySelector('#play').addEventListener('click', runcheck);




function randomd(){
    let result = Math.random();
    if (result < .33) {
        return('red');
        
    }else if(result < .66){
        return('pink');
    }else{
        return('yellow');
    }

}

function runcheck(){
    let userchoice = String(document.querySelector('#choice').value).toLowerCase();
 
    let botchoice = randomd();
    if ((userchoice === 'red' && botchoice === 'yellow') || (userchoice === 'pink' && botchoice === 'red') || (userchoice === 'yellow' && botchoice === 'pink') ) {
        //console.log('win');
        document.querySelector('#check').innerHTML = `You Win... Congratulation!`;
        //document.querySelector('#bott').innerText = result;
        document.querySelector('body').style.backgroundColor = 'green';
    }else if(userchoice === botchoice){
       // console.log('tied');
        document.querySelector('#check').innerHTML = `you tied... try again`
        //document.querySelector('#bott').innerText = result;
        document.querySelector('body').style.backgroundColor = 'yellow';
    }else{
        //console.log('lose');
        document.querySelector('#check').innerHTML = `You lose!`
        //document.querySelector('#bott').innerText = result;
        document.querySelector('body').style.backgroundColor = 'red';
    }
}
checkWin()
