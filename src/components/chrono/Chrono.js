import { useTicktimer } from "../../hooks/useTicktimer";

const Chrono = ({title}) => {

  const [running, count, stamps, methods] = useTicktimer()

  const toHours = (t) => Math.floor(t / 36000)
  const toMinutes = (t) => {
    const m = Math.floor(t / 600)
    return m < 60 ? m : m % 60
  }
  const toSeconds = (t) => {
    const s = Math.floor(t / 10)
    return s < 60 ? s : s % 60
  }
  const toMseconds = (t) => t < 10 ? t : t % 10

  return (
    <div className="chrono">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="dsp">
        <div className="digit">{toHours(count).toString().padStart(2, '0')}</div>
        <div className="digit">{toMinutes(count).toString().padStart(2, '0')}</div>
        <div className="digit">{toSeconds(count).toString().padStart(2, '0')}</div>
        <div className="digit">{toMseconds(count).toString()}</div>
      </div>
      <div className="control">
        <button onClick={() => { running ? methods.pause() : methods.start() }} >
          {!running ? "Start" : "Pause"}
        </button>
        <button onClick={() => methods.reset()}>Reset</button>
        <button onClick={() => methods.stamp()}>Stamp</button>
      </div>
      <div>
        {stamps}
      </div>

    </div>
  )

  /*
  const getObjCurrentTimer = (t) => {
    const ms = t < 10 ? t : t % 10;
    const s = Math.floor(t / 10);
    const m = Math.floor(t / 600);
    const h = Math.floor(t / 36000);
    return {
      hours: h,
      minutes: m < 60 ? m : m % 60,
      seconds: s < 60 ? s : s % 60,
      ms: ms
    };
  };

  function printStamp(t) {
    if (running) {
      console.log(getObjCurrentTimer(t));
    }
  }

  useEffect(() => {
    let id = 0;
    if (running) {
      id = setInterval(() => setTimer((count) => count + 1), 100);
    }
    return () => {
      clearInterval(id);
    };
  }, [running]);
  
  return (
    <div>
      {count}
      <button onClick={() => setRunning(!running)}>start</button>
      <button onClick={() => printStamp(timer)}>stamp</button>
    </div>
  );
  */
};

export default Chrono;