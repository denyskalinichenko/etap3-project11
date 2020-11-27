const spanText = document.querySelector('.text');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, neque quidem labore nisi vitae beatae excepturi quae fugiat temporibus illo, pariatur culpa eaque minima! Amet aspernatur consequuntur reprehenderit repudiandae culpa! End:)'

let indexText = 0;
const time = 40;

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) {
        clearInterval(indexTyping);
    }
}

const indexTyping = setInterval(addLetter, time);