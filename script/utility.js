function hideElementById(elementId){
    const element = document.getElementById('home-screen');
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById('play-ground');
    element.classList.remove('hidden');
}

function setBackgroundColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

// recap random alphabet 
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


// function getRandomAlphabet(){
//     // get or create an alphabet array
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabets = alphabetString.split('');
//     // console.log(alphabets);

//     // get a random index between 0 - 25
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
    

//     const alphabet = alphabets[index]; 
//     console.log(index, alphabet);
//     return alphabet;
// }