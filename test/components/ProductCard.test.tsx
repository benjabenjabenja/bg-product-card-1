import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../../src';
import { fakeMockProduct2 } from './data/products';

const product = fakeMockProduct2;
const increaseByNumber = 1;

describe('ProductCard', () => {

    test('should render component', () => { 
        const { container } = render(<ProductCard product={product}>
            {
                () => <h1>Product Card</h1>
            }
        </ProductCard>);

        expect(container).toMatchSnapshot();
    })
    
    test('should render component with image, title and buttons', () => {
        const { container } = render(<ProductCard product={product}>
            { 
                () => (
                    <>
                        <ProductImage img={product.img} />
                        <ProductTitle title={product.title} />
                        <ProductButtons />
                    </>
                )
            }
        </ProductCard>);
        expect(container).toMatchSnapshot();
    })

    test('', () => {
        const { container } = render(<ProductCard product={product}>
            {
                ({ count, increaseBy }) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{count}</span>
                        <button onClick={() => increaseBy(increaseByNumber)}>+</button>
                    </>
                )
            }
        </ProductCard>);

        expect(container).toMatchSnapshot();

        const button = container.querySelector('button')!;
        expect(button).toBeDefined();
        expect(button?.textContent).toBe('+');
        expect(container.querySelector('button')?.getAttribute('onclick')).toBeDefined();

        fireEvent.click(button);
        expect(container.querySelector('span')?.textContent).toBe(increaseByNumber.toString());
    })
})

