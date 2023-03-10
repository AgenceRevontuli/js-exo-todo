import { TodoList } from './components/TodoList.js'
import { fetchJSON } from './functions/api.js'
import { createElement } from './functions/dom.js'

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch(e) {
    const alertError = createElement('div', {
        class: 'alert alert-danger m-2',
        role: 'alert'
    })
    alertError.innerText = 'Impossible de charger les éléments'
    document.body.prepend(alertError)
    console.error(e)
}
