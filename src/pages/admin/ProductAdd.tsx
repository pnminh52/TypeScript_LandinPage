import { SubmitHandler, useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

type Props = {
  onAdd: (data: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().required().min(5).max(255),
  thumbnail: Joi.string().required().min(0)
  // description: Joi.string().allow(null, '')
})

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit: SubmitHandler<TProduct> = (data) => {
    onAdd(data)
  }

  return (
    <div className='max-w-md mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Add Product</h2>
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

export default ProductAdd
