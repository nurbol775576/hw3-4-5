import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import './style.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')): []);
  const [todolist, setTodolist] = useState([]);
  const [status, setStatus] = useState('all');

  const deleteTodo = (id) => {
    setData(data.filter(item => {
      return item.id !== id
    }))
  }

  const clearCompleted = () => {
    setData(data.map(item => {
      if (item.completed) {
        return {
          ...item,
          deleted: true
        }
      } else {
        return item
      }
    }))
  }

  const correctTodo = (text, id) => {
    if (text.trim() !== '') setData(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          text: text.trim(),
          correct: false
        }
      } else {
        return item
      }

    }))
  }

 
  const cartFunc = (select) => { 
    switch(select) {
      case 'delete': {
        setData(data.filter(item => {
          return !item.deleted
        }));
        break
      }
      case 'restore': {
        setData(data.map(item  =>  {
          return{
            ...item,
            deleted: false
        }
          }))
        break
      }
  }
  }


  const setKey = (key, id) => {
    setData(data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          [key]: !item[key]
        }
      } else {
        return {
          ...item,
          correct: false
        }
      }
    }))
  }

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(data));
    switch (status) {
      case 'all': {
        setTodolist(data.filter(item => {
          return !item.deleted
        }));
        break
      }

      case 'completed': {
        setTodolist(data.filter(item => {
          return !item.deleted && item.completed
        }));
        break
      }

      case 'active': {
        setTodolist(data.filter(item => {
          return !item.deleted && !item.completed
        }))
        break
      }

      case 'cart': {
        setTodolist(data.filter(item => {
          return item.deleted
        }))
        break
      }

    }

  }, [data, status])
  return (
    <div className="wrapper">
      <Header  status={status}  data={data} setData={setData} />
      <Main   cartFunc={cartFunc} correctTodo={correctTodo} deleteTodo={deleteTodo} status={status} setKey={setKey} todolist={todolist} />
      <Footer clearCompleted={clearCompleted} status={status} setStatus={setStatus} todolist={todolist} />
    </div>
  );
}

export default App;