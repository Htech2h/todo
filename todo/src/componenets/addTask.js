
import React, {useState} from 'react';
import './styles.css';

export default function AddTask(props){
    const [task, setTask] = useState({ todo: '', isComplete: false });

    function handleChange(e){
        const {value}= e.target;
        setTask({...task,todo:value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(task.todo){
            props.handleSubmit({...task,isComplete:false, id: Date.now() });
            setTask({todo:'',isComplete:false});
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input id='text' type='text' onChange={handleChange} value={task.todo}/>
            <input id='button' type='submit' value='Add' />
        </form>
        </>
    );
};