import { useState } from "react";

export const useTicktimer = (initialValue = 0) => {

    const [count, setCount] = useState(initialValue)
    const [running, setRunning] = useState(false)
    const [id, setId] = useState(0)
    const [stamps, setStamps] = useState([])
   
    const start = (t=100) => {
        setId(setInterval(() => setCount((c) => c + 1), 100));
        setRunning(true)
        console.log("init", id)
    }

    const pause = () => {
        clearInterval(id);
        setRunning(false)
        console.log("clear", id)
    }

    const stamp = ()=>{
        setStamps([...stamps, count])
    }

    const reset = (c = 0) => setCount(c)

    return [running, count, stamps, { start, pause, reset, stamp }]

}