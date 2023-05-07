import React, { Component } from "react";

export default class App extends Component {


  //리스트 데이터_수정
  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: false,
      },
      {
        id: "2",
        title: "밥먹기",
        completed: false,
      },
    ],
    value: "",
  };


  //  x 버튼 스타일링
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  }

  // 리스트 스타일링 (추후 변경되어서)
  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",
    };
  };


  //x버튼 눌렀을때
  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({todoData: newTodoData});
  };

  //글 입력 할때 입력칸에 들어가게
  handleChange = (e) => {
    this.setState({ value: e.target.value});
  }

  //서밋
  handleSubmit = (e) => {

    //페이지 리로드 되는것을 막아줌
    e.preventDefault();

    //새로운 할일 데이터
    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    //원래 있던 할일에 새로운 할일 데이터 더해주기 & 입력란 글씨 지우기
    this.setState({todoData: [...this.state.todoData, newTodo], value:"" })
  };

  //체크박스 완료 표시하기
  handleCompleChange = (id) => {
    let newToData = this.state.todoData.map((data) => {
      if(data.id  === id){
        data.completed = !data.completed;
      } 
      return data;
    });
    this.setState({ toData: newToData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>

            {this.state.todoData.map((data) => (
              <div style={this.listStyle(data.completed)} key={data.id}>
                <p>
                  <input type="checkbox"
                    onChange={ () => this.handleCompleChange(data.id) }
                    defaultChecked={false}
                  />{" "}
                  {data.title}
                  <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}> X </button>
                </p>
              </div>
            ))}


            <form style={{ display : 'flex' }} onSubmit={this.handleSubmit}>
              <input 
                type="text"
                name="value"
                style={{ flex: '10', padding: '5px' }}
                placeholder="해야 할 일을 입력 하세요."
                value={this.state.value}
                onChange={this.handleChange}
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

}