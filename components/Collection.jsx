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
  
      <div className="flex flex-col items-center gap-10 min-h-screen">
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {data.map((event) => {
         

            return (
              <li key={event._id} className="flex justify-center">
                <div className="w-[400px] h-[400px] bg-pink-800">{ event.name}</div>
              </li>
            )
          })}
          </ul>
          </div>
  
    
  </>
  )
}

export default Collection