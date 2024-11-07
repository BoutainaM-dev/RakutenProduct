import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

// Test 1 : if data is provided
test('renders image when product data is provided', () => {
    const product = {
        brand: "Apple",
        href: "/mfp/9623007/apple-iphone-15?pid=11517874360",
        title: "Apple iPhone 11 128 Go Double SIM Noir Sidéral",
        newPrice: "754 €",
        usedPrice: "720,99 €",
        image: "https://fr.shopping.rakuten.com/photo/4075345048_ML_NOPAD.jpg",
    };

    render(<ProductCard product={product} />);

    // Image should be imported from the right source
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', product.image);
});

// Test 2 : if data is null
test('does not render image when product data is not provided', () => {
    render(<ProductCard product={null} />);

    const image = screen.queryByRole('img');
    expect(image).not.toBeInTheDocument();
});
