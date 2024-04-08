import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '~/apis'
import { TProduct } from '~/interfaces/Product'

type Props = {
  category: string
}


const ProductList = (props: Props) => {
  console.log(props)
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get(`/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

  return (
    <div className='flex border rounded-lg shadow-lg'>
      <div className='w-1/5  '>
        <div className='flex h-full flex-col justify-between border-r bg-white'>
          <div className='px-4 py-6'>
            <ul className='mt-2 space-y-1 mb-2 '>
              <li>
                <a href='#' className='  block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'>
                  General
                </a>
              </li>

              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'>
                    <span className='text-sm font-medium'> Teams </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4'>
                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'>
                    <span className='text-sm font-medium'> Teams </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className='mt-2 space-y-1 px-4'>
                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition duration-300 ease-in-out'>
                    <span className='text-sm font-medium'> Teams </span>

                    <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </span>
                  </summary>

                  <fieldset>
                    <legend className='sr-only '>Checkboxes</legend>

                    <div className='space-y-2 ml-4'>
                      <label htmlFor='Option1' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option1' />
                        </div>

                        <div>
                          <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            John Clapton{' '}
                          </strong>
                        </div>
                      </label>

                      <label htmlFor='Option2' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option2' />
                        </div>

                        <div>
                        <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            Peter Mayer{' '}
                          </strong>
                        </div>
                      </label>

                      <label htmlFor='Option3' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option3' />
                        </div>

                        <div>
                        <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            Eric King{' '}
                          </strong>
                        </div>
                      </label>
                      <label htmlFor='Option4' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option4' />
                        </div>

                        <div>
                        <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            Eric King{' '}
                          </strong>
                        </div>
                      </label>
                      <label htmlFor='Option5' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option5' />
                        </div>

                        <div>
                        <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            Eric King{' '}
                          </strong>
                        </div>
                      </label>
                      <label htmlFor='Option6' className='flex cursor-pointer items-start gap-4'>
                        <div className='flex items-center'>
                          &#8203;
                          <input type='checkbox' className='size-4 rounded border-gray-300' id='Option6' />
                        </div>

                        <div>
                        <strong className='text-sm font-medium text-gray-500 hover:text-gray-700'>
                            {' '}
                            Eric King{' '}
                          </strong>
                        </div>
                      </label>
                    </div>
                  </fieldset>
                </details>
              </li>

             
              <li>
                <div className='space-y-2 mt-4'>
                  <details className='overflow-hidden rounded-lg border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-500 transition'>
                      <span className='text-sm font-medium'> Availability </span>

                      <span className='transition group-open:-rotate-180 '>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth='1.5'
                          stroke='currentColor'
                          className='h-4 w-4'
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                        </svg>
                      </span>
                    </summary>

                    <div className='border-t border-gray-200 bg-white'>
                      <header className='flex items-center justify-between p-4'>
                        <span className='text-sm text-gray-500'> 0 Selected </span>

                        <button type='button' className='text-sm text-gray-500 underline underline-offset-4'>
                          Reset
                        </button>
                      </header>

                      <ul className='space-y-1 border-t border-gray-200 p-4'>
                        <li>
                          <label htmlFor='FilterInStock' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterInStock' className='size-3 rounded border-gray-300' />

                            <span className='text-sm font-medium text-gray-500 hover:cursor-pointer'> In Stock (5+) </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterPreOrder' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterPreOrder' className='size-3 rounded border-gray-300' />

                            <span className='text-sm font-medium text-gray-500 hover:cursor-pointer'> Pre Order (3+) </span>
                          </label>
                        </li>

                       
                      </ul>
                      
                    </div>
                  </details>

                  
                </div>
              </li>
              <div>
              <ul className="space-y-1 mt-4">
  

  <li>
    <a
      href="#"
      className="group flex items-center transition duration-300 ease-in-out justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>

        <span className="text-sm font-medium"> Teams </span>
      </div>

      
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex transition duration-300 ease-in-out items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>

      <span className="text-sm font-medium"> Billing </span>
    </a>
  </li>

  <li>
    <a
      href="#"
      className="group transition duration-300 ease-in-out flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>

        <span className="text-sm font-medium"> Invoices </span>
      </div>

     
    </a>
  </li>

  <li>
    <a
      href="#"
      className="flex transition duration-300 ease-in-out items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 opacity-75"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>

      <span className="text-sm font-medium"> Account </span>
    </a>
  </li>
</ul>
              </div>
              <li>
              <div className='text-center mt-4'>
                        <button className='bg-gradient-to-b from-indigo-500  via-indigo-400 to-purple-300 text-white px-16 py-2 border rounded-3xl shadow-lg transition duration-300 ease-in-out font-medium'>Reset</button>
                      </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-4/5 p-4'>
        <div>
          <div className='flex flex-col items-center gap-4 p-6 shadow-lg sm:flex-row sm:justify-between rounded bg-gradient-to-b from-indigo-500  via-indigo-400 to-purple-300'>
            <strong className='font-bold text-white sm:text-xl cursor-pointer'>
              Explore the latest Apple products and accessories.
            </strong>
           
          </div>
          

          <div className='mt-4'>
            <div className='sm:hidden '>
              <label htmlFor='Tab' className='sr-only'>
                Tab
              </label>

              <select id='Tab' className='w-full rounded-md border-gray-200'>
                <option>Settings</option>
                <option>Messages</option>
                <option>Archive</option>
              </select>
            </div>

            <div className='hidden sm:block'>
              <div className='border-b border-gray-200'>
                <nav className='-mb-px flex gap-6' aria-label='Tabs'>
                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm transition duration-300 text-gray-500 hover:border-indigo-600 hover:text-gray-700'
                  >
                    Settings
                  </a>

                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm transition duration-300 text-gray-500 hover:border-indigo-600 hover:text-gray-700'
                  >
                    Messages
                  </a>

                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm transition duration-300 text-gray-500 hover:border-indigo-600 hover:text-gray-700'
                  >
                    Archive
                  </a>
                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm transition duration-300 text-gray-500 hover:border-indigo-600 hover:text-gray-700'
                  >
                    Archive
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-2'>
          {products.map((product) => (
            <div
              key={product.id}
              className='bg-white shadow-sm border p-4 rounded-lg mt-4 mb-2 hover:shadow-xl hover:border-indigo-700 transition duration-300 ease-in-out'
            >
              <svg
                className='border rounded-full h-7 w-7 text-red-500 transition-colors cursor-pointer hover:text-red-600'
                width='20'
                height='20'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                xmlns='http://www.w3.org/2000/svg'
              >
              
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  d='M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7'
                />
           
                <path
                  fill='currentColor'
                  d='M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7'
                  className='text-white transition-colors hover:fill-current hover:text-red-600 '
                />
              </svg>

              <Link to={`/shop/${product.id}`}>
                <img className='object-contain h-40 w-full' src={product.thumbnail} alt={product.title} />
              </Link>
              <Link to={`/shop/${product.id}`}>
                <h2 className='text-lg font-medium text-indigo-700'>{product.title}</h2>
              </Link>
              
             
                  <div className=' flex items-center gap-2 mb-2 '>
                  <p className='font-thin text-sm text-gray-500  '>Avaliable color:</p>
                    <form>
                      <fieldset>
                        <legend className='sr-only'>Color</legend>
                      </fieldset>

                      <div className='flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75'>
                        <div>
                          <input type='checkbox' id='ColorS' className='sr-only' />

                          <label
                            htmlFor='ColorS'
                            className='block size-4 cursor-pointer rounded-full bg-[#f1d2ff] transition hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Silver </span>
                          </label>
                        </div>

                        <div>
                          <input type='checkbox' id='ColorP' className='sr-only' />

                          <label
                            htmlFor='ColorP'
                            className='block size-4 cursor-pointer rounded-full bg-[#d884ff] transition  hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Pink </span>
                          </label>
                        </div>

                        <div>
                          <input type='checkbox' id='ColorG' className='sr-only' />

                          <label
                            htmlFor='ColorG'
                            className='block size-4 cursor-pointer rounded-full bg-[#bd2fff] transition hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Pink </span>
                          </label>
                        </div>

                        
                      </div>
                    </form>
                  </div>
                
              <div className='flex flex-col md:flex-row items-start md:items-center'>
              {product.oldPrice && ( 
  <span className=' mr-2 items-center font-thin text-sm text-gray-500 line-through'>
    {product.oldPrice}$
  </span>
)}

                <p className='text-red-500  md:mr-2 text-lg font-medium'>{product.price}$</p>
                <span className='whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-400 font-medium'>
                  {product.discountPercentage} %
                </span>
                
              </div>
              
              <div className='text-yellow-300'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p className='text-gray-500 mb-2 text-sm font-thin '>({product.stock} products available)</p>
              <p className='border-t-2  border-gray-200'></p>
              <div className='text-center mt-3'>
              <Link to={`/shop/${product.id}`} className="font-thin hover:cursor-pointer hover:text-indigo-700  transition duration-300 ease-in-out">View details</Link>
              </div>
              
            
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
