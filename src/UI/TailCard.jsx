export default function TailCard({ title, subtitle, imgurl, kws }) {
  return (
    <div className="max-w-sm bg-white border
                   border-gray-200 rounded-lg shadow-sm">
      <div>
        <img className="rounded-t-lg" src={imgurl} alt={title} />
      </div>
      <div className="p-5">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
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
