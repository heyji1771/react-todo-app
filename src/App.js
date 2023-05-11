import React, {useState} from "react";
import "./App.css";

export default function App(){

  //리스트 데이터
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  //  x 버튼 스타일링
  const  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }

  // 리스트 스타일링 (추후 변경되어서)
  const  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",
    };
  };


  //x버튼 눌렀을때
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  //글 입력 할때 입력칸에 들어가게
  const handleChange = (e) => {
    setValue(e.target.value);
  }

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

  //체크박스 완료 표시하기
  const handleCompleChange = (id) => {
    let newToData = todoData.map((data) => {
      if(data.id  === id){
        data.completed = !data.completed;
      } 
      return data;
    });
    setTodoData(newToData);
  }


  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>

          {todoData.map((data) => (
            <div style={listStyle(data.completed)} key={data.id}>
              <p>
                <input type="checkbox"
                  onChange={ () => handleCompleChange(data.id) }
                  defaultChecked={false}
                />{" "}
                {data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}> X </button>
              </p>
            </div>
          ))}


          <form style={{ display : 'flex' }} onSubmit={handleSubmit}>
            <input 
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력 하세요."
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex:'1' }}
            />
          </form>

        </div>
      </div>
    </div>
  )


}