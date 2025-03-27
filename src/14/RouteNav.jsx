import { Link } from "react-router-dom" ;

export default function RouteNav() {
  return (
    <ul className="w-full h-16 
                  bg-amber-100 mb-10
                  flex justify-center items-center">
      <li className="border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    mx-4
                    font-bold">
        <Link to="/" className="w-full h-full py-2 px-4 inline-flex">Home</Link>
      </li>
      <li className="border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    mx-4
                    font-bold">
        <Link to="/p1/m/m" className="w-full h-full py-2 px-4 inline-flex">Page1</Link>
      </li>
      <li className="border rounded-lg border-amber-700
                    hover:bg-amber-700 hover:text-white
                    mx-4
                    font-bold">
        <Link to="/p2"  className="w-full h-full py-2 px-4 inline-flex">Page2</Link>
      </li>
    </ul>
  )
}
