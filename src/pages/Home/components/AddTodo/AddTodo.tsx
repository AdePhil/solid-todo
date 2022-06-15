import { createEffect, createSignal } from "solid-js";
import { uid } from "uid";
import { Todo } from "../../types";
import styles from "./addtodo.module.scss";

interface AddTodoProps {
  addTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  todo?: Todo;
}
const AddTodo = (props: AddTodoProps) => {
  const { addTodo, editTodo } = props;
  const [text, setText] = createSignal<string>("");
  const isEditing = () => !!props.todo?.id;

  createEffect(() => {
    setText(props.todo?.value || "");
  });

  createEffect(() => {
    if (isEditing()) {
      document.title = "Editing Todo";
    }
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const todo = {
      id: !!props.todo ? props.todo.id : uid(),
      value: text(),
    };
    setText("");
    if (isEditing()) {
      editTodo(todo);
      return;
    }
    addTodo(todo);
  };
  return (
    <form class={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        class={styles.input}
        value={text()}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      <button type="submit" class={styles.addBtn}>
        Save
      </button>
    </form>
  );
};

export default AddTodo;
