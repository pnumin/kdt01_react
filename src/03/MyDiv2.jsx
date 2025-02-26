import MyDiv3 from "./MyDiv3"
export default function MyDiv2(props) {
  return (
    <div className="w-8/10 h-8/10 
                    bg-lime-700 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-start items-center">
      <div className="w-full text-left mb-10">
        {props.md1} > {props.md2} 
      </div>
      <MyDiv3 d1={props.md1} d2={props.md2} d3={props.md3} />
    </div>
  )
}
