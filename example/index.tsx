import 'react-app-polyfill/ie11';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ProductCard, ProductImage, ProductTitle, ProductButtons, } from '../.'

const App = () => {

	const product = {
		id: "1",
		title: "Product 1",
		price: 10.99,
		img: ""
	}

	return (
		<>
			<ProductCard
				product={product}
				className="bg-dark text-white"
				initialValues={{
					count: 6,
					// maxCount: 10,
				}}>

				{
					({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
						<>
							<ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
							<ProductTitle className="text-bold" />
							<ProductButtons className="custom-buttons" />
                
							<button onClick={reset}>Reset</button>
							<button onClick={() => increaseBy(-2)}> -2 </button>
							{
								(!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
							}
                
							<span>{count} - {maxCount}</span>
						</>
					)
				}
			</ProductCard>

		</>
	);
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
