"use client"

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}) => {
  
 

  return (
    <>
    {data.length > 0 ? (
      <div className="flex flex-col items-center gap-10">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((event) => {
         

            return (
              <li key={event._id} className="flex justify-center">
                <div className="w-[200px] h-[200px] bg-pink-800">{ event.name}</div>
              </li>
            )
          })}
        </ul>

          {totalPages > 1 && (
            // urlParamName={urlParamName} page={page} totalPages={totalPages} 
          <div >pagination</div>
        )}
      </div>
    ): (
      <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
        <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
        <p className="p-regular-14">{emptyStateSubtext}</p>
      </div>
    )} 
  </>
  )
}

export default Collection