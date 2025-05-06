import React from 'react';
import { render } from '@testing-library/react';
import { ProductImage, ProductCard } from '../../src';
import { fakeMockProduct2 } from './data/products';

const product = fakeMockProduct2;

describe('ProductImage', () => {

    test('should render component image with custom image', () => {
        const { container } = render(<ProductImage img="https://test.com/image.jpg" />);
        expect(container).toMatchSnapshot();

        expect(container.querySelector('img')).toBeDefined();
        expect(container.querySelector('img')?.src).toBe('https://test.com/image.jpg');
    })

    test('should render component with image of product from product context', () => {
        const { container } = render(<ProductCard product={product}>
                {
                    () => <ProductImage />
                }
            </ProductCard>
        );

        expect(container).toMatchSnapshot();
    })

})

