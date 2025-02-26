import HelloDate from "./HelloDate"
function Hello() {
  let name = "PNU1" ;
  return (
    <>
      <h1 className="text-4xl">
        {name == "PNU" ? "부산대학교" : name}
        님 안녕하세요! 
      </h1>
      <HelloDate />
    </>
  )
}

export default Hello 