import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'
// import Product from './../../components/Product'
// import { deleteProduct } from '~/apis/product'

// type Props = {
//   products: TProduct[]
//   onDelete: (id: string) => void
// }
// const Dashboard = ({ products, onDelete }: Props) => {
//   const handleDelete = (id: string) => {
//     deleteProduct(id)
//     onDelete(id)
//   }
type Props = {
  products: TProduct[]
}
const Dashboard = ({ products }: Props) => {
  return (
    <div className='ml-4 '>
      <div className='mx-auto max-w-screen-xl px-2 py-8 sm:px-6 sm:py-12 lg:px-8  bg-white'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='text-center sm:text-left'>
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>Welcome Back, Admin!</h1>

            <p className='mt-1.5 text-sm text-gray-500'>Manage all your products here! 🎉</p>
          </div>

          <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
            <button
              className='inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring'
              type='button'
            >
              <span className='text-sm font-medium'> View Website </span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </button>
            <Link
              className='block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring'
              to='/admin/add'
            >
              Add new product
            </Link>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-xl  sm:px-8   border rounded-lg '>
        <table className='w-full divide-y-2 divide-gray-200 bg-white text-sm '>
          <thead>
            <tr>
              <th className=' px-2 py-2 font-medium text-gray-700'>#</th>
              <th className=' px-2 py-2 font-medium text-gray-700'>Title</th>
              <th className=' px-2 py-2 font-medium text-gray-700'>Price</th>
              <th className=' px-2 py-2 font-medium text-gray-700'>Thumbnail</th>
              <th className=' px-2 py-2 font-medium text-gray-700'>Description</th>
              <th className=' px-2 py-2 font-medium text-gray-700 '>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item) => (
              <tr key={item.id}>
                <td className=' px-8 py-2 ml-12  text-gray-700 '>{item.id}</td>
                <td className=' px-8 py-2 text-gray-700 '>{item.title}</td>
                <td className=' px-8 py-2 text-gray-700 '>{item.price}$</td>
                <td className=' px-8 py-2 text-gray-700'>
                  <img width={120} src={item.thumbnail} alt={item.title} />
                </td>
                <td className=' px-8 py-2 text-gray-700 '>{item.description}</td>

                <td className='flex ml-20 sm:py-14 lg:px-8'>
                  <Link
                    to={`/admin/edit/${item.id}`}
                    className='border rounded-lg px-4 py-2 bg-yellow-400 text-xs font-medium text-white hover:bg-yellow-500 hover:shadow-lg'
                  >
                    Edit
                  </Link>
                  <button
                    // onClick={() => handleDelete(String(item.id))}
                    className='border rounded-lg px-4 py-2 bg-red-600 text-xs font-medium text-white hover:bg-red-700 hover:shadow-lg'
                  >
                    Delete
                  </button>
                  <Link
                    to={`/shop/${item.id}`}
                    className='border rounded-lg px-4 py-2 bg-green-500 text-xs font-medium text-white hover:bg-green-700 hover:shadow-lg'
                  >
                    view
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
