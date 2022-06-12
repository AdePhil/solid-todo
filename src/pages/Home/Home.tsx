import { createSignal, For } from "solid-js";
import styles from "./home.module.scss";
import { uid } from "uid";
import AddTodo from "./components/AddTodo/AddTodo";
import { Todo } from "./types";


const Home = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = createSignal<Todo | undefined>();

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos()]);
  }

  const removeTodo = (id: string) => {
    const remainingTodos = todos().filter(todo => todo.id !== id);
    setTodos(remainingTodos);
  }

  const editTodo = (todo: Todo) => {
    const newTodos = todos().map(t => {
      if(t.id === todo.id) {
        return todo;
      }
      return t;
    })
    setTodos(newTodos);
    setCurrentTodo(undefined);
  }

  return (
    <div class={styles.home}>
      <div class={styles.header} />
      <div class={styles.listContainer}>
        <h1 class={styles.heading}>Solid Todolist</h1>
        <AddTodo addTodo={addTodo} todo={currentTodo()} editTodo={editTodo} />
        <ul class={styles.list}>
          <For each={todos()}>
            {(todo, i) => {
              const isEditingTodo = () => currentTodo()?.id === todo.id;
              return (
                <li class={styles.listItem}>
                  <p>{todo.value}</p>
                  <div class={styles.listButton}>
                    <button onClick={() => setCurrentTodo(todo)}>{isEditingTodo() ? 'Editing' : 'Edit'}</button>
                    <button onClick={() => removeTodo(todo.id)}>Delete</button>
                  </div>
                </li>
              );
            }}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default Home;
