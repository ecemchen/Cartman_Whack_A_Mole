const cursor = document.querySelector('.cursor') // to fix the hammer image to the cursor: defined a variable cursor and assigned it to the class .cursor in the html file 
const holes = [...document.querySelectorAll('.hole')] // so that i dont need to put img src to every hole div in html, i make an array of all the holes
const scoreEl = document.querySelector('.score span') // to show the score in the html file, i defined a variable scoreEl and assigned it to the class .score in the html file
let score = 0

const sound = new Audio('assets/smash.mp3') // to add the sound when the cartman appears, i defined a variable sound and assigned it to the audio file


function run() {
    const i = Math.floor(Math.random() * holes.length) // to get a random number between 0 and 8 (holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('cartman')
    img.src = 'assets/cartman.png'

    img.addEventListener('click', () => { // this is the hardest and compl eventlistener here
        score++ // how many the score will increase in each click
        sound.play() // the sound will player clicks on cartman
        scoreEl.textContent = score
        img.src = 'assets/cartman_whacked.png'
        clearTimeout(timer) 
        setTimeout (() => {
            hole.removeChild(img)
            run()
    
    },500)
    })

    hole.appendChild(img)

    timer = setTimeout (() => {
        hole.removeChild(img)
        run()

},1000) // 1500 is the time in milliseconds that the cartman will stay on the screen and if the player cant hit then cant get point
}
run()

window.addEventListener('mousemove', e => { //added an event listener here so every time mouse moves it will call the function e and func e defined below)
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'

})

//"mousedown" the common way to addEventListener to leftclick
//////////////// ASK ABOUT THIS: What about the right click, I found this https://javascript.plainenglish.io/how-to-handle-right-clicks-with-javascript-86d35714ce33 //////////////////////////

window.addEventListener('mousedown', () => { //added an event listener here so every time mouse clicks it will call the function e and func e defined below)
    cursor.classList.add('active')
})

//So this is when we click and button goes down, hammer rotates but it stays like that so we should add another event listener for making the hammer straight again when we release the mouse

window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})

// NEXT STEP: ADDING THE RANDOMLY CREATED MOLES
//SO GO TO HTML AND ADD THE CARTMAN_HITLER_PNG after the 1st div class hole