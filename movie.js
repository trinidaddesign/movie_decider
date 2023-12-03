//home buttons
const chooseBtn = document.querySelector('.random_movie_button')
const helpBtn = document.querySelector('.help_button')
const libraryBtn = document.querySelector('.library_button')
//random movie screen
const movieDis = document.querySelector('#movie_div')
const thanksBtn = document.querySelector('.thanks')
const tryAgain = document.querySelector('.choose_again')
//form screen
const form = document.querySelector('form')
const formElm = document.querySelector('#form_div')
const pickThreeText = document.querySelector('[form-choose-three-text]')
const submitBtn = document.querySelector('.submit_button')
const formCloseBtn = document.querySelector('.form_close_button')
//library screen
const libraryElm = document.querySelector('#library_div')
const libraryCloseBtn = document.querySelector('.library_close_button')
const addMovieBtn = document.querySelector('.add_movie')
const tbody = document.querySelector('.tbody')
//Dialog modal
const dialog = document.querySelector('dialog')
const subMovieBtn = document.querySelector('.submit_movie')
const closeDialogBtn = document.querySelector('.close_dialog')


const libraryArray = [
    'The Thing', 'Prince Of Darkness', 'Into The Mouth Of Madness',
    'The Stuff', 'Nightmare On elm Street', ' The Void', 'Halloween 3',
    'Re-Animator', 'An American Werewolf In london'

]

function pickAtRandom() {
    const randomMovieText = document.querySelector('[random-movie-result-display]')
    const randomIndex = Math.floor(Math.random() * libraryArray.length)
    const answer = libraryArray[randomIndex]
    console.log(answer)
    randomMovieText.innerText = answer
}

function pickAgain() {
    const randomMovieText = document.querySelector('[random-movie-result-display]')
    randomMovieText.innerText = ''
    const randomIndex = Math.floor(Math.random() * libraryArray.length)
    const answer = libraryArray[randomIndex]
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

/*class Movie {
    constructor(title, director, runtTime) {
        this.title = title
        this.director = director
        this.runTime = runTime
    }

    addMovie(){
        let title = 
    }
}*/


//event listeners

//for the decide for me section
//opens the div and displays random movie
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

formCloseBtn.addEventListener('click', () =>{
    formElm.classList.remove('show')
    form.reset()
    pickThreeText.innerText = ''
})

//library
libraryBtn.addEventListener('click', () => {
    libraryElm.classList.add('show')
})

libraryCloseBtn.addEventListener('click', () => {
    libraryElm.classList.remove('show')
})

//library modal
addMovieBtn.addEventListener('click', () => {
    dialog.showModal()
})

closeDialogBtn.addEventListener('click', ()=> {
    dialog.close()
})