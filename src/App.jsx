import './App.css';
import React from 'react';
// 定数データ
import {INIT_TODOS} from './constant/data';

// コンポーネント
import {AddTodo} from './components/AddTodo';
import { TodoList } from './components/TodoList';





export const App = () => {
  /**
   * State
   */
  const [inputTodo, setInputTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState(INIT_TODOS);
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
  }}

  const onClickDelete= (index,title) => {
    if(window.confirm(`Delete ${title} Task?`)){
      const newTodoArr = [...todoList];
      newTodoArr.splice(index, 1);
      setTodoList(newTodoArr);
    }
  }

  return(
    <div className="App">
      <h1 className="title">Todo List</h1>
      <section className="common-area">
        <AddTodo
          inputTodo={inputTodo}
          todoTextValue={onChangeTodoText}
          addTodo={onKeyDownAdd}
        />
      </section>
      <section className="common-area">
        <TodoList
          todoList={todoList}
          onClickDelete={onClickDelete}
        />
      </section>
    </div>
  )
};

