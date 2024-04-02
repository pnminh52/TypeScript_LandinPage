import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import instance from '~/apis'
import { User } from '~/interfaces/User'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(userSchema)
  })
  const onSubmit = (user: User) => {
    console.log(user)
    ;(async () => {
      const { data } = await instance.post('/register', user)
      if (data.user) {
        const isConfirm = confirm('Dang ky thanh cong, sang trang dang nhap')
        if (isConfirm) {
          navigate('/login')
        }
      }
    })()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-center'>Register</h2>
        <div className=' mx-auto  px-4 py-4 sm:px-80 lg:px-80  '>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            className='w-full shadow-md rounded-lg p-4 pe-12 text-sm border border-gray-200 '
            placeholder='email'
            {...register('email', { required: true })}
          />
          {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        </div>
        <div className=' mx-auto  px-4 py-2 sm:px-80 lg:px-80 '>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='w-full shadow-md rounded-lg  p-4 pe-12 text-sm border border-gray-200 '
            placeholder='password'
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
        </div>
        <div className='text-center'>
          <button type='submit' className='border border-gray-200 mt-8 px-4 py-2 rounded-lg '>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
