import React,{ useState }from 'react';
import PropTypes  from 'prop-types';

const NewTodo = ({ onNewTodo }) =>  {
  const [value, setValue] = useState("");

  const ESCAPE_KEY = 13;
  const ENTER_KEY = 27;

  const erase = (event) => {
    setValue("")
 }

 const onChange = (event) => {
   setValue(event.target.value)
 }

 const submit = () => {
  if(onNewTodo){
    onNewTodo(value);
    erase();
  }

 }

 const onKeyDown = (event) => {
     if(event.which === ESCAPE_KEY){
          submit();
     }else if(event.which === ENTER_KEY){
           erase();
     }
 }

  return (
  <input  className='new-todo'
          placeholder='O que precisa ser feito ?'
          value={value} onChange={onChange}
          onKeyDown={onKeyDown}
   />

  );
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired
}

export default NewTodo
