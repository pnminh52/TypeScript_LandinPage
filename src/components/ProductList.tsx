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
      <div className='w-1/5 '>
        <div className='flex h-full flex-col justify-between border-r bg-white'>
          <div className='px-4 py-6'>
            <ul className='mt-2 space-y-1 mb-2'>
              <li>
                <a href='#' className='block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700'>
                  General
                </a>
              </li>

              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Banned Users
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      >
                        Calendar
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details className='group [&_summary::-webkit-details-marker]:hidden'>
                  <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                          <strong className='text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
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
                <a href='#' className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 '>
                  Invoices
                </a>
                <a href='#' className='group block ml-4 '>
                  <div className=' flex gap-1 '>
                    <form>
                      <fieldset>
                        <legend className='sr-only'>Color</legend>
                      </fieldset>

                      <div className='flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75'>
                        <div>
                          <input type='checkbox' id='ColorS' className='sr-only' />

                          <label
                            htmlFor='ColorS'
                            className='block size-6 cursor-pointer rounded-full bg-[#b152dd] transition hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Silver </span>
                          </label>
                        </div>

                        <div>
                          <input type='checkbox' id='ColorP' className='sr-only' />

                          <label
                            htmlFor='ColorP'
                            className='block size-6 cursor-pointer rounded-full bg-[#cbff6a] transition  hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Pink </span>
                          </label>
                        </div>

                        <div>
                          <input type='checkbox' id='ColorG' className='sr-only' />

                          <label
                            htmlFor='ColorG'
                            className='block size-6 cursor-pointer rounded-full bg-[#ea9dec] transition hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Pink </span>
                          </label>
                        </div>

                        <div>
                          <input type='checkbox' id='ColorSb' className='sr-only' />

                          <label
                            htmlFor='ColorSb'
                            className='block size-6 cursor-pointer rounded-full bg-[#5795d8] transition hover:!opacity-100 border hover:border-gray-600'
                          >
                            <span className='sr-only'> Pink </span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </a>
              </li>
              <li>
                <div className='space-y-2 mt-4'>
                  <details className='overflow-hidden rounded-lg border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-500 transition'>
                      <span className='text-sm font-medium'> Availability </span>

                      <span className='transition group-open:-rotate-180'>
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

                            <span className='text-sm font-medium text-gray-500'> In Stock (5+) </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterPreOrder' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterPreOrder' className='size-3 rounded border-gray-300' />

                            <span className='text-sm font-medium text-gray-500'> Pre Order (3+) </span>
                          </label>
                        </li>

                        <li>
                          <label htmlFor='FilterOutOfStock' className='inline-flex items-center gap-2'>
                            <input type='checkbox' id='FilterOutOfStock' className='size-3 rounded border-gray-300' />

                            <span className='text-sm font-medium text-gray-500'> Out of Stock (10+) </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </details>

                  <details className='overflow-hidden rounded-lg border border-gray-300 [&_summary::-webkit-details-marker]:hidden'>
                    <summary className='flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-500 transition'>
                      <span className='text-sm font-medium'> Price </span>

                      <span className='transition group-open:-rotate-180'>
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
                        <span className='text-sm text-gray-500'> The highest price is $600 </span>

                        <button type='button' className='text-sm text-gray-500 underline underline-offset-4'>
                          Reset
                        </button>
                      </header>

                      <div className='border-t border-gray-200 p-4'>
                        <div className='flex justify-between gap-4'>
                          <label htmlFor='FilterPriceFrom' className='flex items-center gap-2'>
                            <span className='text-sm text-gray-500'>$</span>

                            <input
                              type='number'
                              id='FilterPriceFrom'
                              placeholder='From'
                              className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                            />
                          </label>

                          <label htmlFor='FilterPriceTo' className='flex items-center gap-2'>
                            <span className='text-sm text-gray-500'>$</span>

                            <input
                              type='number'
                              id='FilterPriceTo'
                              placeholder='To'
                              className='w-full rounded-md border-gray-200 shadow-sm sm:text-sm'
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-4/5 p-4'>
        <div>
          <div className='flex flex-col items-center gap-4 p-6 shadow-lg sm:flex-row sm:justify-between rounded bg-gradient-to-b from-indigo-500  via-indigo-400 to-purple-300'>
            <strong className='text-xl text-white sm:text-xl cursor-pointer'>
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
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm  text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  >
                    Settings
                  </a>

                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm  text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  >
                    Messages
                  </a>

                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm  text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  >
                    Archive
                  </a>
                  <a
                    href='#'
                    className='shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm  text-gray-500 hover:border-gray-300 hover:text-gray-700'
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
              className='bg-white  shadow-sm border p-4  rounded-lg mt-4 mb-2 hover:shadow-lg hover:border-indigo-700'
            >
              <Link to={`/shop/${product.id}`}>
                <img className='object-contain h-40 w-full' src={product.thumbnail} alt={product.title} />
              </Link>
              <Link to={`/shop/${product.id}`}>
                <h2 className='text-lg font-semibold text-indigo-700'>{product.title}</h2>
              </Link>
              {/* <p className='text-gray-700 '>{product.description}</p> */}
              <div className='flex flex-col md:flex-row items-start md:items-center'>
                <p className='text-red-500  md:mr-2 text-lg font-bold'>{product.price}$</p>
                <span className='whitespace-nowrap rounded-full bg-green-100 px-2.5 py-0.5 text-sm text-green-400 font-bold'>
                  {product.discountPercentage} %
                </span>
              </div>
              {/* <p className='text-gray-600 mb-2'>{product.rating}</p> */}
              {/* <div className='flex'> */}
              <div className='text-yellow-500'>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
              <p className='text-gray-600 mb-2 text-sm '>{product.stock} products available</p>
              {/* </div> */}
              <div className='flex '>
                <a
                  className='group relative inline-block text-sm font-medium  text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
                  href='#'
                >
                  <span className='absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>
                  <span className='relative block border border-current bg-white px-5 py-1'> Buy </span>
                </a>
                <a
                  className='group relative inline-block ml-2 text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500'
                  href='#'
                >
                  <span className='absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5'></span>
                  <span className='relative block border border-current bg-white  px-6 py-1'> Add to cart </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
