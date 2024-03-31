import { SubmitHandler, useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
// import { error } from 'console'
import { useEffect, useState } from 'react'
import { getProduct } from '~/apis/product'
import { useParams } from 'react-router-dom'

type Props = {
  onEdit: (data: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, ''),
  thumbnail: Joi.string().required().min(0),
  discountPercentage: Joi.number().required().min(10).max(70),
  stock: Joi.number().required().min(10)
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<TProduct> = (data) => {
    onEdit({ ...data, id })
  }

  useEffect(() => {
    ;(async () => {
      const data = await getProduct(`${id}`)
      setProduct(data)
    })()
  }, [])

  return (
    <div className='max-w-md mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='title' className='mb-1'>
            Title
          </label>
          <input
            type='text'
            placeholder='Title'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='thumbnail' className='mb-1'>
            thumbnail
          </label>
          <input
            type='text'
            placeholder='thumbnail'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('thumbnail', { required: true })}
          />

          {errors.thumbnail && <span className='text-red-500'>{errors.thumbnail.message}</span>}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='price' className='mb-1'>
            Price
          </label>
          <input
            type='number'
            placeholder='Price'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='price' className='mb-1'>
            Discount
          </label>
          <input
            type='number'
            placeholder='Discount'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('discountPercentage', { required: true })}
          />
          {errors.discountPercentage && <span className='text-red-500'>{errors.discountPercentage.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='price' className='mb-1'>
            Stock
          </label>
          <input
            type='number'
            placeholder='Stock'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('stock', { required: true })}
          />
          {errors.stock && <span className='text-red-500'>{errors.stock.message}</span>}
        </div>
        <div className='flex flex-col'>
          <label htmlFor='description' className='mb-1'>
            Description
          </label>
          <input
            type='text'
            placeholder='Description'
            className='border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500'
            {...register('description')}
          />
          {errors.description && <span className='text-red-500'>{errors.description.message}</span>}
        </div>

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
