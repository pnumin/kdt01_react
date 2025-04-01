import TailSelect from "../UI/TailSelect";
import { useSearchParams } from "react-router-dom";

import { useRef, useEffect, useState } from "react";
import getcode from "./getcode.json";

export default function FcstList() {
  //state 변수
  const [tdata, setTdata] = useState();
  const [tags, setTags] = useState([]);

  //QueryString
  const [sParams] = useSearchParams();
  const dt = sParams.get("dt");
  const si = sParams.get("si");
  const gubun = sParams.get("gubun");
  const x = sParams.get("x");
  const y = sParams.get("y");

  //Ref
  const refItem = useRef();
  const opsItem = getcode.filter(item => item["예보구분"] == gubun)
    .map(item => `${item["항목명"]}[${item["항목값"]}]`);

  const handleChange = () => {
    if (!tdata) return;

    // console.log(refItem.current.value);
    const code = refItem.current.value.split('[')[1].replace(']', '');
    // console.log(code);

    const unit = getcode.filter(item => item["예보구분"] == gubun &&
                                        item["항목값"] == code)[0]["단위"] ;
    console.log("unit=" , unit);

    let tm = tdata.filter(item => item.category == code);
    console.log(tm)
    tm = tm.map(item => <tr key={item.fcstDate + item.fcstTime} className="border-b hover:bg-amber-50">
                          <td className="text-center">
                            {refItem.current.value}
                          </td>
                          <td className="px-6 py-1 text-center">
                            {item.fcstDate.slice(0, 4)}.{item.fcstDate.slice(4,6)}.{item.fcstDate.slice(6,8)}
                          </td>
                          <th className="px-6 py-1 text-center">
                            {item.fcstTime.slice(0, 2)}:{item.fcstTime.slice(2, 4)}
                          </th>
                          <th className="px-6 py-1 text-center">
                            {item.fcstValue} {unit}
                          </th>
                        </tr>);

    setTags(tm);
  }

  const getFetchData = async () => {
    const apikey = import.meta.env.VITE_APP_API_KEY;
    const baseUrl = gubun == '초단기예보' ? "getUltraSrtFcst" : "getVilageFcst";
    const baseTime = gubun == '초단기예보' ? "0630" : "0500";

    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${baseUrl}?`;
    url = `${url}serviceKey=${apikey}&pageNo=1&numOfRows=1000`;
    url = `${url}&dataType=json&base_date=${dt.replaceAll('-', '')}&base_time=${baseTime}&nx=${x}&ny=${y}`;

    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item);
  }

  //컴포넌트가 로딩되었을때
  useEffect(() => {
    getFetchData();
  }, []);

  //데이터가 채워지면
  useEffect(() => {
    if (!tdata) return;
    console.log(tdata);
  }, [tdata]);
  return (
    <>
      <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <h1 className="w-10/12 text-xl font-bold
                  flex justify-center items-center">
          {`${si} ${gubun} (${dt.replaceAll('-', '.')})`}
        </h1>
        <TailSelect id="selSi"
          refSel={refItem}
          ops={opsItem}
          handleChange={handleChange} />
      </div>
      <table className="w-10/12 mt-5 text-sm text-left rtl:text-center text-gray-500">
        <thead className="text-md text-center font-bold text-gray-50 bg-gray-900
                            border-b-2">
          <tr>
            <td className="p-4">
              항목명
            </td>
            <td className="px-6 py-2">
              예측일자
            </td>
            <th className="px-6 py-2">
              예측시간
            </th>
            <th className="px-6 py-2">
              예측값
            </th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>

      </table>
    </>

  )
}
