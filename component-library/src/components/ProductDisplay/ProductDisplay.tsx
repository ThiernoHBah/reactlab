import { type ProductDisplayProps } from '../../types';

export const ProductDisplay = ({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children
}: ProductDisplayProps) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>

      {showDescription && <p>{product.description}</p>}
      {showStockStatus && (
        <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      )}

      {onAddToCart && product.inStock && (
        <button onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      )}

      {children}
    </div>
  );
};
