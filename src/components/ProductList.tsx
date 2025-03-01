
import React, { useState } from 'react';
import { Product } from '../types/Product';
import { Plus } from 'lucide-react';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'AI Assistant',
      price: 99.99,
      description: 'Intelligent AI assistant for everyday tasks'
    }
  ]);
  
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: 0,
    description: ''
  });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price > 0) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: newProduct.price,
        description: newProduct.description
      };
      
      setProducts([...products, product]);
      setNewProduct({ name: '', price: 0, description: '' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter product name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Price ($)</label>
            <input
              type="number"
              value={newProduct.price || ''}
              onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value)})}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter price"
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={newProduct.description}
              onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
              placeholder="Enter product description"
              rows={3}
            />
          </div>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Product List</h2>
        {products.length === 0 ? (
          <div className="text-center py-4 text-gray-500">No products yet</div>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <div key={product.id} className="border dark:border-gray-700 p-4 rounded-md">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{product.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
