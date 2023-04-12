import React, { useEffect, useState } from 'react'
import axios from 'axios';

// API endpoint 
// https://jsonplaceholder.typicode.com/posts

const Posts = () => {
    // loading state 
    const [loading, setLoading] = useState(true);
    // data state
    const [data, setData] = useState(null);
    //error state
    const [error, setError] = useState(null);


    useEffect(() => {

        // fetch(`https://jsonplaceholder.typicode.com/possksksts?_limit=8`)
        //     .then((response) => {
        //         if (!response.ok) {
        //             // alert(`This is an HTTP Error: The status is ${response.status}`)
        //             throw new Error(`This is an HTTP Error: The status is ${response.status}`)
        //         }
        //         return response.json()
        //     })
        //     .then((actualData) => {
        //         setData(actualData)
        //         setError(null)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //         setError(error)
        //         setData(null)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })

        const getData = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/postsdkdkd?_limit=10`);
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [])


    return (
        <div>
            <h1>Posts Data</h1>
            {loading && <div>Data is loading. Please wait...</div>}
            {error && <div>{`There is a problem fetching your data - ${error}`}</div>}
            <ul>
                {data && data.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts;