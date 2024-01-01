import { getProductById } from '@/app/_productsActions'
import AddToCartButton from '@/components/button/AddToCartButton'


const ProductPage = async ({params: { id }}) => {
  

    const product = await getProductById(id)
  
    return (
        <>
            <div>{product?.name}</div>
          <AddToCartButton product={product} />
        </>
  )
}

export default ProductPage