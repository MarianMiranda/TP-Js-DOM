const btn = document.querySelector("[data-form-btn]");
console.log(btn);

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-task]");
    const task = document.createElement("li");
    task.classList.add("card"); //agregar clase

    input.value = "";
    const content = `<div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    task.innerHTML = content;

    list.appendChild(task); //agregar hijo

    console.log(content);
};

btn.addEventListener("click", createTask);




//necesitamos un "listener" (Saber que hizo click)
//arrow functions o funciones anonimas

/*btn.addEventListener("click", (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});*/

