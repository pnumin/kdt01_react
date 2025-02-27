//state 변수 
//1 . useState Hook import
import { useState } from "react";

export default function MyListItem({title, imgUrl, content}) {
  let cnt = 0 ;
  // console.log(title, imgUrl, content)

  //2. state 변수 선언
  const [stCnt, setStCnt] = useState(0) ;

  const handleClick = () => {
    cnt =  cnt + 1;

    //3. state변수 변경
    setStCnt(stCnt + 1) ;

    console.log(cnt)
  }

  return (
    <div className="w-full h-full flex border border-gray-300">
      <div className="w-1/4">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="w-3/4 ml-10">
        <h1 className="h-1/4 text-2xl font-bold flex justify-start items-start pt-5" >
          {title}
        </h1>
        <p className="h-2/4 text-lg">
          {content}
        </p>
        {/* {show && <div className="h-1/4 text-xl font-bold flex justify-end items-end px-5 py-8">
                  ❤️ 좋아요 {cnt}
                  </div>} */}

       <div className="h-1/4 text-xl font-bold flex justify-end items-end px-5 py-8">
            <span className="hover:cursor-pointer hover:text-2xl"
                  onClick={()=> handleClick()} >
                  ❤️ 좋아요 {stCnt}  
            </span>  
       </div>
       
      </div>
    </div>
  )
}
