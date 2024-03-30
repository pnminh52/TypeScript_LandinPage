import { SubmitHandler, useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { error } from 'console'
import { useEffect, useState } from 'react'
import { getProduct } from '~/apis/product'
import { useParams } from 'react-router-dom'

type Props = {
  onEdit: (data: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  thumbnail: Joi.string().required().min(0),
  description: Joi.string().allow(null, '')
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
      <form onSubmit={handleSubmit(onSubmit)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className='text-xl font-bold mb-4'>Edit Product</h2>
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 text-sm font-bold mb-2'>
            Title
          </label>
          <input
            type='text'
            id='title'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Title'
            defaultValue={product?.title}
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-red-500'>{errors.title.message}</span>}
        </div>
        {/* images */}
        <div className='mb-4'>
          <label htmlFor='title' className='block text-gray-700 text-sm font-bold mb-2'>
            thumbnail
          </label>
          <input
            type='text'
            id='images'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Images URL'
            defaultValue={product?.thumbnail}
            {...register('thumbnail', { required: true })}
          />
          {errors.thumbnail && <span className='text-red-500'>{errors.thumbnail.message}</span>}
        </div>
        {/* images */}
        <div className='mb-4'>
          <label htmlFor='price' className='block text-gray-700 text-sm font-bold mb-2'>
            Price
          </label>
          <input
            type='number'
            id='price'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Price'
            defaultValue={product?.price as number}
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-red-500'>{errors.price.message}</span>}
        </div>
        <div className='mb-4'>
          <label htmlFor='description' className='block text-gray-700 text-sm font-bold mb-2'>
            Description
          </label>
          <input
            type='text'
            id='description'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            placeholder='Description'
            defaultValue={product?.description}
            {...register('description')}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
