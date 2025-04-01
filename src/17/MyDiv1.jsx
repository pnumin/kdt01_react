import MyDiv2 from "./MyDiv2" ;
import { useAtom } from "jotai";
import { cntAtom, cntAtom2 } from "./CntAtoms";

export default function MyDiv1() {
  const [n] = useAtom(cntAtom) ;
  const [n2] = useAtom(cntAtom2) ;
 
  return (
    <div className="w-8/10 h-8/10  
                    bg-lime-900 text-white text-2xl
                    p-10 font-bold
                    flex flex-col justify-center items-center">
      <div className="w-full text-left mb-10">
        (jotai) n = {n} , n2 = {n2}  
      </div>
      <MyDiv2 />
    </div>
  )
}
