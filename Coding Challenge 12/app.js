let taskInput = document.querySelector('.taskInput')

let addButton =  document.querySelector('.addtask')

addButton.addEventListener('click', addButtonClicked)

function addButtonClicked(){
    let todoItem = taskInput.value 
    let listItem = document.createElement('li')
    let listItemText = document.createElement('h5')
    listItemText.innerHTML = todoItem
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    listItem.appendChild(listItemText)

    let unorderedList = document.querySelector('.todo-list')
    
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Done'
    deleteButton.className = 'btn btn-danger'

    deleteButton.addEventListener('click', () => {
        listItem.remove();
    })

    listItem.appendChild(deleteButton)

    unorderedList.appendChild(listItem)
    taskInput.value = " "
    console.log(todoItem)
}