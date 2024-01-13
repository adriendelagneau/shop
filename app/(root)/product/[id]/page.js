
import { getProductById } from '@/app/_productsActions'
import ImageComponent from '@/components/ImageComponent'
import AddToCartButton from '@/components/button/AddToCartButton'
import Image from 'next/image'


const ProductPage = async ({ params: { id } }) => {


  const product = await getProductById(id)

  console.log(product)

  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center lg:flex-row'>
        <div className='  w-[350px] p-3 md:w-[500px] lg:flex-1'>
          <ImageComponent images={product.image} />
        </div>
        <div className='w-[350px] md:w-[500px] lg:flex-1  md:h-[445px] p-3 2xl:h-[544px] mx-auto md:flex md:flex-col md:justify-between md:pl-8'>

          <div className='flex flex-col gap-6 capitalize'>
          <h2 className='text-3xl md:text-4xl 2xl:text-5xl'>{product.name}</h2>
            <p className='text-xl text-gray-500 '>{product.brand}</p>
          <p className='text-xl '>{product.description}</p>
            

          </div>
          <div className=''>

            <div className='flex gap-8 my-4 text-2xl lg:text-3xl'>
            <p>{product.price} €</p>
            <del className='text-red-700'>{product.oldPrice}</del>
            </div>
            <AddToCartButton product={product} />
          </div>



        </div>
      </div>
    </div>
  )
}

export default ProductPage