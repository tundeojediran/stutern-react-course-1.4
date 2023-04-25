import { useState, useEffect } from "react";
import useFetch from "./custom-hooks/useFetch";

const ToDo = () => {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //         .then((res) => res.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.title}</p>;
                })}
        </>
    );
};

export default ToDo;