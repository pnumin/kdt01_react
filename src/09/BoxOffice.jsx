import { useState, useEffect } from "react"

export default function BoxOffice() {
  //화면에 랜더링 될 상태 변수
  const [tags, setTags] = useState([]);

  //어제날짜가져오기 
  const getYesterday = () => {
    let dt = new Date();
    dt.setDate(dt.getDate() - 1);

    //년도
    let year = dt.getFullYear();

    //월
    let month = String(dt.getMonth() + 1).padStart(2, '0');
    // month = month < 10 ? '0' + month : month ;

    //일 
    let day = String(dt.getDate()).padStart(2, '0');

    return (year + '-' + month + '-' + day);
  }

  //일일 박스 오피스 정보 가져오기
  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_APP_MV_KEY;
    let dt = getYesterday().replaceAll('-','') ;

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${mvApiKey}&targetDt=${dt}`;

    //console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxList)
  }

  //컴포넌트가 실행될때 한번 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div>
      BoxOffice
    </div>
  )
}
