import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

const tarea = new Todo('aprender js!!!');

todoList.nuevoTodo( tarea );


todoList.todos.forEach( todo => { 
    crearTodoHtml( todo )
    
});

console.log( todoList );