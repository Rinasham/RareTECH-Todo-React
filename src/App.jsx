import './App.css';

export const App = () => {
  return(
  <div className="App">
    <h1 className="title">Todo List</h1>
    <section className="common-area">
      <h2 className="add-title">ADD TODO</h2>
      <input type="text" />
    </section>
    <section className="common-area">
      <ul className="todo-list">
        <li className="todo">
          <span className="todo-task">Task 1</span>
          <i className="far fa-trash-alt"></i>
        </li>
        <li className="todo">
          <span className="todo-task">Task 2</span>
          <i className="far fa-trash-alt"></i>
        </li>
      </ul>
    </section>
  </div>
  )
};

