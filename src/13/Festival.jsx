import TailSelect from "../UI/TailSelect"
import TailCard from "../UI/TailCard"
import { useEffect, useRef, useState } from "react"

export default function Festival() {
  //전체 데이터 
  const [tdata, setTdata] = useState();
  const [ops, setOps] = useState([]);
  const [tags, setTags] = useState([]);

  //select ref
  const refSel = useRef();


  //select 선택
  const handleChange = () => {
    console.log(refSel.current.value)

    let tm = tdata.filter( item => item.GUGUN_NM == refSel.current.value)
                  .map(item => <TailCard key ={item.UC_SEQ}
                                          title = {item.MAIN_TITLE.split('(')[0]}
                                          subtitle ={item.TITLE}
                                          imgurl ={item.MAIN_IMG_THUMB}
                                          kws = {item.TRFC_INFO.replaceAll(',', ' ')}
                                          />);
   setTags(tm);
  }

  // data fetch
  const getFetchData = async() => {
    //fetch
    const apikey = import.meta.env.VITE_APP_API_KEY ;

    let url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=39&resultType=json`;

    console.log(url) ;

    const resp = await fetch(url) ;
    const data = await resp.json(); 
 
    // //state 변수 => tdata 변경
    setTdata(data.getFestivalKr.item) ;
  }

  //맨처음 한번
  useEffect(() => {
    getFetchData();
  }, []);

  //전체 데이터 생성 후
  useEffect(() => {
    if (!tdata) return ;

    let tm = tdata.map(item => item.GUGUN_NM) ;
    tm = [... new Set(tm)] ;
    tm.sort() ;

    console.log(tm)
    setOps(tm);
  }, [tdata]);
  return (
    <div className="w-10/12 flex flex-col justify-start items-center">
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-lime-900">
        부산 축제 정보
      </h1>
      <div className="w-1/2">
      <TailSelect id="sel1"
                  refSel={refSel}
                  ops={ops}
                  handleChange={handleChange} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {tags}
      </div>
    </div>
  )
}
