import { useState } from 'react';
import { MdOutlineAddCircleOutline } from 'react-icons/Md';
import { useTodosStore } from '../store';

const InputTodo = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const addTodoItem = useTodosStore((state) => state.addTodoItem);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItem(title);
      setTitle('');
      setMessage('');
    } else {
      setMessage('Please add item.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form container-px">
        <input
          className="input-text"
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
        />
        <button type="submit" className="input-submit">
          <MdOutlineAddCircleOutline />
        </button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

export default InputTodo;
