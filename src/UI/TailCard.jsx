export default function TailCard({ title, subtitle, imgurl, kws }) {
  return (
    <div className="max-w-sm bg-white border 
                   border-gray-200 rounded-lg shadow-sm">
      <div className="w-full h-48">
        <img className="rounded-t-lg w-full h-full object-cover" src={imgurl} alt={title} />
      </div>
      <div className="p-5 flex flex-col justify-between">
        <h1 className="h-10 mb-2 text-2xl font-bold tracking-tight text-gray-900 truncate">
          {title}
        </h1>
        <p className="mb-3 font-normal text-gray-700">
          {subtitle}
        </p>
        <p>
          {kws.split(',').map(item => <span key={item}
                                            className="inline-flex justify-center items-center
                                                       bg-lime-100
                                                       p-1 m-1">
                                        {item}
                                      </span>)}
        </p>
      </div>
    </div>
  )
}
