import HelloDate from "./HelloDate"
function Hello() {
  let name = undefined;
  return (
    <>
      <h1 className="text-4xl">
        {/* {name == undefined ? "이름이/ 존재하지 않습니다."  : `${name} 님 반갑습니다.`} */}
        {name && `${name} 님 반갑습니다.`}
      </h1>
      <HelloDate />
    </>
  )
}

export default Hello 