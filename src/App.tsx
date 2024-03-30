import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// import instance from './apis'
import Footer from './components/Footer'
import Header from './components/Header'
import { TProduct } from './interfaces/Product'
import Home from './pages/Home'
import Login from './pages/Login'
import Shop from './pages/Shop'
import Notfound from './pages/Notfound'
import ProductDetail from './pages/ProductDetail'
import Register from './pages/Register'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct, getProducts } from './apis/product'

function App() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    ;(async () => {
      const data = await getProducts()
      setProducts(data)
    })()
  }, [])
  const handleAddProduct = (data: TProduct) => {
    ;(async () => {
      const newProduct = await createProduct(data)
      setProducts([...products, newProduct])
      navigate('/admin')
    })()
  }
  return (
    <>
      <div className=''>
        <Header />
        <main className='' id='main'>
          <Routes>
            {/* Client */}
            <Route path='/'>
              <Route index element={<Home products={products} />} />
              <Route path='/shop/:id' element={<ProductDetail />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Route>

            {/* Admin */}
            <Route path='/admin'>
              <Route index element={<Dashboard products={products} />} />
              <Route path='/admin/add' element={<ProductAdd onAdd={handleAddProduct} />} />
            </Route>

            <Route path='*' element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
