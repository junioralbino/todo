import React, { useState }  from 'react';
import { MdDelete } from 'react-icons/md';

import './App.css';

const App = () => {
  const ESCAPE_KEY = 13;
  const ENTER_KEY = 27;

  const initialTodos = [
    {id: 1, title: 'Estudar React', checked: false},
    {id: 2, title: 'Estudar Inglês', checked: true},
    {id: 3, title: 'Estudar Devops', checked: false},
  ];

  const [todos, ] = useState(initialTodos);
  const [value, setValue] = useState("");

  const erase = (event) => {
    setValue(event.target.value);
  }

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const submit = () => {
       console.log('submit', value);
       erase();
  }

  const onKeyDown = (event) => {
      if(event.which === ESCAPE_KEY){
           submit();
      }else if(event.which === ENTER_KEY){
            erase();
      }
  }

 return(
  <section id="app" className='container'>
      <header>
          <h1 className='title'>Todo</h1>
      </header>

      <section className='main'>
          <input  className='new-todo' placeholder='O que precisa ser feito ?'
          value={value} onChange={onChange} onKeyDown={onKeyDown} />

          <ul className='todo-list'>
            {
              todos.map((todo) => (
                  <li key={todo.id.toString()} >
                    <span className="todo">{todo.title}</span>
                    <button className="remove" type="button" ><MdDelete size={28}/></button>
                   </li>
              ))
            }
          </ul>
      </section>

  </section>
  );
}

export default App;
