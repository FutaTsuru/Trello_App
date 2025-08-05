import React, { useRef } from 'react'
import './InputField.css';
import GamepadIcon from '@mui/icons-material/Gamepad';

const InputField = ({ tasks, setTasks}) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        const inputValue = inputRef.current.value;
        if (inputValue.trim() === '') {
            alert('タスクを入力してください');
            return;
        }
        setTasks(prevTasks => [...prevTasks, {id: prevTasks.length + 1, title: inputValue, completed: false}]);
        inputRef.current.value = ''; // Clear the input field after adding the task
    }
  return (
    <div className="inputField">
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}><GamepadIcon /></button>
    </div>
  )
}

export default InputField