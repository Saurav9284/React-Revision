import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [sort, setSort] = useState('');
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos');

    useEffect(() => {
        getData();
    }, [url]); 

    const getData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(url);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
        updateUrl(e.target.value, sort);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
        updateUrl(status, e.target.value);
    };

    const updateUrl = (status, sort) => {
        let newUrl = 'https://jsonplaceholder.typicode.com/todos';
        if (status !== '') {
            newUrl += `?completed=${status}`;
        }
        if (sort !== '') {
            newUrl += `&_sort=id&_order=${sort}`;
        }
        setUrl(newUrl);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <label>Filter by Status</label>
            <select onChange={handleStatusChange} value={status}>
                <option value={''}>Select</option>
                <option value={true}>Completed</option>
                <option value={false}>Not Completed</option>
            </select>
            <label>Sort</label>
            <select onChange={handleSortChange} value={sort}>
                <option value={''}>Select</option>
                <option value={'asc'}>Increasing</option>
                <option value={'desc'}>Decreasing</option>
            </select>
            {loading ? (
                <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' alt='Loading...' />
            ) : (
                <div>
                    {data.map((item) => (
                        <div key={item.id} style={{ padding: 10, border: '1px solid black', margin: 10, textAlign: 'center' }}>
                            <h3>{item.id}</h3>
                            <h3>{item.title}</h3>
                            <p>{item.completed ? 'true' : 'false'}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
