const form = document.getElementById('todo-form')
const input = document.getElementById('todo-input')
const list = document.getElementById('todo-list')
const themeToggle = document.getElementById('theme-toggle')
const htmlElement = document.documentElement

function initTheme() {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    applyTheme(savedTheme)
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(prefersDark ? 'dark' : 'light')
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme')
    themeToggle.querySelector('.theme-icon').textContent = '☀️'
  } else {
    document.body.classList.remove('dark-theme')
    themeToggle.querySelector('.theme-icon').textContent = '🌙'
  }
  localStorage.setItem('theme', theme)
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark-theme')
  applyTheme(isDark ? 'light' : 'dark')
}

themeToggle.addEventListener('click', toggleTheme)

initTheme()

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
