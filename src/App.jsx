import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsArrowThroughHeartFill } from "react-icons/bs"

function App() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center items-center p-10">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="font-bold text-4xl">Vite + React</h1>
      <div className="card">
        <p>
          부산대학교 KDT 1기 김경민
        </p>
      </div>
      <p className="w-full flex justify-center items-center text-fuchsia-600 text-6xl">
        <BsArrowThroughHeartFill />
      </p>
    </div>
  )
}

export default App
