import { useState, useEffect } from "react"
import TrafficNav from "./TrafficNav"

export default function Traffic() {
  // fetch된 전체 데이터 
  const [tdata, setTdata] = useState([]);

  // 대분류 데이터
  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState();

  // 사고유형 데이터 
  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState();

  // 사고정보
  const [info, setInfo] = useState();

  //data fetch
  const getFetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    let url = `https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?page=1&perPage=18&serviceKey=${apiKey}`;

    const resp = await fetch(url);
    const data = await resp.json();

    console.log(url)

    setTdata(data.data);
    console.log("fetch", tdata)
  }

  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    if (tdata.length <= 0) return;
    console.log("tdata ", tdata);

    //대분류 추출 
    let tm = tdata.map(item => item["사고유형대분류"]);
    //중복제거 
    tm = [...new Set(tm)];


    setC1(tm);
  }, [tdata]);

  // 대분류가 선택이 될때
  useEffect(() => {
    console.log("selC1", selC1)

    //사고유형  추출 
    let tm = tdata.filter(item => item["사고유형대분류"] == selC1)
                  .map(item => item["사고유형"]);
    //중복제거 
    tm = [...new Set(tm)];
    console.log("tm ", tm);

    setC2(tm);
  }, [selC1]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
    
      {c1 && <TrafficNav title="대분류"
        ct={c1}
        selc={selC1}
        setSelC={setSelC1} />}

      {c2 && <TrafficNav title="사고유형"
        ct={c2}
        selc={selC2}
        setSelC={setSelC2} />}

        <div>
          {info}
        </div>
    </div>
  )
}
