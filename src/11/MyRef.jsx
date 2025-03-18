import TailButton from "../UI/TailButton"
import { useState, useEffect, useRef } from "react"

export default function MyRef() {

  //계산 
  const handleCal = () => {
    
  }
  return (
    <div className="w-full flex justify-center items-start mt-10">
      <div className="w-10/12 flex justify-center items-center bg-lime-100 p-5">
        <form className="w-3/5 grid grid-cols-5 gap-4">
          <input type="number" id="txt1"
            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
          <select id="sel" 
            className="bg-gray-50 border border-gray-300
                       text-gray-900 text-lg rounded-lg text-center
                       focus:ring-blue-500 focus:border-blue-500 
                       block w-full p-2">
            <option value="+" defaultValue>+</option>
            <option value="-">-</option>
            <option value="*">x</option>
            <option value="/">/</option> 
          </select>
          <input type="number" id="txt2"
            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
           <TailButton caption = "="
                              color ="blue"
                              onClick = {handleCal} />
            <input type="number" id="txt2" readOnly 
                className="bg-gray-100 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-2"/>
        </form>
      </div>

    </div>
  )
}
