// styles
import './style.css'

export const AddTodo = (props) => {
  const {inputTodo, todoTextValue, addTodo} = props
  return (
      <>
        <h2 className="addTitle">ADD TODO</h2>
        <input type="text" placeholder="NEW TODO"
          value={inputTodo} onChange={todoTextValue}
          onKeyDown={addTodo}
          />
      </>
  )
}