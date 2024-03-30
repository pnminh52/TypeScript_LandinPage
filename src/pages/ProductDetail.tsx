import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '~/apis/product'
import { TProduct } from '~/interfaces/Product'

const ProductDetail = () => {
  const { id } = useParams<{ id?: string }>()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const data = await getProduct(id)
          setProduct(data)
        } catch (error) {
          console.error('Error fetching product:', error)
        }
      }
      fetchData()
    }
  }, [id])

  return (
    <div className='max-w-xl mx-auto mt-8'>
      <h1 className='text-3xl font-bold mb-4'>Chi tiết sản phẩm</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <img src={product?.thumbnail} alt={product?.title} className='w-full' />
          <div className='mt-4 grid grid-cols-3 gap-4'>
            {product?.images &&
              product.images.map((item, index) => <img key={index} src={item} alt='Description' className='w-full' />)}
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='text-xl font-semibold'>{product?.title}</h2>
          <p className='text-lg mt-2 font-bold text-red-500'>Giá: {product?.price}$</p>
          <p className='mt-2'>{product?.description}</p>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4'>Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
