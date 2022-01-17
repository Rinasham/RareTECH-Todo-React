import './App.css';
import React from 'react';

const initTodo = [
  {
    id: 1,
    title: "Todo1",
  },
  {
    id: 2,
    title: "Todo2",
  }
]

export const App = () => {
  /**
   * State
   */
  const [inputTodo, setInputTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState(initTodo);
  const onChangeTodoText = (event) => setInputTodo(event.target.value);
  // idを設定
  const [uniqueId, setUniqueId] = React.useState(todoList.length);

  /**
   * 関数
   * @param {*} e
   * @param {*} inputTodo
   */
  const onKeyDownAdd = (e) => {
    if(e.key === "Enter" && inputTodo !== "") {
      const newId = uniqueId + 1
      e.preventDefault();
      const newTodoArr = [...todoList, {
        id: newId,
        title:inputTodo,
      }]
      setTodoList(newTodoArr);
      setInputTodo("");
      setUniqueId(newId)
      console.log(newTodoArr)
      console.log(todoList)
  }}

  const onClickDelete= (index) => {
    const newTodoArr = [...todoList];
    newTodoArr.splice(index, 1);
    setTodoList(newTodoArr);
  }

  return(
    <div className="App">
      <h1 className="title">Todo List</h1>
      <section className="common-area">
        <h2 className="addTitle">ADD TODO</h2>
        <input type="text" placeholder="NEW TODO"
          value={inputTodo} onChange={onChangeTodoText}
          onKeyDown={onKeyDownAdd}
          />
      </section>
      <section className="common-area">
        <ul className="todo-list">
          {todoList.map((todo, index)=> {
            return (
              <li key={todo.id} className="todo">
                <span className="task">{todo.title}</span>
                <i className="far fa-trash-alt"
                onClick={()=>onClickDelete(index)}></i>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
    )
};

