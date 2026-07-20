import './ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const { id, title, price, description, category, thumbnail } = product

  const categoryClass =
    category.toLowerCase() === 'cricket' ? 'badge-cricket' : 'badge-football'

  return (
    <div className="product-card">
      <div className="product-thumb-wrap">
        <img src={thumbnail} alt={title} className="product-thumb" loading="lazy" />
        <span className={`badge ${categoryClass}`}>{category}</span>
      </div>

      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">${price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
