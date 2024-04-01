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
    <div className='bg-white border border-gray-200 rounded-xl shadow-md ml-6 mt-4 '>
      <div className='px-18 py-2  bg-gray-200  text-black font-thin text-sm text-center rounded-tr-md rounded-tl-md '>
        Pay for your new Mac over 12 months at 0% APR with Apple Card. Just choose Apple Card Monthly Installments when
        you check out to apply.
        <div className=' text-indigo-600  font-thin text-sm text-center hover:cursor-pointer hover:underline'>
          Learn more{' '}
        </div>
      </div>

      <div className=' mt-4 '>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <img src={product?.thumbnail} alt={product?.title} className='w-60 h-auto ml-64' />
            <div className='mt-4  grid grid-cols-3 gap-4 '>
              {product?.images &&
                product.images.map((item, index) => (
                  <img key={index} src={item} alt='Description' className='w-full' />
                ))}
            </div>
          </div>
          <div className=' mt-8 mr-2'>
            <h1 className='text-sm mb-2 font-thin '>Shop / {product?.title}</h1>
            <h2 className='text-xl font-semibold '>{product?.title}</h2>
            <p className='text-lg mt-2 font-bold text-red-500'>Total: {product?.price}$</p>
            <p className='mt-2'>{product?.description}</p>
            <div className='flex mt-2'>
              <a
                className='group relative inline-block text-sm font-medium mr-2 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
                href='#'
              >
                <span className='absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>
                <span className='relative block border border-current bg-white px-5 py-1'> Buy </span>
              </a>
              <a
                className='group relative inline-block text-sm font-medium  text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
                href='#'
              >
                <span className='absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>
                <span className='relative block border border-current bg-white px-5 py-1'> Add to Cart </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
