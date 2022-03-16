import Display from "./Display"

const StampsTimes = ({times})=>{
    return (
        times.map((t,i)=><Display count={t} key={i} />)
    )
}

export default StampsTimes