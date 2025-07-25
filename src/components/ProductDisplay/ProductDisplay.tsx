import React from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = true,
  showStockStatus = true,
  onAddToCart,
  children,
}) => {
  return (
    <div className="p-4 border rounded shadow-md max-w-sm text-center">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-bold">{product.name}</h2>
       {showDescription && <p className="text-gray-600 mb-2">{product.description}</p>}
  {showStockStatus && (
    <p className={`mb-4 font-medium ${
      product.inStock ? 'text-pink-600' : 'text-red-600'
    }`}>
      {product.inStock ? 'In Stock' : 'Out of Stock'}
    </p>
  )}
  {onAddToCart && product.inStock && (
    <button
      onClick={() => onAddToCart(product.id)}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-600"
    >
      Add to Cart
    </button>
  )}
  {children}
</div> 
  );
};

export default ProductDisplay;