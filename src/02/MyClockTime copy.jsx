export default function MyClockTime() {
  return (
    <div className="w-full p-5 text-lime-900
                    text-center font-bold
                    text-2xl">
      현재시각 : {new Date().toLocaleTimeString()}
    </div>
  )
}
