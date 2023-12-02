const chooseBtn = document.querySelector('.decide_button')
const helpBtn = document.querySelector('.help_button')
const closeBtn = document.querySelector('.close_button')
const formElm = document.querySelector('#form_div')
const movieDis = document.querySelector('#movie_display')
const randomMovieText = document.querySelector('[random-movie-result-display]')
const pickThreeText = document.querySelector('[form-choose-three-text]')
const thanksBtn = document.querySelector('.thanks')
const tryAgain = document.querySelector('.choose_again')
const submitBtn = document.querySelector('.submit_button')
const form = document.querySelector('form')


const randArray = [
    'The Thing', 'Prince Of Darkness', 'Into The Mouth Of Madness',
    'The Stuff', 'Nightmare On elm Street', ' The Void', 'Halloween 3',
    'Re-Animator', 'An American Werewolf In london'
]



function pickAtRandom() {
    const randomIndex = Math.floor(Math.random() * randArray.length)
    const answer = randArray[randomIndex]
    console.log(answer)
    randomMovieText.innerText = answer
}

function pickAgain() {
    randomMovieText.innerText = ''
    const randomIndex = Math.floor(Math.random() * randArray.length)
    const answer = randArray[randomIndex]
    console.log(answer)
    randomMovieText.innerText = answer
}



function helpMeDecide(){
    const movieOneVal = document.querySelector('#movie_1').value
    const movieTwoVal = document.querySelector('#movie_2').value
    const movieThreeVal = document.querySelector('#movie_3').value
    const tempArray = []

    tempArray.push(movieOneVal,movieTwoVal,movieThreeVal)
    console.log(tempArray)

    const randomIndex = Math.floor(Math.random() * tempArray.length)
    const answer = tempArray[randomIndex]
    console.log(answer)
    return pickThreeText.innerText = answer
}



//event listeners

//for the decide for me section
//opens the div and displays rando movie
chooseBtn.addEventListener('click', ()=> {
    movieDis.classList.add('show')
    //picks from array of stored movies and displays it
    pickAtRandom()
})

thanksBtn.addEventListener('click', () => {
    movieDis.classList.remove('show')
})

tryAgain.addEventListener('click', () => {
    pickAgain()
})

//help me decide section
//opens the div
helpBtn.addEventListener('click', () => {
    formElm.classList.add('show')
})
//takes 3 movies and returns a choice
submitBtn.addEventListener('click', () => {
    helpMeDecide()
    //formElm.classList.remove('show')
})

closeBtn.addEventListener('click', () =>{
    formElm.classList.remove('show')
    form.reset()
    pickThreeText.innerText = ''
})