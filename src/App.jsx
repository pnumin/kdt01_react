import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Hello from "./01/Hello"
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain'; 
// import MyToggle from './07/MyToggle';
// import MyEffect from './08/MyEffect';
import BoxOffice from './09/BoxOffice';
import Traffic from './10/Traffic';
// import MyRef from './11/MyRef';
import Gallery from './12/Gallery';
import Festival from './13/Festival';
// import RouteMain from './14/RouteMain';
import Fcst from './15/Fcst';
import FcstList from './15/FcstList';
import MyDiv1 from './18/MyDiv1';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
function App() {
  return (
    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto 
                    flex flex-col">
      <header className="w-full min-h-20 bg-lime-50
                         px-4
                         flex justify-between items-center">

        <div className="text-xl font-bold text-lime-700 flex">
          PNU KDT10 
          <div className="flex text-sm items-center mx-2">
            <img src={reactLogo} alt="react" className="w-8" /> + 
            <img src={viteLogo} alt="vite" className="w-8" />
          </div>
        </div>
        <ul className='flex justify-center items-center'>
          <li>
            <Link to="/lotto" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              로또
            </Link>
          </li>
          <li>
            <Link to="/food" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              푸드뱅크
            </Link>
          </li>
          <li>
            <Link to="/box" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              박스오피스
            </Link>
          </li>
          <li>
            <Link to="/traffic" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              교통사고
            </Link>
          </li>
          <li>
            <Link to="/gallery" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              부산관광
            </Link>
          </li>
          <li>
            <Link to="/festival" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              부산축제
            </Link>
          </li>
          <li>
            <Link to="/fcst" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              일기예보
            </Link>
          </li>
          <li>
            <Link to="/mydiv1" className='inline-flex px-4 py-2 m-1 font-bold
                                         rounded-lg
                                         hover:cursor-pointer hover:bg-amber-700 hover:text-white'>
              전역상태 
            </Link>
          </li>
        </ul>
        <div className="text-3xl font-bold text-black">
          <Link to="/"><FaHome /></Link>
        </div>
      </header>
      <main className="w-full flex-grow py-4
                      flex flex-col justify-start items-center
                      overflow-y-auto">
        <Routes>
          <Route path='/' element={<MyClock />} />
          <Route path='/lotto' element={<Lotto />} />
          <Route path='/food' element={<FoodMain />} />
          <Route path='/box' element={<BoxOffice />} />
          <Route path='/traffic' element={<Traffic />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/festival' element={<Festival />} />
          <Route path='/fcst' element={<Fcst />} />
          <Route path='/fcstlist' element={<FcstList />} />
          <Route path='/mydiv1' element={<MyDiv1 />} />
        </Routes>
      </main>
      <footer className="w-full min-h-20 bg-lime-900
                         px-10 text-md text-lime-50 font-bold
                         flex justify-center items-center">
         [K-Digital 부산대 25-1회차] AI 데이터 분석 풀스택 웹 개발자 양성과정                 
      </footer>
    </div>
    </BrowserRouter>
  )
}

export default App
