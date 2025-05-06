import React from 'react';
import { render } from '@testing-library/react';
import { ProductButtons } from '../../src';


describe('ProductButtons', () => {

    test('should render component buttons with custom className', () => {
        const { container } = render(<ProductButtons className="custom-class" />);

        expect(container).toMatchSnapshot();
        expect(container.querySelector('.custom-class')).toBeDefined();
    })

    test('should render component buttons with custom style', () => {
        const { container } = render(<ProductButtons style={{ backgroundColor: 'red' }} />);
        
        expect(container).toMatchSnapshot();
        expect(container.querySelector('.buttonsContainer')?.getAttribute('style')).toContain('background-color: red;');
    })

})

