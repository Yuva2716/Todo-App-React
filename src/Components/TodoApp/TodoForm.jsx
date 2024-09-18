import React, { useEffect, useRef, useState } from 'react'

const TodoForm = (props) => {
    const [input,setInput] = useState(props.edit ? props.edit.value : '')
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })

    const handleChange = (e) =>{
        setInput(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,            
        })
        setInput('')
    }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
            <>
            <input 
                type="text"
                placeholder='Update your item'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef} 
                className='todo-input edit'/>
            
            <button onClick={handleSubmit} className='todo-button edit'>Update</button>
            </>            
        
        ):(
            <>
                <input 
                    type="text"
                    placeholder='Add a Task'
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                    ref={inputRef} />
            <button onClick={handleSubmit} className='todo-button'>Add Todos</button>
            </>

        )}
    </form>
  )
}

export default TodoForm