import TailInput from "../UI/TailInput"
import TailButton from "../UI/TailButton";

export default function GallerySeach({title, refInput, handleClick, handleReset}) {
  return (
    <>
      <h1 className="w-full text-3xl font-bold text-center mt-5 mb-10">
        {title}
      </h1>
      <div className="w-full bg-lime-100 p-5 grid grid-cols-1 md:grid-cols-3">
        <TailInput type="text"
          id="txt1"
          ref={refInput}
          onFocus={() => { }} />
        <TailButton caption="확인"
          color="blue"
          onClick={handleClick} />
        <TailButton caption="취소"
          color="blue"
          onClick={handleReset} />
      </div>
    </>
  )
}
