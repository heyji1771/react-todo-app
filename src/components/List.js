import React from 'react'

export default function List({ todoData, setTodoData }) {

  //  x 버튼 스타일링
  const  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

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
    <div>
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
    </div>
  )
}
