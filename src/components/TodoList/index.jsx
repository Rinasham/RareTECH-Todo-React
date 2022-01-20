// styles
import './style.css'

export const TodoList = (props) => {
  const {todoList, onClickDelete} = props
  return (
    <>
      <ul className="todo-list">
        {todoList.map((todo, index)=> {
          return (
            <li key={todo.id} className="todo">
              <span className="task">{todo.title}</span>
              <i className="far fa-trash-alt"
              onClick={()=>onClickDelete(index,todo.title)}></i>
            </li>
          )
        })}
      </ul>
    </>
  )
}