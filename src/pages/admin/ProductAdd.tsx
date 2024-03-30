import { SubmitHandler, useForm } from 'react-hook-form'
import { TProduct } from '~/interfaces/Product'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
// import { error } from 'console'

type Props = {
  onAdd: (data: TProduct) => void
}

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
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
    <div>
      <h2>Add product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=''>
          <label htmlFor='title'>Title</label>
          <input type='text' className='' placeholder='title' {...register('title', { required: true })} />
          {errors.title && <span className=''>{errors.title.message}</span>}
        </div>
        <div className=''>
          <label htmlFor='price'>Price</label>
          <input type='number' className='' placeholder='price' {...register('price', { required: true })} />
          {errors.price && <span className=''>{errors.price.message}</span>}
        </div>
        <div className=''>
          <label htmlFor='description'>Description</label>
          <input type='text' className='' placeholder='description' {...register('description')} />
        </div>
        <button type='submit' className=''>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
