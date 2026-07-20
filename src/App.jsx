import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard.jsx'
import Loader from './components/Loader.jsx'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')
  const [cartCount, setCartCount] = useState(0)

  // Fetch product data once, when the component first renders
  useEffect(() => {
    fetch('/products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load products')
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data.products)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1)
  }

  const filteredProducts =
    filter === 'All'
      ? products
      : products.filter((p) => p.category === filter)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🏏⚽</span>
            <h1>Cricket &amp; Football Gear</h1>
          </div>
          <div className="cart">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="intro">
          <h2>Shop the latest gear</h2>
          <p>Everything you need on the pitch and on the crease.</p>
        </div>

        <div className="filter-bar">
          {['All', 'Cricket', 'Football'].map((option) => (
            <button
              key={option}
              className={`filter-btn ${filter === option ? 'active' : ''}`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {loading && <Loader />}

        {error && <p className="error-message">Something went wrong: {error}</p>}

        {!loading && !error && (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>Built with React + Vite — Cricket &amp; Football Gear Store</p>
      </footer>
    </div>
  )
}

export default App
