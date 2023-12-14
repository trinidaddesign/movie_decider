//home buttons
const chooseBtn = document.querySelector('.random_movie_button')
const helpBtn = document.querySelector('.help_button')
const libraryBtn = document.querySelector('.library_button')
//random movie screen
const movieDis = document.querySelector('#movie_div')
const thanksBtn = document.querySelector('.thanks')
const tryAgain = document.querySelector('.choose_again')
const movieDisplayDiv = document.querySelector('#movie-display')
//help me decide screen
const form = document.querySelector('form')
const formElm = document.querySelector('#form_div')
const pickThreeText = document.querySelector('[form-choose-three-text]')
const submitBtn = document.querySelector('.submit_button')
const formCloseBtn = document.querySelector('.form_close_button')
const formDisplayDiv = document.querySelector('#form-display')
//library screen
const libraryElm = document.querySelector('#library_div')
const libraryCloseBtn = document.querySelector('.library_close_button')
const addMovieBtn = document.querySelector('.add_movie')
const tbody = document.querySelector('.tbody')
const x = document.querySelector('#delete_button')
//Dialog modal
const dialog = document.querySelector('dialog')
const dialogForm = document.querySelector('.modal_form')
const subMovieBtn = document.querySelector('.submit_movie')
const closeDialogBtn = document.querySelector('.close_dialog')
const libTitle = document.querySelector('#library_title')
const libDirect = document.querySelector('#library_director')
const libRunTime = document.querySelector('#run_time')


const libraryArray = []
const randLibArray = []


function pickAtRandom() {
    const randomMovieText = document.querySelector('[random-movie-result-display]')
    const randomIndex = Math.floor(Math.random() * randLibArray.length)
    const answer = randLibArray[randomIndex]
    console.log(answer)
    randomMovieText.innerText = answer
}

function pickAgain() {
    const randomMovieText = document.querySelector('[random-movie-result-display]')
    randomMovieText.innerText = ''
    const randomIndex = Math.floor(Math.random() * randLibArray.length)
    const answer = randLibArray[randomIndex]
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

function Movie(title, director, runTime) {
        this.title = title
        this.director = director
        this.runTime = runTime
}

function addMovie(x, y, z){
    let newMovie = new Movie(x, y, z)
    libraryArray.push(newMovie)
    randLibArray.push(newMovie.title)
}

function displayMovie(){
        tbody.innerHTML = ''
        libraryArray.forEach((movie) => {
            const lastMovie = libraryArray[libraryArray.length - 1]

            const movieHtml = 
            `
            <tr>
            <td onClick="deleteWarning(this)" scope="row">${movie.title}</td>
            <td>${movie.director}</td>
            <td>${movie.runTime}</td>
            </tr>
            `
        if(movie === lastMovie){
            tbody.insertAdjacentHTML("beforebegin",movieHtml)
        }//closes if
    })//closes for each
}//closes displayMovie

function removeMovie(movie){
    const i = movie.parentNode.parentNode
    i.parentNode.removeChild(i)
}

function deleteWarning(x){
    if(confirm('Are you sure you want to delete this movie?')){
        removeMovie(x)
    }
}


//event listeners

//for the decide for me section

//opens the div and displays random movie
chooseBtn.addEventListener('click', ()=> {
    movieDis.classList.add('show')
    //picks from array of stored movies and displays it
    pickAtRandom()
    movieDisplayDiv.classList.add('show')

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
    formDisplayDiv.classList.add('show')
    
})

formCloseBtn.addEventListener('click', () =>{
    formElm.classList.remove('show')
    formDisplayDiv.classList.remove('show')
    form.reset()
    pickThreeText.innerText = ''
})

//library section

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

subMovieBtn.addEventListener('click', () => {
    addMovie(libTitle.value,libDirect.value,libRunTime.value)
    displayMovie()
    dialog.close()
    dialogForm.reset()
})

