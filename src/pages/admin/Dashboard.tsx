import React from 'react'
import { Link } from 'react-router-dom'
import { TProduct } from '~/interfaces/Product'

type Props = {
  products: TProduct[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <div className='ml-4'>
      <div>
        <h1 className='mb-4'>Hello, Admin</h1>
        <Link
          className='inline-block rounded mb-2 bg-green-600 px-6 py-2 text-xs font-medium text-white hover:bg-green-700'
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
                  <a
                    href='#'
                    className='inline-block rounded bg-yellow-400 px-4 py-2 text-xs font-medium text-white hover:bg-yellow-500 mr-2'
                  >
                    Edit
                  </a>

                  <a
                    href='#'
                    className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                  >
                    Delete
                  </a>
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
