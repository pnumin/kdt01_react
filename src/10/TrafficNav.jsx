import TailButton from "../UI/TailButton"

export default function TrafficNav({title, ct, selc, setSelC}) {
  console.log("TrafficNav", ct)
  const tags = ct.map(item => <TailButton 
                                  key = {item}
                                  caption = {item}
                                  color = { selc == item ? "orange" : "blue" }
                                  onClick = {()=> setSelC(item) }
                                />) ;
  return (
    <div className="w-11/12 flex justify-between items-center my-5">
      <div className="text-2xl font-bold">
        교통사고 {title}
      </div>
      <div>
        {tags}
      </div>
    </div>
  )
}
