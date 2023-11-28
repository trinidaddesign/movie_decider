const chooseBtn = document.querySelector('.decide_button')
const helpBtn = document.querySelector('.help_button')
const closeBtn = document.querySelector('.closeBtn')
const formElm = document.querySelector('#form_div')
const movieDis = document.querySelector('#movie_display')
const movieText = document.querySelector('[movie-result-display]')
const thanksBtn = document.querySelector('.thanks')
const tryAgain = document.querySelector('.choose_again')

const randArray = [
    'The Thing', 'Prince Of Darkness', 'Into The Mouth Of Madness',
    'The Stuff', 'Nightmare On elm Street', ' The Void', 'Halloween 3',
    'Re-Animator', 'An American Werewolf In london'
]

chooseBtn.addEventListener('click', ()=> {
    console.log('clicked')
    movieDis.classList.add('show')
    //picks from array of stored movies and displays it
    pickAtRandom()
})

tryAgain.addEventListener('click', () => {
    console.log('clicked')
    pickAgain()
})

function pickAtRandom() {
    const randomIndex = Math.floor(Math.random() * randArray.length)
    const answer = randArray[randomIndex]
    console.log(answer)
    movieText.innerText = answer
}

function pickAgain() {
    movieText.innerText = ''
    const randomIndex = Math.floor(Math.random() * randArray.length)
    const answer = randArray[randomIndex]
    console.log(answer)
    movieText.innerText = answer
}




//open and close event listeners
thanksBtn.addEventListener('click', () => {
    console.log('clicked')
    movieDis.classList.remove('show')
})

helpBtn.addEventListener('click', () => {
    formElm.classList.add('show')
    
})

closeBtn.addEventListener('click', () =>{
    formElm.classList.remove('show')
})