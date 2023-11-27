const helpBtn = document.querySelector('.helpBtn')
const closeBtn = document.querySelector('.closeBtn')
const dialog = document.querySelector('dialog')


helpBtn.addEventListener('click', () => {
    dialog.showModal()
    //dialog.classList.add('.show')
})

closeBtn.addEventListener('click', () =>{
    dialog.close()
})