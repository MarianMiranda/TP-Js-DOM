const btn = document.querySelector("[data-form-btn]");
console.log(btn);

const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
};

btn.addEventListener("click", "createTask")




//necesitamos un "listener" (Saber que hizo click)
//arrow functions o funciones anonimas

/*btn.addEventListener("click", (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});*/

