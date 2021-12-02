document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
  handleTodo(e.target.new_description.value)
})
})

function handleTodo(todo){
  let li = document.createElement('li');
  let button = document.createElement('button');
  button.addEventListener('click', handleDelete)
  button.textContent = " ♥"
  li.textContent = `${todo} `
  li.appendChild(button)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}