import bank from "../assets/bank.png"
import busan from "../assets/busan.png"
import market from "../assets/market.png"
import { useState } from "react";

export default function FoodCard() {
  const [isShow , setIsShow] = useState(false) ;
  const handleShow = () =>{ 
    setIsShow(!isShow) ;
  } ;
  const obj = {
    "구분": "광역지원센터",
    "시군구": "부산시",
    "사업장명": "부산광역푸드뱅크",
    "신고기준": "당연",
    "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    "연락처(대표번호)": "051-791-1377",
    "팩스번호": "051-714-3096",
    "운영주체 분류": "1. 사회복지법인",
    "운영주체명": "부산광역시사회복지협의회"
  };

  return (
    <div className="w-full h-full flex justify-start items-start
                    border border-gray-400">
      <div className="w-1/4 flex justify-center items-start">
        <img src={bank} alt="푸드뱅크" className="w-11/12"/>
      </div>
      <div className="w-3/4 h-full px-2 py-5">
        <h1 className="h-1/5 text-4xl font-bold">{obj["사업장명"]}</h1>
        <h2 className="h-1/5 text-2xl text-gray-600 font-bold">{obj["운영주체명"]}</h2>
        <p className="h-2/5 text-sm text-gray-500">{obj["사업장 소재지"]}</p>
        <p className="h-1/5 bg-gray-700 text-white p-2
                      cursor-pointer"
           onClick={handleShow}>
          {isShow && `연락처 : ${obj["연락처(대표번호)"]} , Fax : ${obj["팩스번호"]}`}
        </p>
      </div>
    </div>
  )
}
