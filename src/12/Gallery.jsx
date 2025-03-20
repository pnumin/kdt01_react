import TailCard from "../UI/TailCard"
import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton";
import { useState, useEffect, useRef } from "react"

export default function Gallery() {

  //키워드 입력 
  const refInput = useRef();

  //확인
  const handleClick = () => {

  }

  //취소
  const handleReset = () => {
    refInput.current.value = '' ;
    refInput.current.focus();
  }
 

  //랜더링 시 포커스 
  useEffect(()=>{
    refInput.current.focus();
  }, []) ;

  return (
    <div className="w-10/12 flex flex-col justify-start items-center">
      <h1 className="w-full text-3xl font-bold text-center mt-5 mb-10">
        한국관광공사 관광사진 정보
      </h1>
      <div className="w-full bg-lime-100 p-5 grid grid-cols-1 md:grid-cols-3">
        <TailInput type = "text"
                   id = "txt1"
                   ref = {refInput}
                   onFocus = {()=>{}} />
        <TailButton caption="확인"
                    color="blue"
                    onClick={handleClick} />
        <TailButton caption="취소"
                    color="blue"
                    onClick={handleReset} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      </div>
    </div>
  )
}
