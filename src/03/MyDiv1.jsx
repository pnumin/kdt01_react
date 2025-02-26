import MyDiv2 from "./MyDiv2"
export default function MyDiv1() {
  let d1 = "Div1" ;
  let d2 = "Div2" ;
  let d3 = "Div3" ;
  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        {d1}
      </div>
      <MyDiv2 md1= {d1} md2={d2} md3={d3} />
    </div>
  )
}
