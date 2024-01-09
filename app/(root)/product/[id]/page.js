import { getProductById } from '@/app/_productsActions'
import AddToCartButton from '@/components/button/AddToCartButton'


const ProductPage = async ({params: { id }}) => {
  

    const product = await getProductById(id)
  
    return (
        <div className='h-[calc(100vh-60px)] w-full'>
            <div>{product?.name}</div>
          <AddToCartButton product={product} />
        </div>
  )
}

export default ProductPage