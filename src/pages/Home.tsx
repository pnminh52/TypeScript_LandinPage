import ProductList from '~/components/ProductList'

const Home = () => {
  return (
    <div>
      <h2 className='sessionTitle'></h2>
      <ProductList category='nam' />
      {/* <br />
      <h2 className='sessionTitle'>Danh cho nu:</h2>
      <ProductList category='nu' /> */}
    </div>
  )
}

export default Home
