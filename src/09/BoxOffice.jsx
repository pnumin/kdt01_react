//table참고 : https://flowbite.com/docs/components/tables/
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
    let dt = getYesterday().replaceAll('-', '');

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
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <td className="p-4">              
              </td>
              <td className="px-6 py-3">
                Product name
              </td>
              <th className="px-6 py-3">
                Color
              </th>
              <th className="px-6 py-3">
                Category
              </th>
              <th className="px-6 py-3">
                Price
              </th>
              <th class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                 
              </td>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </td>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>   
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                 
              </td>
              <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </td>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
              <td class="px-6 py-4">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>          
          </tbody>
        </table>
        
      </div>
  )
}
