import { useState } from "react"
import TailButton from "../UI/TailButton"
export default function MyClockTime() {
  const [currentTime , setCurrentTime ] = useState(new Date()) ;

  const handleClick = () => {
    setCurrentTime(new Date()) ;
  }

  return (
    <div className="w-full p-5 text-lime-900
                    text-center font-bold
                    text-2xl">
      현재시각 : {currentTime.toLocaleTimeString()}  
      <div>
        <TailButton caption="클릭"
                    color="blue"
                    onClick={handleClick} />
      </div>
    </div>
  )
}
