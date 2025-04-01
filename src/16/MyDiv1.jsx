import MyDiv2 from "./MyDiv2"
export default function MyDiv1() {
  let n = 0 ;
  let n2 = 0 ;

  return (
    <div className="w-8/10 h-8/10  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        n = {n} , n2 = {n2} 
      </div>
      <MyDiv2 />
    </div>
  )
}
