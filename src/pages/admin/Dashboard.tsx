import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'

type Props = {
  products: TProduct[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <div className='ml-4'>
      <div>
        <div>
          <strong className='text-xl  text-black sm:text-xl cursor-pointer'>
            Explore the latest Apple products and accessories.
          </strong>
        </div>

        <Link
          className='inline-block rounded mb-2 mt-2 bg-green-600 px-6 py-2 text-xs font-medium text-white hover:bg-green-700'
          to='/admin/add'
        >
          Add new product
        </Link>
      </div>

      <div className='overflow-x-auto pl-2'>
        <table className='w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>#</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Title</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Price</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Thumbnail</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Description</th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>Action</th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200 '>
            {products.map((item) => (
              <tr key={item.id}>
                <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 '>{item.id}</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700 '>{item.title}</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700 '>{item.price}$</td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700'>
                  <img width={60} src={item.thumbnail} alt={item.title} />
                </td>
                <td className='whitespace-nowrap px-4 py-2 text-gray-700 '>{item.description}</td>

                <td className='pl-20'>
                  <Link to={`/admin/edit/${item.id}`} className=''>
                    Edit
                  </Link>
                  <button className=''>Delete</button>
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
