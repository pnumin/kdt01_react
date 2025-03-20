
export default function TailInput({type, id, ref, onFocus}) {
  return (
    <input type={type} id={id}
            ref={ref}
            onFocus={onFocus}
            className="bg-gray-50 border border-gray-300
                         text-gray-900 text-lg rounded-lg  text-center
                         focus:ring-blue-500 focus:border-blue-500 block w-full p-1"/>
  )
}
