function HelloDate() {
  const current = new Date() ;

  const tStyle = {
    backgroundColor: "aliceblue",
    padding : "5px",
    fontSize: "large",
  }

  return(
    <div style={tStyle}>
      현재시각 : 
      <span style={{color:"blue", fontWeight: "bolder"}}>
        {current.toLocaleTimeString()}
      </span>
    </div>
  )
}

export default HelloDate 