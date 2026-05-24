const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const text = input.value.trim()
  if (!text) return
  addTodo(text)
  input.value = ''
  input.focus()
})

function addTodo(text){
  const li = document.createElement('li')
  li.className = 'todo-item'
  const span = document.createElement('span')
  span.className = 'todo-text'
  span.textContent = text
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = 'toggle-checkbox'
  checkbox.setAttribute('aria-label', 'Mark todo completed')
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed', checkbox.checked)
  })
  const btn = document.createElement('button')
  btn.className = 'delete-btn'
  btn.textContent = 'Delete'
  btn.addEventListener('click', () => li.remove())
  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(btn)
  list.appendChild(li)
}
