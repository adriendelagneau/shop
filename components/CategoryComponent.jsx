import Link from 'next/link'

const CategoryComponent = () => {

    return (
        <div className='m-auto max-w-screen-2xl'>

        <div className="w-[80%]  mx-auto pb-10 flex flex-col  gap-10 xl:h-[500px] xl:flex-row items-center xl:gap-0 xl:w-[1180px] 2xl:w-[1450px]">
            <Link href={`/products`} className='h-[175px]  xl:transition-all xl:duration-500 cursor-pointer img1 group img w-[300px] xl:flex-1 sm:w-[450px] sm:h-[262px] lg:w-[550px] lg:h-[330px] relative'>
                <p className='absolute bottom-0 left-0 p-2 uppercase transition-all duration-300 origin-top-left transform text-md sm:text-xl xl:-rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>headphones</p>
            </Link>
            <Link href={`/`} className='h-[175px]  xl:transition-all xl:duration-500 cursor-pointer img2 group img w-[300px] xl:flex-1 sm:w-[450px] sm:h-[262px] lg:w-[550px] lg:h-[330px] relative'>
                <p className='absolute bottom-0 left-0 p-2 uppercase transition-all duration-300 origin-top-left transform text-md sm:text-xl xl:-rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>earbuds</p>
            </Link>
            <Link href={`/`} className='h-[175px]  xl:transition-all xl:duration-500 cursor-pointer img3 group img w-[300px] xl:flex-1 sm:w-[450px] sm:h-[262px] lg:w-[550px] lg:h-[330px] relative'>
                <p className='absolute bottom-0 left-0 p-2 uppercase transition-all duration-300 origin-top-left transform text-md sm:text-xl xl:-rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>spreakers</p>
            </Link>
            <Link href={`/`} className='h-[175px]  xl:transition-all xl:duration-500 cursor-pointer img4 group img w-[300px] xl:flex-1 sm:w-[450px] sm:h-[262px] lg:w-[550px] lg:h-[330px] relative'>
                <p className='absolute bottom-0 left-0 p-2 uppercase transition-all duration-300 origin-top-left transform text-md sm:text-xl xl:-rotate-90 bg-stone-950 text-sky-50 group-hover:rotate-0'>watches</p>
            </Link>
        </div>
        </div>
    );
}

export default CategoryComponent