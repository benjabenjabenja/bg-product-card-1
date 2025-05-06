import React from 'react';
import { render } from '@testing-library/react';
import { ProductTitle, ProductCard } from '../../src';
import { fakeMockProduct2 } from './data/products';


//const product = fakeMockProduct;
const product2 = fakeMockProduct2;
describe('ProductTitle', () => { 
    test('should render component with title personalized', () => {
        const { container } = render(<ProductTitle title="Test Product Title" className='test-class' />);
        expect(container).toMatchSnapshot();
    });

    test('should render component with title of product from product context', () => {
        const { container } = render(
            <ProductCard product={product2}>
                {
                    () => <ProductTitle />
                }
            </ProductCard>
        );
        
        expect(container).toMatchSnapshot();
    })
})
