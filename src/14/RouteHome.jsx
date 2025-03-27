import { Link, useNavigate } from "react-router-dom" ;
import TailButton from "../UI/TailButton" ;

export default function RouteHome() {
  const navigate = useNavigate() ;

  return (
    <div className="w-10/12 flex flex-col justify-start items-center">
      <ul className="w-50">
        <li className="w-full h-10 border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    my-4
                    font-bold">
          <Link to="/p1/🍎/과일" className="w-full h-full py-2 px-4 inline-flex
                                  justify-center items-center">
                    사과 🍎
          </Link>
        </li>
        <li className="w-full h-10 border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    my-4
                    font-bold">
          <Link to="/p1/🥕/채소" className="w-full h-full py-2 px-4 inline-flex
                                  justify-center items-center">
                    당근 🥕
          </Link>
        </li>
        <li className="w-full h-10 border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    my-4
                    font-bold">
          <Link to="/p1/🍌/과일" className="w-full h-full py-2 px-4 inline-flex
                                  justify-center items-center">
                    바나나 🍌
          </Link>
        </li>
      </ul>
      <div className="w-60 px-2 grid grid-cols-1 gap-1 place-content-center">
        <TailButton caption ="사과 🍎" 
                    color ="blue" 
                    onClick = {() => navigate("/p2?item1=🍎&item2=과일")} />
        <TailButton caption ="당근 🥕" 
                    color ="blue" 
                    onClick = {() => navigate("/p2?item1=🥕&item2=채소")} />
        <TailButton caption ="바나나 🍌" 
                    color ="blue" 
                    onClick = {() => navigate("/p2?item1=🍌&item2=과일")} />
      </div>
    </div>
  )
}
