import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Hello from "./01/Hello"
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
//import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain'; 
// import MyToggle from './07/MyToggle';
// import MyEffect from './08/MyEffect';


import { FaHome } from "react-icons/fa";
function App() {
  return (
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col">
      <header className="w-full min-h-20 bg-lime-50
                         px-10
                         flex justify-between items-center">

        <div className="text-4xl font-bold text-lime-700 flex">
          PNU KDT10 
          <div className="flex text-sm items-center mx-5">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src={viteLogo} alt="vite" className="w-8" />
          </div>
        </div>
        <div className="text-3xl font-bold text-black">
          <FaHome />
        </div>
      </header>
      <main className="w-full flex-grow
                      pt-10
                      flex flex-col justify-start items-center
                      overflow-y-auto">

        <MyClock />
      </main>
      <footer className="w-full min-h-20 bg-lime-900
                         px-10 text-md text-lime-50 font-bold
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
  )
}

export default App
