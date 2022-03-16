import { useTicktimer } from "../../hooks/useTicktimer";
import Display from "./Display";
import StampsTimes from "./StampsTimes";

const Chrono = ({ title }) => {

  const [running, count, stamps, methods] = useTicktimer()

  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>
      <Display count={count} />
      <div >
        <button onClick={() => { running ? methods.pause() : methods.start() }} >
          {!running ? "Start" : "Pause"}
        </button>
        <button onClick={() => methods.reset()}>Reset</button>
        <button onClick={() => methods.stamp()}>Stamp</button>
      </div>
      <div>        
        <StampsTimes times={stamps} />
      </div>

    </div>
  )

};

export default Chrono;