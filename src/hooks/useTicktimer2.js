import { useState, useEffect } from "react";

export function useTicktimer(initialValue = 0) {

    const [count, setCount] = useState(initialValue);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let id = 0;
        if (running) {
            id = setInterval(() => setCount((c) => c + 1), 100);
            console.log("init", id)
        }
        return () => {
            clearInterval(id);
            console.log("clear", id)
        };
    }, [running]);

    const start = () => setRunning(true)

    const pause = () => setRunning(false)

    const reset = (c = 0) => setCount(c)

    return [running, count, { start, pause, reset }]

}