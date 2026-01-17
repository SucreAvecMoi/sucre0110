import { Button, Checkbox, Input } from 'antd';
import React from 'react';
import axios from 'axios';

const Todo = () => {
    const [, setData] = React.useState();
    const [todoList, setTodoList] = React.useState([]);
    const [editItem, setEditItem] = React.useState(null);

    const onFetchData = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        // const jsonData = await response.json();
        // setData(JSON.stringify(jsonData));
        const remoteData = await axios.get('http://localhost:3001/todos/sucre');
        setData(JSON.stringify(remoteData.data));
        console.log(remoteData.data);
        setTodoList(remoteData.data);

    }

    const changeDateTest = async () => {
        let data = {
            id: 1,
            description: "修改项目报告",
            status: "pending",
            due_date: "2025-12-31"
        };

        const res = await axios.put("http://localhost:3001/todos/1", data);
        console.log(res.data);
    }

    const modifyStatus = async (event, todo) => {
        console.log(todo);
        let newStatus = todo.status === 'completed' ? 'pending' : 'completed';
        let data = {
            id: todo.id,
            description: todo.description,
            status: newStatus,
            due_date: new Date('' + todo.due_date).toISOString().split('T')[0]
        };
        const res = await axios.put("http://localhost:3001/todos/" + todo.id, data);
        onFetchData();
        console.log(res.data);
    };

    const onItemClick = (event, item) => {
        setEditItem(item);
        setTimeout(() => {
            const input = document.getElementById('input');
            console.log(input, item);
            if (input) {
                input.focus();
                input.value = item.description;
            }
        });
    }

    const editDescription = (event, todo) => {
        const currentValue = event.target.value;
        console.log(currentValue);
        const input = document.getElementById('input');
        input.value = currentValue;
    }
    
    const onEditBlur = (event, todo) => {
        // TODO 1 调用接口修改description
        
    }
    return (
        <div>
            <Button onClick={onFetchData}>Fetch data</Button>
            {todoList.map((todo) => {
                return <div key={todo.id} onClick={e=>onItemClick(e, todo)}>
                    {editItem === todo  && <Input id="input" onChange={e=> editDescription(e, todo)} onBlur={e=>onEditBlur(e, todo)}/>}
                    {editItem !== todo && todo.description} {todo.due_date} <Checkbox checked={todo.status === 'completed'} onChange={e => modifyStatus(e, todo)}>{todo.status}</Checkbox>
                </div>
            })}
            <Button onClick={changeDateTest}>Change Data Test</Button>
        </div>

    );
};

export default Todo;