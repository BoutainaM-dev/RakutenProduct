import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

interface Product {
    brand: string;
    href: string;
    title: string;
    newPrice: string;
    usedPrice: string;
    image: string;
}

interface ProductCardProps {
    product: Product | null;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <Card sx={{ width: '343px', height: '152px', display: 'flex', padding: 2 , borderRadius: '8px'}}>
            <CardMedia
                component="img"
                sx={{ width: '120px', height: '120px', objectFit: 'cover' }}
                image={product.image}
                alt={product.title}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginLeft: '16px' }}>
                <CardContent sx={{ padding: 0 }}>
                    <Typography variant="body2" sx={{ fontSize: '14px', color: '#696969', fontWeight: 'bold' }}>
                        {product.brand}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: '14px', color: '#333', fontWeight: 'bold',maxWidth: '170px' }}>
                        {product.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body1" sx={{ fontSize: '20px', color: '#BF0000', fontWeight: 'bold' }}>
                            {product.newPrice}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '14px', color: '#BF0000', marginLeft: '4px' }}>
                            Neuf
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                        <Typography variant="body2" sx={{ fontSize: '14px', color: '#333' }}>
                            Occasion dès
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '20px', color: '#333', fontWeight: 'bold', marginLeft: '4px' }}>
                            {product.usedPrice}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

export default ProductCard;
