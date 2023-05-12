import React from 'react'

export default function Form({ value, setValue, handleSubmit} ) {

  //글 입력 할때 입력칸에 들어가게
  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
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
  )
}
