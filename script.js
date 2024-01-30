const cursor = document.querySelector('.cursor') // to fix the hammer image to the cursor: defined a variable cursor and assigned it to the class .cursor in the html file 

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