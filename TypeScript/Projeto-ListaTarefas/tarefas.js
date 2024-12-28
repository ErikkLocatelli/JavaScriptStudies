const form = document.querySelector("#todo-form")
const taskTitleInput = document.querySelector("#task-title-input")
const botaoAdd = document.querySelector("#add-task-button")
const lista = document.querySelector("#todo-list") 

let tarefas = []; 

form.addEventListener("submit", (carregamento) => {
    carregamento.preventDefault() //empede o comportamento padrão de um formulário 

    const taskTitle = taskTitleInput.value // armazena o "valor" guardado dentro do input que recebe as tarefas\
    if (taskTitle.length <= 0) {
        alert("Por favor, cadastre uma tarefa"); 
        return; // Para de executar a função
    }

    tarefas.push({
        title: taskTitle, 
        done: false, 
    }) 
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    
    // Salvando as tarefas no array 

    // Adicionando as tarefas no array de tasks 
    const li = document.createElement('li') // Criando o elemento 
    
    const remove = document.createElement("button") // criando o botão de remover
    remove.textContent = "Remover" // dando seu valor 
    
    remove.addEventListener("click", (apagar)=>{
        let liToRemove = apagar.target.parentElement
        let tittleToRemove = liToRemove.querySelector("span").textContent

        tarefas = tarefas.filter(t => t.titlle !== tittleToRemove) 


        lista.removeChild(liToRemove)
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    })

    const checkbox = document.createElement("input") // criando o checkbox
    checkbox.type = "checkbox" // dizendo seu tipo 
    checkbox.addEventListener("change", (event) => {
        const liToToggle = event.target.parentElement; 
        const spanToToggle = liToToggle.querySelector('span')

        const done = event.target.checked
        if(done) {
            spanToToggle.style.textDecorantion = "line-through"
        } else {
            spanToToggle.style.textDecorantion = "none"
        }

        tarefas.map(t => {
            if(t.title === spanToToggle.textContent) {
                return {
                    title: t.title, 
                    done: !t.done,
                }
            } 
            return t; 
        })
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    })

    
    const span = document.createElement("span") // botão span 
    span.textContent = taskTitle; // aqui ele guarda o valor 
   
    lista.appendChild(li) // aparecendo na lista 
    li.appendChild(checkbox) // adicionando os elementos no LI 
    li.appendChild(span)
    li.appendChild(remove)

    taskTitleInput.value = ''

})