//table참고 : https://flowbite.com/docs/components/tables/
import { useState, useEffect } from "react"
import { FaArrowUp, FaArrowDown } from "react-icons/fa6"; 

export default function BoxOffice() {
  //화면에 랜더링 될 상태 변수
  const [tags, setTags] = useState([]);
  const [info, setInfo] = useState('');

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

  //영화정보
  const handleShow = (item) => {
    console.log(item)
    setInfo(`[${item.rankOldAndNew}](${item.movieCd}) ${item.movieNm} 
              상영스크린수 ${item.scrnCnt}, 상영횟수 ${item.showCnt}`);
  }


  //일일 박스 오피스 정보 가져오기
  const getFetchData = async () => {
    const mvApiKey = import.meta.env.VITE_APP_MV_KEY;
    let dt = getYesterday().replaceAll('-', '');

    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${mvApiKey}&targetDt=${"20250301"}`;

    //console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();

    let boxList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(boxList)

    let tm = boxList.map(item => <tr  key={item.movieCd}
                                      onClick={() => handleShow(item)}
                                      className="bg-white border-b border-gray-200
                                                 hover:bg-gray-50 hover:cursor-pointer hover:text-blue-800">
                                      <td className="w-4 p-4">
                                        {item.rank}
                                      </td>
                                      <td scope="row" className="px-6 py-4">
                                        {item.movieNm}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.salesAmt).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.audiCnt).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.salesAcc).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-right">
                                        {parseInt(item.audiAcc).toLocaleString()}
                                      </td>
                                      <td className="px-6 py-4 text-center inline-flex justify-center items-center">
                                        { parseInt(item.rankInten) > 0 ? <span className="text-red-600"><FaArrowUp /></span> 
                                          : parseInt(item.rankInten) < 0 ? <span className="text-blue-600"><FaArrowDown /></span> : ''}
                                        { item.rankInten == 0 ? '-' : Math.abs(item.rankInten)}                                    </td>
                                    </tr>);
    setTags(tm) ;
  }

  //컴포넌트가 실행될때 한번 fetch
  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div className="w-11/12 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-md font-bold text-gray-900 bg-gray-50
                            border-b-2">
          <tr>
            <td className="p-4 w-16">
              순위
            </td>
            <td className="px-6 py-3">
              영화명
            </td>
            <th className="px-6 py-3 w-1/7">
              매출액
            </th>
            <th className="px-6 py-3 w-1/7">
              관객수
            </th>
            <th className="px-6 py-3 w-1/7">
              누적매출액
            </th>
            <th className="px-6 py-3 w-1/7">
              누적관객수
            </th>
            <th className="px-6 py-3 w-24">
              증감률
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
        <tfoot>
          <tr className="text-md h-14 font-bold text-gray-900 bg-gray-100
                            border-y-2">
            <td colSpan="7" className="text-center">
              {info}
            </td>
          </tr>
        </tfoot>
      </table>

    </div>
  )
}
