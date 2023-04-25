import { useEffect, useState } from "react";
import useFetch from "./custom-hooks/useFetch";

export default function Counter({ initialCount }) {
    const [count, setCount] = useState(initialCount);

    // const [data] = useFetch("https://any-random-api");


    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);



    return (
        <div>
            Count: {count}
            <div>
                <button onClick={() => setCount(initialCount)}>Reset
                </button>
                <button
                    onClick={() => setCount((prevCount) => prevCount - 1)}>-
                </button>
                <button
                    onClick={() => setCount((prevCount) => prevCount + 1)}>+
                </button>
            </div>

        </div>
    );
}
