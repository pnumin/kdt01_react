import bank from "../assets/bank.png"
import busan from "../assets/busan.png"
import market from "../assets/market.png"
import { useState } from "react";

export default function FoodCard({obj}) {
  const [isShow , setIsShow] = useState(false) ;
  const imgGubun  = {
    "광역지원센터" : busan, 
    "기초푸드뱅크" : bank,
    "기초푸드마켓" : market,
  }
  const handleShow = () =>{ 
    setIsShow(!isShow) ;
  } ;
 
  return (
    <div className="w-full h-60 flex justify-start items-start
                    border border-gray-400">
      <div className="w-1/4 flex justify-center items-start">
        {/* <img src={obj["구분"] == "광역지원센터" ? busan 
                  : obj["구분"] == "기초푸드뱅크" ? bank : market} alt={obj["구분"]}  */}

        <img src={imgGubun[obj["구분"]]} alt={obj["구분"]} 
             className="w-11/12" />
      </div>
      <div className="w-3/4 h-full px-2 py-5">
        <h1 className="h-1/4 mb-1 text-3xl font-bold">{obj["사업장명"]}</h1>
        <h2 className="h-1/4 mb-1 text-xl text-gray-600 font-bold">{obj["운영주체명"]}</h2>
        <p className="h-1/4 mb-1 text-sm font-bold text-gray-500">{obj["사업장 소재지"]}</p>
        <p className="h-1/4 bg-gray-700 text-white p-2
                      flex justify-center items-center
                      cursor-pointer"
           onClick={handleShow}>
          {isShow && `연락처 : ${obj["연락처(대표번호)"]} , Fax : ${obj["팩스번호"]}`}
        </p>
      </div>
    </div>
  )
}
