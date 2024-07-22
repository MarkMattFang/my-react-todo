import { MdDelete } from "react-icons/md";
import EditForm from "./EditForm";

function Todo({ todo, deleteTodo, toggleCompleted, toggleIsEditing, editTodo }) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo}/>
    ): (
     <div className={'todo ${todo.isCompleted ? "completed" : ""}'}>
      <p onclick={() => {toggleCompleted(todo.id)}}>{todo.content}</p>
      <div>
        <MdEdit onclick={() => {toggleIsEditing(todo.id)}} 
        style={{ cursor: "pointer" }} />
        <MdDelete onclick={() => {T(todo.id)}} 
        style={{ cursor: "pointer",marginLeft: '5px' }} />
      </div>
    </div>
  );
}

export default Todo;
