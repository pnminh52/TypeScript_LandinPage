import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  }, [id]) // Thêm id vào dependency array để useEffect chạy khi id thay đổi

  return (
    <div className='container mx-auto'>
      {' '}
      {/* Sử dụng container và mx-auto để căn giữa */}
      {product && (
        <div className='flex border '>
          <div className='w-1/5 p-4'>
            <img className='object-contain h-80 w-full' src={product.thumbnail} alt={product.title} />
          </div>
          <div className='w-4/5'>
            <h1>Chi tiết sản phẩm</h1>
            <h2>{product.title}</h2>
            <p>Gía: {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetail
