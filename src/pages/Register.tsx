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
        const isConfirm = confirm('Register successfully!')
        if (isConfirm) {
          navigate('/login')
        }
      }
    })()
  }

  return (
    <div>
      <div className='mx-auto max-w-screen-xl px-64 py-4 sm:px-6 lg:px-8  '>
        <div className='mx-auto max-w-sm border rounded-lg border-indigo-600'>
          <form onSubmit={handleSubmit(onSubmit)} className='mb-0  space-y-4 rounded-lg p-2 shadow-lg sm:p-16 lg:p-4'>
            <h1 className='text-center text-xl font-md text-indigo-600 '>Get started today</h1>

            <p className='mx-auto mt-2 max-w-md font-thin text-center text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore
              quaerat mollitia?
            </p>
            <p className='text-center text-md font-md text-indigo-600'>Create your personal account</p>

            <div>
              <div className='mb-2 font-thin text-indigo-600'>
                <label htmlFor='password'>Email</label>
              </div>

              <div className='relative'>
                <input
                  type='email'
                  className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter email'
                  {...register('email', { required: true })}
                />
                {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
              </div>
            </div>

            <div>
              <div className='mb-2 font-thin text-indigo-600'>
                <label htmlFor='password'>Password</label>
              </div>

              <div className='relative'>
                <input
                  type='password'
                  className='w-full rounded-lg border border-gray-600 p-4 pe-12 text-sm shadow-sm'
                  placeholder='Enter password'
                  {...register('password', { required: true, minLength: 6 })}
                />
                {errors.password && <div className='text-red-500'>{errors.password.message}</div>}
              </div>
            </div>
            <label htmlFor='Option1' className='flex cursor-pointer items-start gap-4'>
              <div className='flex items-center'>
                &#8203;
                <input
                  type='checkbox'
                  className='hover:cursor-pointer mr-2 size-3 rounded border border-gray-300'
                  id='Option1'
                />
                <strong className='font-thin text-sm text-gray-400 mr-2'> I agree to these </strong>
                <strong className='font-thin text-sm text-indigo-600'>Terms and User Policies</strong>
              </div>
            </label>
            <div>
              <button
                type='submit'
                className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
              >
                Submit
              </button>
            </div>

            <p className='text-center text-sm text-gray-500'>phamnhatminh PH41559</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
