import TodoItem from './TodoItem';
import { useTodosStore } from '../store';

const TodosList = () => {
  const todos = useTodosStore((state) => state.todos);
  const handleChange = useTodosStore((state) => state.handleChange);
  const setUpdate = useTodosStore((state) => state.setUpdate);
  const delTodo = useTodosStore((state) => state.delTodo);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          itemProp={todo}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;
