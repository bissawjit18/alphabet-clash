// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
    
//     const playground = document.getElementById('play-ground');
//     playground.classList.remove('hidden');
// }

function continueGame(){
    // step - 1: generate a random alphabet 
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet', alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    // set background color 
    setBackgroundColorById(alphabet);
}
function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

