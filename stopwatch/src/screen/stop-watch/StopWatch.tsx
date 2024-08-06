import { FC, useEffect, useState } from "react";
import Buttons from "../../components/button/Buttons";


const StopWatch : FC = ()=>{
    const [count,setCount] = useState<number>(0)
 
    const handleStart = ()=>{
       
    }
    useEffect(()=>{
       let intervel=  setTimeout(()=>{
            setCount(count+1)
          },1000)
    },[count])
    const handleStop = ()=>{
        // clearInterval(intervel)
     }
    return(
        <>
        <h2 className="d-flex justify-content-center mt-4">
            Stop Watch - {count}
        </h2>
        <div className="d-flex justify-content-center">
            <Buttons onClick={handleStart} label={"Start"} className=" btn btn-primary m-2  w-25"/>
            <Buttons onClick={handleStop} label={"Stop"} className=" btn btn-primary m-2 w-25"/>
        </div>
       
        </>
    )
} 
export default StopWatch;