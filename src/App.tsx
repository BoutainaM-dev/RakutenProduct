import React from 'react';
import ProductCard from './ProductCard';
import productData from './ProductData.json';

const App: React.FC = () => {
    return (
        <div>
            <ProductCard product={productData} />
        </div>
    );
};

export default App;
