import React, { useState, useEffect } from 'react';

const Home = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const getData = async () => {
        try {
            const res = await fetch('http://localhost:8000/todos');
            const data = await res.json();
            setTodos(data);
        } catch (error) {
            console.log(error);
        }
    }

    const addData = async () => {
        const newTodo = {
            title: input,
            status: false
        };
        try {
            const res = await fetch('http://localhost:8000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            });
            getData();
            return res.json();
        } catch (error) {
            console.log(error);
        }
    }

    const patchData = (id, status) => {
        const updatedTodo = {
            status: !status
        };
        fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
            .then(() => {
                getData();
                console.log('Updated');
            })
            .catch(() => {
                console.log('Error');
            });
    }

    const deletetodo = (id) => {
      fetch(`http://localhost:8000/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(() => {
            getData();
            console.log('deleted');
        })
        .catch(() => {
            console.log('Error');
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type='text'
                placeholder='Enter todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={addData}>Submit</button>
            <h1>Lists</h1>
            <div>
                {todos?.map((item) => (
                    <div key={item.id} className='todocard'>
                        <h3>{item.title}</h3>
                        <p>{item.status ? 'Completed' : 'Pending'}</p>
                        <button onClick={() => patchData(item.id, item.status)}>Toggle</button>
                        <button onClick={() => deletetodo(item.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
