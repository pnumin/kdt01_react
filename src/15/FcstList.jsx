import TailSelect from "../UI/TailSelect";
import { useSearchParams } from "react-router-dom";

import { useRef } from "react";
import getcode from "./getcode.json";

export default function FcstList() {
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
    .map(item => `${item["항목명"]}(${item["항목값"]})`);

  const handleChange = () => {
    console.log(refItem.current.value)
  }


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
      <table className="w-9/12 mt-5 text-sm text-left rtl:text-center text-gray-500">
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
          {/* {tags} */}
        </tbody>
        
      </table> 
    </>

  )
}
