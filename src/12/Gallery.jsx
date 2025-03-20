import { useState, useEffect, useRef } from "react"
import GallerySeach from "./GallerySeach"
import TailCard from "../UI/TailCard"

export default function Gallery() {
  //state 변수
  const [tags , setTags] = useState([]) ;

  //키워드 입력 
  const refInput = useRef();


  // data fetch
  const getFetchData = async() => {
    const apikey = import.meta.env.VITE_APP_API_KEY ;
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    url = `${url}serviceKey=${apikey}&numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`;
    url = `${url}&keyword=${encodeURI(refInput.current.value)}&_type=json`;

    console.log(url) ;

    const resp = await fetch(url) ;
    const data = await resp.json(); 

    let tm = data.response.body.items.item ;
    tm = tm.map((item, idx)  => <TailCard key ={item.galContentId + idx}
                                  title = {item.galTitle}
                                  subtitle ={item.galPhotographyLocation}
                                  imgurl ={item.galWebImageUrl}
                                  kws = {item.galSearchKeyword}
                        />);
    setTags(tm) ;
  }

  //확인
  const handleClick = () => {
    if (refInput.current.value  == '') {
      alert("키워드를 입력하세요.") ;
      refInput.current.focus();
      return;
    }

    getFetchData() ;
  }

  //취소
  const handleReset = () => {
    refInput.current.value = '' ;
    refInput.current.focus();
    setTags([]);

  }
 

  //랜더링 시 포커스 
  useEffect(()=>{
    refInput.current.focus();
  }, []) ;

  return (
    <div className="w-10/12 flex flex-col justify-start items-center">
      <GallerySeach title = "한국관광공사 관광사진 정보"
                    refInput = {refInput}
                    handleClick ={handleClick}
                    handleReset ={handleReset} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {tags}
      </div>
    </div>
  )
}
