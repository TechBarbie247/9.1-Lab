import React from 'react';
import type { ProductDisplayProps } from '../types';

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}): React.ReactElement => {
  return React.createElement(
    'div',
    { className: 'p-4 border rounded shadow-md max-w-sm text-center' },
    product.imageUrl &&
      React.createElement('img', {
        src: product.imageUrl,
        alt: product.name,
        className: 'w-24 h-24 rounded-full mx-auto mb-4',
      }),
    React.createElement('h2', { className: 'text-xl font-bold' }, product.name),
    showDescription &&
      React.createElement('p', { className: 'text-gray-600 mb-2' }, product.description),
    showStockStatus &&
      React.createElement(
        'p',
        {
          className: `mb-4 font-medium ${
            product.inStock ? 'text-pink-600' : 'text-red-600'
          }`,
        },
        product.inStock ? 'In Stock' : 'Out of Stock'
      ),
    onAddToCart &&
      product.inStock &&
      React.createElement(
        'button',
        {
          onClick: () => onAddToCart(product.id),
          className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-600',
          'aria-label': `Add ${product.name} to cart`,
        },
        'Add to Cart'
      ),
    children
  );
};

export default ProductDisplay;
