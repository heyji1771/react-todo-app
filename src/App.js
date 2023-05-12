import React, {useState} from "react";
import "./App.css";
import List from './components/List';
import Form from './components/Form';

export default function App(){

  //리스트 데이터
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");




  //서밋
  const handleSubmit = (e) => {
    //페이지 리로드 되는것을 막아줌
    e.preventDefault();

    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //원래 있던 할일에 새로운 할일 데이터 더해주기 & 입력란 글씨 지우기
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
          </h1>
          <List todoData={todoData} setTodoData={setTodoData}/>

          <Form value={value} setValue={setValue} handleSubmit={handleSubmit}/>
        
      </div>
    </div>
  )


}